
import React from 'react'

function Notes({note}) {

   
  return (
    
    <li>{note.important ? note.content +'★':note.content}</li>
  )
  
}

export default Notes;