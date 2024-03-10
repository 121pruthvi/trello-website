import react, { useState } from 'react';


const App =() => {

  let time = new Date().toLocaleTimeString();
 
  const [Ctime, setCtime ] = useState(time);

const UpdateTime = () => {
  time = new Date().toLocaleTimeString();
  setCtime(time);
}

setInterval (UpdateTime,1000);

  return (

    <>
    <h1> {Ctime} time</h1>



    </>


  );
}

export default App