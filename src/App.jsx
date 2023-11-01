// Passing data from child to parent.

import React from 'react';
import { useState } from 'react';

// child component
function Childcomponent({sentdatatoparent}){
  // passing data from the child to parent component.
  let message = `Hello parent`;
  const dataToSentToParent=()=>{
    sentdatatoparent(message);
  }
  return(
    <div>
      <button onClick={dataToSentToParent}>sendDataToTheParent</button>
      </div>
  )

}


// parent component
function App() {
 //Define a state to store the child data in the parent component.
 const [datafromchild,setDatafromchild] = useState('');
 
 const handledatafromchild =(message)=>{
  setDatafromchild(message);
 }

  return (
    <div>
      <div><p>Data from child:{datafromchild}</p></div>
      <div><Childcomponent sentdatatoparent={handledatafromchild}/></div>
    </div>
  )
}

export default App;