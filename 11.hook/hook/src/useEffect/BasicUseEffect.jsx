import { useEffect, useState } from 'react'

export default function BasicUseEffect() {
    const [namaVariabel, setNamaVariabel] = useState('');
    const [namaVariabel2, setNamaVariabel2] = useState('');
    // useEffect(() => {
    //     //logika dari use effect
    //     console.log('useEffect versi 1 Hook is called')
    // })
    useEffect(() => {
        //logika dari use effect untuuk fecht data
        console.log('useEffect versi 2 Hook is called')
    }, [])

    useEffect(() => {
        //logika dari use effect untuuk fecht data
        if (namaVariabel == 'kasar') {
            alert('gak boleh broi')
        }
        console.log('useEffect versi 3 Hook is called')
    }, [namaVariabel, namaVariabel2])

    useEffect(() => {
        //logika dari use effect untuuk fecht data
        if (namaVariabel == 'kasar') {
            alert('gak boleh broi')
        }
        console.log('useEffect versi 4 Hook is called')
    }, [namaVariabel2])

    const handleClick = () => {
        setNamaVariabel('muuchson');
        console.log('handle click');
    }
    return (
        <div><h1>BasicUseEffect</h1>
            <input
                onChange={(e) => {
                    const value = e.target.value; // Ambil nilai input
                    setNamaVariabel(value); // Perbarui state
                    console.log(value); // Cetak nilai ke konsol
                    console.log('===================');
                }}
                placeholder="Masukkan nama"
            />
            <input
                onChange={(e) => {
                    const value = e.target.value; // Ambil nilai input
                    setNamaVariabel2(value); // Perbarui state
                    console.log(value); // Cetak nilai ke konsol
                    console.log('===================');
                }}
                placeholder="Masukkan alamat"
            />
            <div>{namaVariabel}</div>namaVariabel
            <button onClick={handleClick}>Rubah nama variabel</button>

        </div>
    )
}
