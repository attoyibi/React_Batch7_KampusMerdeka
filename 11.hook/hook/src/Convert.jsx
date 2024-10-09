import React, { useEffect, useState } from 'react';
import useConvert from './customHook/useConvert';
export default function Convert() {

    const { hasilConvertDariHook, format, convert } = useConvert();
    const [amount, setAmount] = useState(0);
    const [rate, setRate] = useState(0)

    const handleConvertToRupiah = () => {
        // lagikka conver
        convert(amount, rate);
        console.log("handleConvert");
    };
    return (
        <div>
            <h1>Currency Converter</h1>
            <input
                type="number"
                placeholder="Amount"
                onChange={(e) => setAmount(e.target.value)}
            />
            <input type="number" placeholder="Rate" onChange={(e) => setRate(e.target.value)} />
            <button onClick={handleConvertToRupiah}>Convert</button>

            <hr />

            Amount: {amount} <br /> Rate : {rate}
            <div>hasil convert : {format()}</div>
            <div>hasil state : {hasilConvertDariHook}</div>
        </div>
    )
}
