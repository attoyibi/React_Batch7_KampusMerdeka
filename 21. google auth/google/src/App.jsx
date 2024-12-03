import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import axios from 'axios';

// Tombol Login Google
const GoogleLoginButton = () => {
  const handleLoginGoogle = () => {
    window.location.href = 'https://greenenvironment.my.id/api/v1/users/login-google';
  };

  return <button onClick={handleLoginGoogle}>Login with Google</button>;
};

// Halaman Login
const Login = () => {
  return (
    <div>
      <h1>Login Page</h1>
      <GoogleLoginButton />
    </div>
  );
};

// Halaman Callback
const GoogleCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {

    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');
    const state = params.get('state');

    console.log('Received Code:', code);
    console.log('Received State:', state);

    if (code && state) {
      axios.post('https://greenenvironment.my.id/api/v1/users/google-callback', { code })
        .then((response) => {
          console.log('Response Status:', response.status);
          console.log('Received Data:', response.data);
          const { token } = response.data;
          if (token) {
            console.log('Token:', token);
            localStorage.setItem('userToken', token);
            console.log('Token saved to localStorage:', localStorage.getItem('userToken'));
            navigate('/dashboard');
          } else {
            console.error('Token not found in response');
            navigate('/login');
          }
        })
        .catch((error) => {
          console.error('Login failed:', error);
          navigate('/login');
        });
    } else {
      console.error('Code or State not found in URL');
      navigate('/login');
    }
  }, []);

  return (
    <>
      cek
      <div>Processing Google Login...</div>;
    </>
  )
};

// Halaman Dashboard
const Dashboard = () => {
  const token = localStorage.getItem('userToken');

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Your Token: {token}</p>
    </div>
  );
};

// Komponen Utama
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/users/google-callback" element={<GoogleCallback />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
