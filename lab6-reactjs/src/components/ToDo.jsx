import React, { useState } from 'react'

export default function ToDo(props) {
    // console.log(props)

    const [ísSuccess, setIsSuccess] = useState(props.isSuccess);
    return (
        <li key={props.id} className='border-b-[1px] border-solid border-gray-300 flex justify-between p-1 '>
            {ísSuccess ?
                <div className='space-x-1 text-red-500 line-through'>
                    <span onClick={() => setIsSuccess((prev) => {
                        return !prev;
                    })}><i className="fa-solid fa-check cursor-pointer"></i></span>
                    <span>{props.content}</span>
                </div> :
                <div className='space-x-1 text-blue-500'>
                    <span onClick={() => setIsSuccess((prev) => {
                        return !prev;
                    })}><i className="fa-solid fa-check cursor-pointer"></i></span>
                    <span className=''>{props.content}</span>
                </div>

            }
            <span onClick={() => {
                props.deteletTodo()
            }} className='text-gray-300 cursor-pointer'>x</span>
        </li>
    )
}
