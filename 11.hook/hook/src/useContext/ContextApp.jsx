import React from 'react';
import { UserProvider } from './UserContext'; // Import UserProvider
import UserProfile from './UserProfile'; // Import komponen lain yang akan menggunakan context

function ContextApp() {
    return (
        <UserProvider>
            <div>
                <h1>Aplikasi Pengguna</h1>
                <UserProfile /> {/* Komponen yang akan menampilkan nama pengguna */}
            </div>
        </UserProvider>
    );
}

export default ContextApp;
