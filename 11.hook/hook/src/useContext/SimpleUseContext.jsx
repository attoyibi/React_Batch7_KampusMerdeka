import React, { useState, useContext, createContext } from 'react';
import ReactDOM from 'react-dom';

// 1. Membuat Context untuk Nama Pengguna
const UserContext = createContext();

export default function SimpleUseContext() {
    // 2. Membuat Provider untuk menyediakan nama pengguna dan fungsi untuk mengubahnya
    const [name, setName] = useState('John Doe');

    return (
        <UserContext.Provider value={{ name, setName }}>
            <div>
                <h1>Aplikasi Pengguna</h1>
                <UserProfile /> {/* Komponen yang akan menampilkan nama pengguna */}
                <ChangeUserName /> {/* Komponen untuk mengubah nama pengguna */}
            </div>
        </UserContext.Provider>
    );
};

// 3. Komponen untuk Menampilkan Nama Pengguna
const UserProfile = () => {
    const { name } = useContext(UserContext); // Mengambil nama pengguna dari context
    return <h2>Nama Pengguna: {name}</h2>; // Menampilkan nama pengguna
};

// 4. Komponen untuk Mengubah Nama Pengguna
const ChangeUserName = () => {
    const { setName } = useContext(UserContext); // Mengambil fungsi untuk mengubah nama pengguna
    const [newName, setNewName] = useState('');

    return (
        <div>
            <input
                type="text"
                placeholder="Masukkan nama baru"
                value={newName}
                onChange={(e) => setNewName(e.target.value)} // Mengatur state input
            />
            <button onClick={() => setName(newName)}>Ubah Nama</button> {/* Tombol untuk mengubah nama */}
        </div>
    );
};

