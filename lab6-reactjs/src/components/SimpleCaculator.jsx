import React, { useState } from 'react'


export default function SimpleCaculator() {
    const [display, setDisplay] = useState("");
    const [prev, setPrev] = useState(null);

    const handleClick = (value) => {


        if (value == "=") {
            const result = eval(display);
            setDisplay(result);

            return;
        } else {
            switch (value) {
                case "AC":
                    setDisplay("");
                    break
                case "+/-":
                    setPrev((parseFloat(prev) * -1).toString());
                    setDisplay(() => prev);
                    break
                case "×":
                    setDisplay(() => display + "*")
                    break
                case "÷":
                    setDisplay(() => display + "/")
                    break
                default:
                    setPrev(value);
                    setDisplay(() => `${display} ${value}`)

                    break

            }

        }

    }

    return (
        <>
            <h1 className='mt-4 text-center font-bold'>SimpleCaculator</h1>
            <div className="bg-gray-800 rounded-xl shadow-xl w-64 p-4 mx-auto mt-4">

                <div id='result' className="text-white text-right text-4xl p-2 h-16">{display}</div>


                <div className="grid grid-cols-4 gap-2 mt-4">

                    <button onClick={(e) => handleClick(e.target.dataset.value)} className="bg-gray-400 text-black py-4 rounded" data-value="AC">AC</button>
                    <button onClick={(e) => handleClick(e.target.dataset.value)} className="bg-gray-400 text-black py-4 rounded" data-value="+/-">+/-</button>
                    <button onClick={(e) => handleClick(e.target.dataset.value)} className="bg-gray-400 text-black py-4 rounded" data-value="%">%</button>
                    <button onClick={(e) => handleClick(e.target.dataset.value)} className="bg-orange-500 text-white py-4 rounded" data-value="÷">÷</button>

                    <button onClick={(e) => handleClick(e.target.dataset.value)} className="bg-gray-600 text-white py-4 rounded" data-value="7">7</button>
                    <button onClick={(e) => handleClick(e.target.dataset.value)} className="bg-gray-600 text-white py-4 rounded" data-value="8">8</button>
                    <button onClick={(e) => handleClick(e.target.dataset.value)} className="bg-gray-600 text-white py-4 rounded" data-value="9">9</button>
                    <button onClick={(e) => handleClick(e.target.dataset.value)} className="bg-orange-500 text-white py-4 rounded" data-value="×">×</button>


                    <button onClick={(e) => handleClick(e.target.dataset.value)} className="bg-gray-600 text-white py-4 rounded" data-value="4">4</button>
                    <button onClick={(e) => handleClick(e.target.dataset.value)} className="bg-gray-600 text-white py-4 rounded" data-value="5">5</button>
                    <button onClick={(e) => handleClick(e.target.dataset.value)} className="bg-gray-600 text-white py-4 rounded" data-value="6">6</button>
                    <button onClick={(e) => handleClick(e.target.dataset.value)} className="bg-orange-500 text-white py-4 rounded" data-value="−">−</button>


                    <button onClick={(e) => handleClick(e.target.dataset.value)} className="bg-gray-600 text-white py-4 rounded" data-value="1">1</button>
                    <button onClick={(e) => handleClick(e.target.dataset.value)} className="bg-gray-600 text-white py-4 rounded" data-value="2">2</button>
                    <button onClick={(e) => handleClick(e.target.dataset.value)} className="bg-gray-600 text-white py-4 rounded" data-value="3">3</button>
                    <button onClick={(e) => handleClick(e.target.dataset.value)} className="bg-orange-500 text-white py-4 rounded" data-value="+">+</button>


                    <button onClick={(e) => handleClick(e.target.dataset.value)} className="bg-gray-600 text-white py-4 rounded col-span-2" data-value="0">0</button>
                    <button onClick={(e) => handleClick(e.target.dataset.value)} className="bg-gray-600 text-white py-4 rounded" data-value=".">.</button>
                    <button onClick={(e) => handleClick(e.target.dataset.value)} className="bg-orange-500 text-white py-4 rounded" data-value="=">=</button>
                </div>
            </div>
        </>
    )
}
