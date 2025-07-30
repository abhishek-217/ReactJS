// var React = require('react');
// var ReactDOM = require('react-dom');



// Basic of react 


import React from 'react';
import ReactDOM from 'react-dom';

// ReactDOM.render( <> <h1>Hello React World </h1>
//     <p>This is paragraph for react website</p>
//     <h2>Hello again!!</h2>
//     </>
//     ,document.getElementById('root') );



// JSX Challenge 1.

// ReactDOM.render(<> <h1>Welcome to Netflix </h1>
//         <p>List of Top 5 Best Series:</p>
//         <ol>
//         <li>DARK</li>
//         <li>Extra Curricular</li>
//         <li>My Holo Love</li>
//         <li>Maharaja</li>
//         <li>Mr Robot</li>
//         </ol>
//         </>
//         , document.getElementById('root'));




// Expression in JSX({})


// const name = "Abhishek Kumar";

// ReactDOM.render(<>
//     {/* <h1>My name is {name}</h1> */}
//     <h1>{`my name is ${name} !Hello`}</h1> 
//     <p>My lucky number is {Math.random()}</p>
//     </>,
//     document.getElementById('root')
//     );




// JSX Challenge 2

// const currDate = new Date().toLocaleDateString();
// const currTime = new Date().toLocaleTimeString();

// const name = "Abhishek ";

// ReactDOM.render(<>
//     <h1>{`My name is ${name} !Hello`}</h1> 
//     <p> Current Date is : {currDate} </p>
//     <p> Current Time is : {currTime} </p>
//     </>,
//     document.getElementById('root')
//     );





// Attribute of JSX

// const name = "Abhishek "
// const img1 = "https://picsum.photos/200/300";
// const img2 = "https://picsum.photos/250/300";
// const img3 = "https://picsum.photos/300/300";
// const img4 = "https://picsum.photos/400/300";
// ReactDOM.render(<>
// <h1 contentEditable = 'true'> My name is {name}</h1>
// <img src= {img1} alt='Text after error'/>
// <img src= {img2} alt='Text after error'/>
// <a href='https://www.flipkart.com/' target='_zoom'>
//     <img src= {img3} alt='Text after error'/>
// </a>
// <img src= {img4} alt='Text after error'/>

// </>, document.getElementById('root'));




// CSS in JSX




// const name = "Abhishek";
// const img1 = "https://picsum.photos/200/300";
// const img2 = "https://picsum.photos/250/300";
// const img3 = "https://picsum.photos/300/300";
// const img4 = "https://picsum.photos/400/300";

// ReactDom.render(<>
//     <h1 className="heading"> My name is {name}</h1>
//     <div className="divs">
//         <img src={img1} alt='Text after error' />
//         <img src={img2} alt='Text after error' />
//         <a href='https://www.flipkart.com/' target='_zoom'>
//             <img src={img3} alt='Text after error' />
//         </a>
//         <img src={img4} alt='Text after error' />
//     </div>
// </>, document.getElementById('root'));





// Inline CSS

// const name = "Abhishek";
// const img1 = "https://picsum.photos/200/300";
// const img2 = "https://picsum.photos/250/300";
// const img3 = "https://picsum.photos/300/300";
// const img4 = "https://picsum.photos/400/300";


// const heading = {
//     color: "blueviolet",
//     textAlign: "center",
//     textTransform: "capitalize",
//     fontWeight: "bold",
//     textShadow: "8vh",
//     margin: "50px 0",
//     fontFamily: '"Protest Guerrilla", sans-serif',
//     fontWeight: 400,
//     fontStyle: "normal",
// }

// ReactDom.render(<>
//     <h1 style = {heading}> My name is {name}</h1>
//     <div className="divs">
//         <img src={img1} alt='Text after error' />
//         <img src={img2} alt='Text after error' />
//         <a href='https://www.flipkart.com/' target='_zoom'>
//             <img src={img3} alt='Text after error' />
//         </a>
//         <img src={img4} alt='Text after error' />
//     </div>
// </>, document.getElementById('root'));










//Dynamically Greetings like in Gemini




import React from "react";
import ReactDom from "react-dom";
import './index.css';


// const heading = {
//     textAlign: "center",
//     color: "black",
//     margin: "200px 0",
//     backgroundColor: "#7fffd4"

// }


let greet = "";

let currDate = new Date(2024, 9, 9, 14);
currDate = currDate.getHours();

// Style for greet

let stylegreet = {}

if (currDate >= 1 && currDate <= 11) {
    greet = "Good Morning!"
    stylegreet.color = "#008000"
}
else if (currDate >= 12 && currDate <= 16) {
    greet = "Good Afternoon!"
    stylegreet.color = "#ffa07a"
}
else if (currDate >= 17 && currDate < 20) {
    greet = "Good Evening!"
    stylegreet.color = "#ff4500"
}
else {
    greet = "Good Night!"
    stylegreet.color = "#000000"
}


ReactDom.render(<>
    <div>
        <h1  >Hello Sir, <span style={stylegreet}>{greet}</span></h1>
    </div>
</>, document.getElementById('root'))











//First small project NUMBER Increment



// const App = ()=>{
//   const state = useState();
//   const [count, setCount] = useState(0);

//   const IncNum = () =>{
//     setCount(count + 1);
//     // count++; 
//     // console.log("Boom guys" + count++);
//   };
//   return(<>
//     <h1>{count}</h1>

//     <button onClick={IncNum}>Click Me</button>

//   </>);
// }

// export default App;
