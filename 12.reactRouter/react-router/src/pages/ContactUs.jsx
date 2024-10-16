import React from 'react'
import { Link } from 'react-router-dom'
export default function ContactUs() {
    return (
        <div>List Dari semua kontak
            <div><Link to={`/contact/1`}>kontak 1</Link></div>
            <div><Link to={`/contact/2`}>kontak 2</Link></div>
        </div>
    )
}
