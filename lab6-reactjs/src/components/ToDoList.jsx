import React, { useState } from 'react'
import ToDo from './ToDo'


export default function ToDoList() {
    const [content, setContent] = useState("");
    const [todoList, setTodoList] = useState([{
        content: "learn react",
        isSuccess: false,
    },
    {
        content: "Go shopping",
        isSuccess: true,
    },
    {
        content: "buy follower",
        isSuccess: true,
    }])
    const handleAddTodo = () => {
        console.log(content);
        setTodoList((prev) => {
            const newTodo = {
                content: content,
                isSuccess: false
            };

            return [...prev, newTodo]
        })
        console.log(todoList);

    }

    const handleDeleteTodo = (index) => {
        console.log(index);

        setTodoList((prev) => {
            return prev.filter((_, i) => i !== index)
        });
    }

    return (
        <>
            <h1 className='mt-4 text-center font-bold'>Todo List</h1>
            <div className='w-80 rounded-md p-4 mx-auto mt-4 bg-black space-y-3'>
                <h1 className='text-blue-500 font-bold'>ToDo List</h1>
                <div className='bg-white p-2 rounded-sm'>
                    <ul>
                        {todoList.map((item, index) => (
                            <ToDo key={index} content={item.content} isSuccess={item.isSuccess} deteletTodo={() => handleDeleteTodo(index)} />
                        ))}
                    </ul>
                </div>
                <div className=' w-full  rounded-sm space-x-2 flex'>
                    <input onChange={(e) => setContent(e.target.value)} value={content} className='w-[80%] bg-white px-1 rounded-sm' type='text' placeholder='Add new ToDo' />
                    <button onClick={() => {
                        handleAddTodo();
                    }} className='w-[20%] bg-white rounded-sm'>Add</button>
                </div>
            </div>
        </>
    )
}
