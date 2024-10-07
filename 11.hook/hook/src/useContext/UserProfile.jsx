import React, { useContext, useState } from 'react';
import { UserContext } from './UserContext'; // Import UserContext

const UserProfile = () => {
    const { name, setName } = useContext(UserContext); // Mendapatkan nama dan fungsi untuk mengubah nama
    const [newName, setNewName] = useState('');

    const handleChangeName = () => {
        setName(newName); // Mengubah nama pengguna
        setNewName(''); // Mengosongkan input setelah nama diubah
    };

    return (
        <div>
            <h2>Nama Pengguna: {name}</h2> {/* Menampilkan nama pengguna */}
            <input
                type="text"
                placeholder="Masukkan nama baru"
                value={newName}
                onChange={(e) => setNewName(e.target.value)} // Mengubah state input
            />
            <button onClick={handleChangeName}>Ubah Nama</button>
        </div>
    );
};

export default UserProfile;
