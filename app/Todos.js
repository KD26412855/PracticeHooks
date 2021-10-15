import React from 'react'
import ReactDOM from 'react-dom'

 function generateId () {
  return '_' + Math.random().toString(36).substr(2, 9);
}

export default function Todo(){
  //let id=""
  const[todos,setTodos]=React.useState([])
  const[input,setInput]=React.useState('')
  const handleSubmit=()=>{
    setTodos(
      (todos)=>todos.concat(
                              {
                                text:input,
                                id:generateId()
                              }
                            )
    )
    setInput('')

  }
  //id=(todos.length > 0 )?todos[0].id:"";
  const removeToDo=(id)=>(setTodos((todos)=>todos.filter((t)=>t.id != id)))

  return (
    <div>
      <input
        type='text'
        value={input}
        placeholder='New Todo'
        onChange={(e)=>setInput(e.target.value)}
        />
        <button onClick={handleSubmit}>Submit</button>
        <ul>

        {todos.map(({text,id})=>(

          <li key={id}>
            <span>{text}</span>
            <button onClick={()=>removeToDo(id)}>X</button>
          </li>
        ))}
        </ul>
    </div>
  )
}
