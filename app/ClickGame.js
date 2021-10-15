import React from 'react'
import ReactDOM from 'react-dom'

export default function ClickGame(){
const id=React.useRef(null)
  const [clickCounter,setclickConunter]=React.useState(0)
  const [timeLeft,settimeLeft]=React.useState(10)
const clear=()=>window.clearInterval(id.current)
React.useEffect(()=>{
  id.current=window.setInterval(()=>{
    settimeLeft((c)=>c-1)
  },1000)
  return clear
},[])

React.useEffect(()=>{
if(timeLeft==0)
  clear()
},[timeLeft])

const handleClick=()=>{setclickConunter((c)=>c+1)}

  return(
    <div>
    <p>{clickCounter}</p>
    <p>Time left:{timeLeft}</p>
    {
      timeLeft == 0?null
      :<button onClick={handleClick}>Click</button>
    }

    </div>
  )
}
