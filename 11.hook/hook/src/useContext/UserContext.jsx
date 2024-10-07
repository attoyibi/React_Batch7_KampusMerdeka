import React, { createContext, useState } from 'react';

// Membuat context untuk nama pengguna
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [name, setName] = useState('John Doe'); // Nama default

    return (
        <UserContext.Provider value={{ name, setName }}>
            {children}
        </UserContext.Provider>
    );
};
