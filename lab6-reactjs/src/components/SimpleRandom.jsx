import React, { useState } from 'react'

export default function SimpleRandom() {
    const [min, setMin] = useState("");
    const [max, setMax] = useState("");
    const [randomResult, setRandomResult] = useState(0);

    const handleGenerate = () => {
        if (!min || !max) {
            console.log("Error");
        } else {
            setRandomResult(Math.floor(Math.random() * (max - min + 1)) + parseInt(min))



        }
        console.log(randomResult);
    }
    return (
        <>
            <h1 className='mt-4 text-center font-bold'>Simple Random</h1>
            <div className='flex flex-col w-80 bg-gray-300 p-4 rounded-md mx-auto mt-5'>
                <div className='w-full p-2 flex justify-between'>
                    <span className='w-2/3 font-bold text-2xl'>{randomResult}</span>
                    <div className='flex flex-col w-1/3'>
                        <input onChange={(e) => setMin(e.target.value)} className='outline-none  border-b-2 border-solid border-black' placeholder='Min' type='number' value={min} />
                        <input onChange={(e) => setMax(e.target.value)} className='outline-none  border-b-2 border-solid border-black' placeholder='Max' type='number' value={max} />
                    </div>
                </div>
                <div className='w-full  text-center text-white'>
                    <button onClick={() => handleGenerate()} className='w-full p-1 bg-blue-600 rounded-sm'>GENERATE</button>
                </div>
            </div>
        </>
    )
}
