import Login from './Login'
import Dashboard from './Dashboard'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';// import './App.css'
import ProtectedRoute from './ProtectedRoute';
// 1. buat halaman/UI nya dulu terkait login
// 2. buat login/function pada setiap tombolnya sehingga bisa mengarahakn ke login api/yang lain
// 3. buat optinal status, jika berhasil akan redirect jika gagal maka akankeluar alert
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </Router>

    </>
  )
}

export default App
