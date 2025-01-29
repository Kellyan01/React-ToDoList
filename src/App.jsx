import { useState } from 'react'
import './App.css'

const TODOS = [
  {todo : "Rédiger cours REACT", date : "2025-02-01", checked : true, heure : 10, categorie : "Formation"},
  {todo : "Faire les courses du soir", date : "2025-01-28", checked : false, heure : 1, categorie : "Quotidien"},
  {todo : "RSortir entre pote", date : "2025-02-02", checked : false, heure : 3, categorie : "Loisir"}
]

function ToDo({todo, date, checked, heureRestante}){
  const [heure, setHeure] = useState(heureRestante)

  function handleClick(){
    alert(todo)
  }

  function handleClickMinus(){
    if(heure > 0){
      setHeure(heure - 1)
    }
  }

  function handleClickPlus(){
    setHeure(heure + 1)
  }

  if(checked){
    return (
      <li className='green' /*onClick={handleClick}*/><input type="checkbox" defaultChecked />{todo} - {date} <button onClick={handleClickMinus}>-</button><button onClick={handleClickPlus}>+</button> heure restante : {heure}</li>
    )
  }
  return (
    <li className='orange' /*onClick={handleClick}*/>{todo} - {date} <button onClick={handleClickMinus}>-</button><button onClick={handleClickPlus}>+</button> heure restante : {heure}</li>
  )
}

function ToDoTernaire({todo, date, checked}){
  return checked ? <li className='green'><input type="checkbox" defaultChecked />{todo} - {date}</li> : <li className='orange'>{todo} - {date}</li>
}

function ToDoAnd({todo, date, checked}){
  return <li className={checked ? 'green' : 'orange'}>{checked && <input type="checkbox" defaultChecked/>}{todo} - {date}</li>
}

function Form({onSubmit}){
  function handleChange(event){
    console.log(event.target.value)
  }


  return (
    <form onSubmit={onSubmit}>
      <input type="text" placeholder='La ToDo' onChange={event => handleChange(event)}/>
      <input type="text" placeholder='La Date' onChange={event => handleChange(event)}/>
      <input type="submit" />
    </form>
  )
}

function App() {
  const [formation, setFormation] = useState(true)
  const [quotidien, setQuotidien] = useState(true)
  const [loisir, setLoisir] = useState(true)

  const DATE = new Date()

  const TODOLIST = TODOS.filter((element)=>{
    if(element.categorie == "Formation" && !formation == true){
      return false
    }
    if(element.categorie == "Quotidien" && !quotidien == true){
      return false
    }
    if(element.categorie == "Loisir" && !loisir == true){
      return false
    }

    return true
  })

  const TAB_TODOS = TODOLIST.map((todo, index)=>{
    return <ToDo key={index} todo={todo.todo} date={todo.date} checked={todo.checked} heureRestante={todo.heure}/>
  })

  function handleSubmit(event){
    event.preventDefault()
    const INPUTS = document.querySelectorAll("input[type='text']")
    INPUTS.forEach(element => console.log(element.value))
  }

  return (
    <article className='todolist'>
      <h1>Ma ToDo List</h1>
      <h2>{DATE.toLocaleString()}</h2>
      <label><input type="checkbox" checked={formation} onChange={()=> setFormation(!formation)} />Formation</label>
      <label><input type="checkbox" checked={quotidien} onChange={()=> setQuotidien(!quotidien)}/>Quotidien</label>
      <label><input type="checkbox" checked={loisir} onChange={()=> setLoisir(!loisir)}/>Loisir</label>
      <ul>
        {/* {TODOS.map((todo, index)=>(
          <ToDo key={index} todo={todo.todo} date={todo.date} checked={todo.checked} />
        ))} */}

        {TAB_TODOS}
      </ul>
      <Form onSubmit={event => handleSubmit(event)}/>
    </article>
  )
}

export default App
