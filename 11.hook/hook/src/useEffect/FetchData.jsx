import React, { useEffect, useState } from 'react';
import useFetch from '../customHook/useFetch'
export default function FetchData() {
    const { data, loading, error } =  useFetch('https://pokeapi.co/api/v2/pokemon/ditto');
    if (loading) {
        return <p>Loading...</p>; // Tampilkan loading saat data sedang dimuat
    }

    return (
        <>
            <div>FetchData: {data ? data : 'Tidak ada data'}</div> {/* Menampilkan data jika ada */}
            <hr />
            {error && <div>Error: {error}</div>} {/* Menampilkan error jika ada */}
        </>
    );
}
