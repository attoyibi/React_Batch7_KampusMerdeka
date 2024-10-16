// import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ContactUs from './pages/ContactUs';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';
import ContactUsById from './pages/ContactUsById';
import Momo from './components/Momo';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/momo" element={<Momo />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/contact/:id" element={<ContactUsById />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <hr />
        <p><Link to='/contact'>balik ke halaman contact</Link></p>
      </Router>
    </>
  )
}

export default App
