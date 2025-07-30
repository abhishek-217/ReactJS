import React, { useState } from 'react';



// import Heading from "./Heading";
// import OrderLi from "./OrderLi";

// function App(){
//   return <>
//     <Heading/>
//     <OrderLi/>
//     <Heading/>
//     <OrderLi/>
//   </>
// }



// First project using hooks(Challenge to print time)


// import React, {useState} from "react";


let TimeS = new Date().toLocaleTimeString();
const App = ()=>{

  
  const state = useState();
  const [Time, setTime] = useState(TimeS);
  
  const Timeset = () =>{
    let UpdateTime = new Date().toLocaleTimeString();
    setTime(UpdateTime);
    
  };
  // setInterval(Timeset , 1000); // for Clock Timer 
  return(<>
    <h1>{Time}</h1>

    <button onClick={Timeset}>GET TIME</button>

  </>);
}







// Events in Reacts

// const state = useState();

// const App= () => {

//   const bgChange=()=>{
    
//   }
//   return <>
//     <button onClick={bgChange}>Click Me!</button>
//   </>
// }

export default App;
