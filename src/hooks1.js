import React, { useState } from 'react'

function App() {

  const state = useState();


  const [count,  setCount] = useState(0);



  const IncNum = () => {
    setCount(count - 10);
    //console.log ("clicked" + count++);
  };




  return (


    <>
        <h1>{count} hello</h1>
        <button onClick={IncNum} >clickNumber</button>

     </>   
  )
}

export default App