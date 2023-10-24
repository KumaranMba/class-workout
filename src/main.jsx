import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


// data 

const notes =[
    {id:1,
    content:"HTML is easy",
    important:true
    },
    {id:2,
    content:"Browser can execute JS",
    important:false
    },
    {
    id:3,
    content:"click me",
    important:true
    },
    {
    id:4,
    content:"Give me an extension",
    important:false
    },
    {
    id:5,
    content:"Try to claer the problem",
    important:true
    } 
    
]

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
