// const App =()=>{
//   return(
//     <p>Hello world!</p>
//   )
// }

// export default App;



// create another same method using named function
// function App(){

//   const now = new Date();
//   console.log(now);
//   const a =10;
//   const b =20;
 
//   return(
//     <div>
//       <p>Hello world, it is {now.toString()}</p>
//       <p> {a} plus {b} is {a+b}</p>
//     </div>
//   )
//   }
// export  default App;

// Adding multiple components

// function Hello(){
//   return(
//     <p>Hello world</p>
//   )
// }


// function App(){
//   return(
//     <div>
//       <h3>Greetings</h3>
//       <Hello/>
//       <Hello/>
//       <Hello/>
//       <Hello/>
//       </div>
//   )
// }

// export default App;

// Adding properties to function


function Hello(name){
  console.log(name);
  return(
    <p>Hello {name.username}</p>
  )
}
function App(){

  let user1 ='dinesh';
  let user2 ='kumaran';
  return(
    <div>
      <h3>Greetings</h3>
      <Hello username ={user1}/>
      <Hello username ={user2}/>
    </div>
  )
}

export default App;