/*import React from 'react';
class App extends React.Component
{
  render()
  {
    return(
      <h1>Welcome to React - class component</h1>
    )
  }
}
export default App*/

import myimg from './images/Manoj_2.jpg'
function Manoj()
{
  var a = 10;
  var b = 20;
  var c = a+b;
  var mark1 = 35,mark2 = 25;
  var avg=67;
  var result = "fail";
  var arr = [18,25,36,42,59,65];
  var sobj = {
    rollno : 1001,
    name : "Manoj",
    tamil : 99,
    English : 98,
    maths : 100
  };

  var subj = {
    rollno : 1001,
    name : "Manoj",
    subjects:{
    tamil : 99,
    English : 98,
    maths : 100
    }
  };
  return(
    <>
    <h1>Welcome to React - function component test</h1>
    <h2>A value : {a}</h2>
    <h2>B value : {b}</h2>
    <h2>Total : {c}</h2>
    <img src={myimg} alt='manoj in CSIR-SERC' height='200px'width='200px'></img>
    <h2>Control statement - Simple If</h2>
    <h1>{mark1>34 && "Result: Pass"}</h1>
    <h2>Control statement - If-else</h2>
    <h1>{(mark2>34 && "Result: Pass") || "Result: Fail" }</h1>
    <h2>Control statement - If else-if</h2>
    <h1>{(avg>=85 && "Result: Outstanding") || (avg>=75 && "Result: Excellent")||(avg>=65 && "Result: Good")||"Result: Fair" }</h1>

    <h2>Control statement - nested if</h2>
    <h1>{
    
        (result === 'pass' && 
          ((avg>=85 && "Result: Outstanding") || (avg>=75 && "Result: Excellent")||(avg>=65 && "Result: Good")||"Result: Fair")
        )
    
      ||
      "No grade because fail"
      }
    </h1>
    <h1>Array demo basics</h1>
    <h2>Value 1: {arr[0]}</h2>
    <h2>Value 2: {arr[1]}</h2>
    <h2>Value 3: {arr[2]}</h2>
    <h2>Value 4: {arr[3]}</h2>
    <h2>Value 5: {arr[4]}</h2>
    <h2>Value 6: {arr[5]}</h2>
    <h2>Value 7: {arr[6]}</h2>

   <h1>React JSON basics</h1> 
   <h2>Student roll no: {sobj.rollno}</h2> 
   <h2>Student name: {sobj.name}</h2> 
   <h2>Student tamil mark: {sobj.tamil}</h2> 
   <h2>Student english mark: {sobj.english}</h2> 
   <h2>Student maths mark: {sobj.maths}</h2> 

   <h1>Nested JSON basics</h1>
   <h2>Student roll no: {subj.rollno}</h2> 
   <h2>Student name: {subj.name}</h2> 
   <h2>Student tamil mark: {subj.subjects.tamil}</h2> 
   <h2>Student english mark: {subj["subjects"]["English"]}</h2> 
   <h2>Student maths mark: {subj.subjects["maths"]}</h2> 
    </>   
  )
}
export default Manoj
/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/
