import React from 'react'
import delete_icon from '../assets/delete.png'
import tick from '../assets/tick.png'

const TodoList = ({text}) => {
    return (
        <div className='flex items-center my-3 gap-2'>
            <div className='flex flex-1 items-center cursor-pointer'>
                <img className='w-6' src={tick} alt="" />
                <p className='text-slate-700 ml-4 text-[18px]'>{text}</p>
            </div>
            <img className='w-4 cursor-pointer' src={delete_icon} alt="" />
        </div>
    )
}

export default TodoList
