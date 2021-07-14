import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo, toggleToDo, clearAllTasks, deleteAllTasks } from './redux/ActionCreators'
​
const Main = () => {
  const [todoInput, setTodoInput] = useState('')
  const todoList = useSelector((state) => state.ToDo) // mapStateToProps, now mapping to a variable
  const dispatch = useDispatch()
  const handleSubmit = () => {
    if (todoInput.length > 0) {
      dispatch(addTodo(todoInput))
      setTodoInput('')
    }
  }
​
  return (
    <div className='App'>
      <h1>Redux To Do List</h1>
      <ul>
        {todoList.todo.map((item, index) => {
          return (
            <li key={index}>
              <input type='checkbox' checked={item.complete} onChange={() => dispatch(toggleToDo(index))} />
              {item.activity}
            </li>
          )
        })}
        <div className='AddField'>
          <input type='text' onChange={(e) => setTodoInput(e.target.value)} value={todoInput} />
          <div>
            <button onClick={() => handleSubmit()}>Add To Redux</button>
            <button onClick={() => dispatch(clearAllTasks())}>Clear Complete</button>
            <button onClick={() => dispatch(deleteAllTasks())}>Clear List</button>
          </div>
        </div>
        <div>
          <br />
          Redux Challenge
          <br />
          <br />
          <div>
            <div>Add Tasks to list</div>
            <div>Status of task in Redux</div>
            <div>Ability to clear completed tasks</div>
          </div>
        </div>
      </ul>
    </div>
  )
}
​
export default Main