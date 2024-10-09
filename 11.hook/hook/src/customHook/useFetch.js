import React, { useEffect, useState } from 'react';


export default function useFetch(url) {
    const [data, setData] = useState(null); // Ganti undefined dengan null untuk memudahkan pengecekan
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    async function fetchData() {
        setLoading(true); // Set loading menjadi true saat mulai memanggil API
        try {
            // Memanggil API
            const response = await fetch(url);

            console.log("Ini response:", response);

            // Cek apakah respons berhasil
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`); // Lempar error jika respons tidak oke
            }

            const result = await response.json(); // Mengambil data dalam format JSON
            console.log("Ini result:", result);

            // Set data dari abilities
            setData(result.abilities[0].ability.name);

        } catch (error) {
            console.error('Terjadi kesalahan:', error); // Mencetak kesalahan ke konsol
            setError(error.message); // Simpan pesan kesalahan ke state
        } finally {
            setLoading(false); // Set loading menjadi false setelah pengambilan selesai
        }
    }

    useEffect(() => {
        fetchData();
        console.log('Pemanggilan API dilakukan');
    }, []);

    return { data, loading, error };
}
