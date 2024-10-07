import { useState } from 'react';
export default function FunctionComponent() {
    let dataUsers =
    {
        name: 'muchson'
    }
    // pembuuatan variabel
    const [namaVariabel, setNamaVariabel] = useState(dataUsers);
    const handleClick = () => {
        setNamaVariabel(namaVariabel + 1);
        console.log('handle click');
    }
    return (
        <div>FunctionComponent = {namaVariabel}
            <button onClick={handleClick}>Rubah nama variabel</button>
        </div>
    )
}
