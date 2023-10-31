/*
-useEffect is a hook
 useEffect is used in functional component in react to manage the side effect.
 [data fetching, Dom manipulation,subscriptions]

*/

import React, { useEffect, useState } from 'react';

function App() {
  const fetchposts = async ()=>{
  let response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
  let data = await response.json();
  setPosts(data);
  
 }

  //create a state to store the data fetched from the API.

  const[posts,setPosts]=useState(null);



  // Data has to be fetch.
  // the following will run only once.
 
useEffect(()=>{
fetchposts();
},[])
 
  return (
    <div>
      <h2>API Data</h2>
    {
      posts? (
        <ul>
        {
          posts.map(post=>
            <li key={post.id}>{post.title}</li>
          )
        }
        
       </ul>
      ):(
        <p>Fetching data...</p>
      )
    }
    
    </div>
  )
}

export default App;