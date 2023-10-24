
import React from 'react'
import Notes from './Components/Notes';
function App({notes}) {
//  const notes = props.notes;
//   const {notes} =props;
  const addNote = (event)=>{
    event.preventDefault();
    console.log('button clicked',event.target);
  }  

  return (
    <div>
        <h1>Notes</h1>
        <ul>{
            notes.map(note=>
            <Notes key={note.id} note={note}/>
             )
            }
        </ul>

        <form onSubmit={addNote}>
          <input/>
          <button type='submit'>SaveNotes</button>
        </form>
    </div>
  )
}

export default App;
