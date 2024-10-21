// import './App.css'
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ContactUs from './pages/ContactUs';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';
import ContactUsById from './pages/ContactUsById';
import UserById from './pages/UserById';
// import Momo from './components/Momo';
function App() {
  return (
    <>
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/momo" element={<Momo />} /> */}
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/contact/:id" element={<ContactUsById />} />
          <Route path="*" element={<NotFound />} />
          <Route path='/users' element={<UsersLayout />}>
            {/* baru di masukkan routing yang lain */}
            <Route path=":id" element={<UserById />} />
            <Route path="baru" element={<NewUser />} />
          </Route>
          <Route path='/dashboard' element={<ProtectedRoute />}>
            {/* baru di masukkan routing yang lain */}
            <Route path=":id" element={<UserById />} />
            <Route path="baru" element={<NewUser />} />
          </Route>
        </Routes>
        {/* <hr />
        <p><Link to='/contact'>balik ke halaman contact</Link></p> */}
      </Router>
    </>
  )
}

export default App

const UsersLayout = () => {
  return <div>
    <Navbar />
    Users satu file dengan app.jsx - <Outlet />
    <Footer />.
  </div>
}

const Footer = () => {
  return <div>
    <hr />
    Fotter</div>
}

const NewUser = () => {
  return <div>User Baru</div>
}