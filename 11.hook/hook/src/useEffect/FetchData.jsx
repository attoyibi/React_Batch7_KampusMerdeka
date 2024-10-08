import { useEffect, useState } from 'react';

export default function FetchData() {
    const [pokémons, setPokémons] = useState([]); // State untuk menyimpan data Pokémon
    const [loading, setLoading] = useState(true); // State untuk loading
    const [error, setError] = useState(null); // State untuk menyimpan error

    // useEffect untuk mengambil data Pokémon dari API
    useEffect(() => {
        const fetchPokémons = async () => {
            console.log('Fetching Pokémon data...'); // Log untuk indikasi pengambilan data
            try {
                const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10'); // Mengambil 10 Pokémon
                if (!response.ok) {
                    throw new Error('Failed to fetch data'); // Jika response tidak ok
                }
                const data = await response.json(); // Mengambil data JSON
                setPokémons(data.results); // Menyimpan hasil ke state
            } catch (error) {
                setError(error.message); // Menyimpan pesan error jika ada
            } finally {
                setLoading(false); // Mengubah loading menjadi false setelah proses selesai
            }
        };

        fetchPokémons(); // Panggil fungsi untuk fetch data
    }, []); // Dependency array kosong berarti efek ini hanya dijalankan sekali saat komponen dipasang

    // Render loading, error, atau daftar Pokémon
    if (loading) {
        return <div><h1>Loading Pokémon...</h1></div>;
    }

    if (error) {
        return <div><h1>Error: {error}</h1></div>;
    }

    return (
        <div>
            <h1>Daftar Pokémon</h1>
            <ul>
                {pokémons.map((pokemon) => (
                    <li key={pokemon.name}>{pokemon.name}</li> // Tampilkan nama Pokémon
                ))}
            </ul>
        </div>
    );
}
