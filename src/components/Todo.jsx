import React, { useEffect, useRef, useState } from 'react'
import todo_icon from '../assets/todo_icon.png'
import TodoList from './TodoList'


const Todo = () => {

  const [todoList, setTodoList] = useState([]);
  const inputRef = useRef();

  const add = () => {

    const inputText = inputRef.current.value.trim();

    if (inputText === "") {
      alert("Enter a task");
      return null;
    }

    const newTodo = {
      id: Date.now(),
      text: inputText,
      isComplete: false
    }

    setTodoList((prev) => [...prev, newTodo]);
    inputRef.current.value = "";
  }

  const deleteTodo = (id) => {
    setTodoList((prevTodos) => {
      return prevTodos.filter((todo) => todo.id!==id);
    })
  }

  const toggle = (id) => {
    setTodoList((prevTodos) => {
      return prevTodos.map((todo)=>{
        if(todo.id === id){
          return {...todo, isComplete: !todo.isComplete}
        }
        return todo;
      })
    })
  }
  
  useEffect(()=>{
    console.log(todoList)
  },[todoList])

  return (
    <div className='bg-slate-100 w-96 place-self-center flex flex-col p-7 min-h-[450px] rounded-xl'>
      <div className='flex item-center mt-7 g-2'>
        <img className='w-8' src={todo_icon} alt="" />
        <h1 className='text-xl font-semibold'>To-Do List</h1>
      </div>

      <div className='flex items-center bg-gray-200 rounded-full my-7'>
        <input ref={inputRef} className='border-0 outline-none bg-transparent h-10 flex-1 pl-6 pr-2 placeholder:text-slate-600' type="text" placeholder='Add your task' />
        <button onClick={add} className='bg-orange-500 border-none rounded-full w-28 h-14 text-white text-lg font-medium cursor-pointer'>ADD</button>
      </div>

      <div>
        {todoList.map((item, index) => {
          return <TodoList key={index} text={item.text} id={item.id} isComplete={item.isComplete} deleteTodo={deleteTodo} toggle={toggle}/>
        })}
      </div>
    </div>
  )
}

export default Todo
