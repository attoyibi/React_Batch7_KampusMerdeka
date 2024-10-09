import React, { useEffect, useState } from 'react';

export default function useConvert() {
    const [hasilConvertDariHook, setConvert] = useState(0);

    const convert = (amount, rate) => {
        //llogika  masukk  ini
        const exchangeRate = rate
        console.log("data dari custom hook=  ", amount * exchangeRate);
        setConvert(amount * exchangeRate)
    };
    const format = () =>{
        return `Rp. ${hasilConvertDariHook}`
    } 
    return  {hasilConvertDariHook, format, convert }
}
