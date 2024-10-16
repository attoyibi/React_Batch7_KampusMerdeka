// import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ContactUs from './pages/ContactUs';
import NotFound from './pages/NotFound';
function App() {
  return (
    <>
      <Router>
        <nav>
          <ul>
            <li><Link to='/'>Home</Link> </li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
