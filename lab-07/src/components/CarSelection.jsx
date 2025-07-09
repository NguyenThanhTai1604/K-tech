import React, { useState } from 'react'

const carList = [
    "BMW",
    "Mercedes",
    "Audi"
]

const colorList = [
    "Black",
    "Red",
    "White"
]

export default function CarSelection() {
    const [carSelected, setCarSelected] = useState(carList[0]);
    const [colorSelected, setColorSelected] = useState(colorList[0]);
    return (
        <div className='car-selection'>
            <h1>Select your Car</h1>
            <div>
                <span>Select Car      </span>
                <select onChange={(e) => setCarSelected(e.target.value)} value={carSelected}>
                    {carList.map((item, index) => (<option key={index}>{item}</option>))}
                </select>
            </div>
            <span>Select a color     </span>
            <select onChange={(e) => setColorSelected(e.target.value)} value={colorSelected}>
                {colorList.map((item, index) => (<option key={index}>{item}</option>))}
            </select>
            <h1>You selected a {colorSelected} - {carSelected}</h1>
        </div>
    )
}
