import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import './App.css'
// 1. buat halaman/UI nya dulu terkait login
// 2. buat login/function pada setiap tombolnya sehingga bisa mengarahakn ke login api/yang lain
// 3. buat optinal status, jika berhasil akan redirect jika gagal maka akankeluar alert
function Login() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  function handleChange(e) {
    setPassword(e.target.value);
    console.log("handle change");
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log("username = ", username);
    console.log("password = ", password);
    if (username == "muchson" && password == "admin") {
      // akan di arahkan ke halaman admin
      // simpan status login pada local storage
      localStorage.setItem("status", "true");
      localStorage.setItem("token", "ey....");
      alert("berhasil login in");
      navigate('/dashboard')
    } else {
      alert("username atau password salah");
    }
  }
  return (
    <>
      <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <input name="username" placeholder="Username" onChange={(e) => setUsername(e.target.value)}></input>
          <input name="password" placeholder="Password" onChange={handleChange}></input>
          <button type="submit">submit</button>
        </form>
      </div>
    </>
  )
}

export default Login
