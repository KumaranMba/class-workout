// const App =()=>{
//   return(
//     <p>Hello world!</p>
//   )
// }

// export default App;



// create another same method
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

function Hello(){
  return(
    <p>Hello world</p>
  )
}


function App(){
  return(
    <div>
      <h3>Greetings</h3>
      <Hello/>
      <Hello/>
      <Hello/>
      <Hello/>
      </div>
  )
}

export default App;