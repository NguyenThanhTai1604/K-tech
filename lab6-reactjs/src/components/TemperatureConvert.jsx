import React, { useState } from 'react'

export default function TemperatureConvert() {
    const [celsius, setCelsius] = useState("");
    const [fahrenheit, setFahrenheit] = useState("");
    const [kelvin, setKelvin] = useState("");
    const handleConvert = (value, type) => {

        if (value) {
            value = parseFloat(value);
            switch (type) {
                case "C":
                    setCelsius(value);
                    setFahrenheit(Math.round((value * 9 / 5) + 32));
                    setKelvin(Math.round(value + 273.15));
                    break
                case "F":
                    setCelsius(Math.round((value - 32) * 5 / 9));
                    setFahrenheit(value);
                    setKelvin(Math.round(((value - 32) * 5 / 9) + 273.15));
                    break
                default:
                    setCelsius(Math.round(value - 273.15));
                    setFahrenheit(Math.round(((value - 273.15) * 9 / 5) + 32));
                    setKelvin(value);
                    break
            }
        } else {
            setCelsius("");
            setFahrenheit("");
            setKelvin("");
        }



    }
    return (
        <>
            <h1 className='mt-4 text-center font-bold'>Temperature Convert</h1>
            <div className='w-96 p-4 rounded-md bg-gray-500 mx-auto mt-4'>
                <h1 className='text-center font-bold'>Temperature</h1>
                <div className='flex p-2 gap-3'>
                    <div className='w-1/3'>
                        <h2 className='font-bold text-center'>
                            Celsius
                        </h2>
                        <input onChange={(e) => { handleConvert(e.target.value, e.target.dataset.type) }} data-type='C' type='number' value={celsius} className=' w-full outline-none bg-white p-1' />
                    </div>
                    <div className='w-1/3'>
                        <h2 className='font-bold text-center'>
                            Fahrenheit
                        </h2>
                        <input onChange={(e) => { handleConvert(e.target.value, e.target.dataset.type) }} data-type='F' type='number' value={fahrenheit} className='outline-none w-full bg-white p-1' />
                    </div>
                    <div className='w-1/3'>
                        <h2 className='font-bold text-center'>
                            Kelvin
                        </h2>
                        <input onChange={(e) => { handleConvert(e.target.value, e.target.dataset.type) }} data-type='K' type='number' value={kelvin} className='outline-none w-full bg-white p-1' />
                    </div>
                </div>
            </div>
        </>
    )
}
