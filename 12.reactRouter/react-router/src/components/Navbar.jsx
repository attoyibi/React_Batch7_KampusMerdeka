import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div><nav>
            <ul>
                <li><Link to='/'>Home</Link> </li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/contact">id 1</a></li>
                <li><a href="/contact">id 2</a></li>
                <li><a href="/contact">id 3</a></li>
            </ul>
        </nav></div>
    )
}
