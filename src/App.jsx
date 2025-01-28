import { useState } from 'react'
import './App.css'

const TODOS = [
  {todo : "Rédiger cours REACT", date : "2025-02-01", checked : true},
  {todo : "Faire les courses du soir", date : "2025-01-28", checked : false},
  {todo : "RSortir entre pote", date : "2025-02-02", checked : false}
]

function ToDo({todo, date, checked}){
  if(checked){
    return (
      <li className='green'><input type="checkbox" defaultChecked />{todo} - {date}</li>
    )
  }
  return (
    <li className='orange'>{todo} - {date}</li>
  )
}

function ToDoTernaire({todo, date, checked}){
  return checked ? <li className='green'><input type="checkbox" defaultChecked />{todo} - {date}</li> : <li className='orange'>{todo} - {date}</li>
}

function ToDoAnd({todo, date, checked}){
  return <li className={checked ? 'green' : 'orange'}>{checked && <input type="checkbox" defaultChecked/>}{todo} - {date}</li>
}

function App() {
  const DATE = new Date()

  const TAB_TODOS = TODOS.map((todo, index)=>{
    return <ToDoAnd key={index} todo={todo.todo} date={todo.date} checked={todo.checked}/>
  })

  return (
    <article className='todolist'>
      <h1>Ma ToDo List</h1>
      <h2>{DATE.toLocaleString()}</h2>
      <ul>
        {/* {TODOS.map((todo, index)=>(
          <ToDo key={index} todo={todo.todo} date={todo.date} checked={todo.checked} />
        ))} */}

        {TAB_TODOS}
      </ul>
    </article>
  )
}

export default App
