
import React from 'react'
import Notes from './Components/Notes';
import'./style/App.css';


function App({notes}) {
//  const notes = props.notes;
//   const {notes} =props;
 function handleSaveClick(){
  console.log('save button clicked');
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

        <form >
          <input/>
          <button onClick ={
            () =>console.log("Save button clicked")
          } >SaveNotes
          </button>
        </form>
    </div>
  )
}

export default App;
