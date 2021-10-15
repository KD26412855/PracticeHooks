import React from 'react'
import ReactDOM from 'react-dom'
import Todo from './Todos'
import AppForUseEffect from './FetchWithUseEffect'
import ClickGame from './ClickGame'

const rootElement=document.getElementById("root");
ReactDOM.render(<ClickGame/>,rootElement);
//ReactDOM.render(<AppForUseEffect/>,rootElement);
//ReactDOM.render(<Todo/>,rootElement);
