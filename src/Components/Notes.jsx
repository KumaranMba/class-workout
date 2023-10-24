
import React from 'react'

function Notes({note}) {

  if(note.important){
    return(
      <li>{note.content}★</li>
    )
  }
  
  return (
    
    <li>{note.content}</li>
  )
  
}

export default Notes;