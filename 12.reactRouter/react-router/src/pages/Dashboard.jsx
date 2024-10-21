import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
export default function Dashboard() {
    const navigate = useNavigate();
    useEffect(() => {
        console.log('halaman di akses');
        console.log("isLogin pada localStorage = ", localStorage.getItem('isLogin'));
        // kita cek dulu hak akses dari user
        let isLogin = localStorage.getItem('isLogin');
        // let isLoginDariDataBase = haru fetching dari database
        if (isLogin == 'false') {
            navigate('/');
        }
    }, []);
    return (
        <div>Dashboard</div>
    )
}
