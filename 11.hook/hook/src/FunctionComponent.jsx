import { useState } from 'react';
export default function FunctionComponent() {
    let dataUsers =
    {
        name: 'muchson'
    }
    // pembuuatan variabel
    const [namaVariabel, setNamaVariabel] = useState('muchson');
    const [name, setName] = useState('aini');

    const handleClick = () => {
        setNamaVariabel(namaVariabel + 1);
        console.log('handle click');
    }

    const handleName = () => {
        setName("Khurotul Aini");
    }
    return (
        <div>FunctionComponent = {namaVariabel}
            <button onClick={handleClick}>Rubah nama variabel</button>
            <hr />
            {name}
            <button onClick={handleName}>Khurotul Aini</button>
        </div>

    )
}
