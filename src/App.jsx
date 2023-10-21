
import React from 'react'
import Notes from './Components/Notes';
function App({notes}) {
//  const notes = props.notes;
//   const {notes} =props;
  
  return (
    <div>
        <h1>Notes</h1>
        <ul>{
            notes.map(note=>
            <Notes key={note.id} note={note}/>
             )
            }
        </ul>
    </div>
  )
}

export default App;
