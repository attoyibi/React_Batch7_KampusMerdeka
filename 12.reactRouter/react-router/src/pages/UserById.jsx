import React from 'react'
import { Link } from 'react-router-dom'
export default function UserById() {
    return (
        <div>List Dari semua user
            <div><Link to={`/contact/1`}>user 1</Link></div>
            <div><Link to={`/contact/2`}>user 2</Link></div>
        </div>
    )
}
