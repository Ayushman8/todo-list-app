import React from 'react'
import delete_icon from '../assets/delete.png'
import tick from '../assets/tick.png'
import not_tick from '../assets/not_tick.png'

const TodoList = ({text,id,isComplete,deleteTodo,toggle}) => {
    return (
        <div className='flex items-center my-3 gap-2'>
            <div onClick={()=>toggle(id)} className='flex flex-1 items-center cursor-pointer'>
                <img className='w-6' src={isComplete ? tick : not_tick} alt="" />
                <p className={`text-slate-700 ml-4 text-[18px] decoration-slate-500 ${isComplete ? "line-through":""}`}>{text}</p>
            </div>
            <img onClick={()=>deleteTodo(id)} className='w-4 cursor-pointer' src={delete_icon} alt="" />
        </div>
    )
}

export default TodoList
