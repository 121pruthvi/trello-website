import React,{useState} from 'react'


const  App = () => {
  let newTime = new Date().toLocaleTimeString();

  const [ count, setCount] = useState(newTime);


  const updatetime = () => {
    let newTime1 = new Date().toLocaleTimeString();
    setCount (newTime1 ); 

  };

  return (
     
    <>
         <h1> {count} time </h1>
         <button onClick={updatetime} >get time</button>

    </>

   
  );
  }
export default App