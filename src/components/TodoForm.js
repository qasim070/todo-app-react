import React, {useState}from 'react'


export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState("")

    const handleSumbit = e => {
        e.preventDefault();

        addTodo(value)

        setValue("")
    }
  return (
    <form className='TodoForm' onSubmit={handleSumbit}>
        <input type='text' className='todo-input' value={value} placeholder='what is the task today' onChange={(e) => setValue(e.target.value)}/>
        <button type='sumbit' className='todo-btn'>Add task </button>

    </form>
  )
}

export default TodoForm
