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

function App(props){

  return(
    <>
    <h1><center>1. Props passing as normal json object</center></h1>
    <h2>Student Roll number:{props.myobj.rno}</h2>
    <h2>Student name:{props.myobj.sname}</h2>
    <h2>Student mark average:{props.myobj.avg}</h2>
    <h2>Student valid id:{props.myobj.test}</h2>
    <h2>Student tamil mark:{props.myobj.tamil}</h2>
    <h2>Student english mark:{props.myobj.english}</h2>
    <h2>Student maths mark:{props.myobj.maths}</h2>
    </>
  )
}
export default App

/*function App(props){

  return(
    <>
    <h1><center>1. Props basic</center></h1>
    <h2>Student Roll number:{props.rno}</h2>
    <h2>Student name:{props.name}</h2>
    <h2>Student mark:{props.mark}</h2>
    </>
  )
}
export default App*/

/*import './mycss/style.css'
function App(){
  const mystyle={
    fontFamily: "Algerian Regular",
    fontSize: "44px",
    border:"4px double green",
    color:"red",
    backgroundColor: "pink"
  }

  return(
    <div>
    <h1>Welcome to React CSS Inline and Internal</h1>
    <h2 style={{backgroundColor:"red",color:"white",fontSize:"22px",fontFamily:"arial"}}>This is header 2</h2>
    <h3 style={mystyle}>This is header3</h3>
    <h3 style={mystyle}>This is header3</h3>
    <h3 style={mystyle}>This is header3</h3>
    <h5>Welcome to External CSS</h5>
    </div>
  )
}
export default App*/

/*import Failcomponents from "./components/Failcomponents";
import Successcomponents from "./components/Successcomponents";
import {name, place, age, data, photo} from "./components/Commonfilevar";

function Manoj()
{
  var test = true;
  return(
    <>
      <h1>Ternary operator and import and export options</h1>
      <h3>{test?<Successcomponents />:<Failcomponents/>}</h3>
      {name}
      {place}
      {age}
      {data}
      <img src={photo} alt="manoj in CSIR-SERC" height='200px' width='300px'></img>
    </>
  )
}
export default Manoj */

/*import myimg from './images/Manoj_2.jpg'
function Manoj()
{
  var a = 10;
  var b = 20;
  var c = a+b;
  var mark1 = 35,mark2 = 25;
  var avg=67;
  var result = "fail";
  var arr = [11,22,33,44,55,66];
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

   <h1>Array with JSON</h1>

    </>   
  )
}
export default Manoj*/

/*function Manoj()
{
  var sobj={
    rno: 1001,
    name:"manoj",
    subjects:[100,77,88]
  };
  var sobj1=[{
    sno: 1,
    sname: "ramesh",
    mark: 99
  },
  {
    sno: 2,
    sname:"Karthi",
    mark:98
  },
  {
    sno: 3,
    sname: "abinaya",
    mark: 94
  }]
return(
  <>
    <h1>React JSON with array</h1>
    <h2>Roll number:{sobj.rno}</h2>
    <h2>Student name: {sobj.name}</h2>
    <h2>Mark1:{sobj["subjects"][0]}</h2>
    <h2>Mark2:{sobj["subjects"][1]}</h2>
    <h2>Mark3:{sobj.subjects[2]}</h2>

    <h1>Array with JSON</h1>
    <h2>Student 1</h2>
    <h2>Roll no:{sobj1[0]["sno"]}</h2>
    <h2>Name:{sobj1[0].sname}</h2>
    <h2>Mark3:{sobj1[0].mark}</h2>

    <h2>Student 2</h2>
    <h2>Roll no:{sobj1[1]["sno"]}</h2>
    <h2>Name:{sobj1[1].sname}</h2>
    <h2>Mark3:{sobj1[1].mark}</h2>

    <h2>Student 3</h2>
    <h2>Roll no:{sobj1[2]["sno"]}</h2>
    <h2>Name:{sobj1[2].sname}</h2>
    <h2>Mark3:{sobj1[2].mark}</h2>

  </>
)
};
export default Manoj*/

/*function Manoj(){

  const dis= ()=> {
    alert("test arrow function")
    document.getElementById("res").innerHTML = "button clicked";
  }
   var dis1 = (a,b,c)=> {
    var tot = a+b+c;
    document.getElementById("res1").innerHTML = "Total = "+tot;
   }

   var a=10;
   let b=20;
   const c=30;
   if(true)
   {
    let d=10;
    const e=20;
    a++;b++;d++;
    //c++; e++; --->  throws error bcoz of constant value increment
   }
  return(
    <>
    <h1>Arrow function without parameter</h1>
    <button onClick={dis}>click me</button>
    <div id="res"></div>
    <h1>Arrow function with arguments</h1>
    <button onClick={()=>dis1(10,20,30)}>click me</button>
    <div id="res1"></div>
    <h1>var,let,const</h1>
    <h3>a: {a}</h3>
    <h3>b: {b}</h3>
    <h3>c: {c}</h3>
     // <h3>d: {d}</h3> --> shows error bcoz of local scope 
    // <h3>e: {e}</h3> --> shows error bcoz of local scope
    </>
  )
};
export default Manoj */

/*function Manoj(){

  var [a1,a2,a3,...a4] = [11,22,33,44,55,66];
  var [b1,b2,,b4] = [100,200,300,400];
  var disp = (a,b) => {
    var add = a+b;
    var sub = a-b;
    var mul = a*b;
    var div = a/b;
    //console.log(typeof(a4))
    return[add,sub,mul,div]
  }
  var [v1,v2,v3,v4] = disp(10,20);
  var sobj={
    rno:1,
    sname: "Manoj Kumar",
    mark: 99
  }
  var show=({rno,sname,mark})=>{
    return [rno,sname,mark]
  }
  var [ov1,ov2,ov3] = show(sobj);

  var stud={
    sno: 1991,
    sname: "kavi",
    marks:{
      tamil: 99,
      english: 98,
      maths: 100,
    }
  }

  var ndisp=({sno,sname,marks:{tamil,english,maths}})=>{
    return[sno,sname,tamil,english,maths];
  }

  var [r1,n1,m1,m2,m3] = ndisp(stud);
  return(
    <>
    <h1>Array destruction</h1>
    <h3>index 0:{a1}</h3>
    <h3>index 1:{a2}</h3>
    <h3>index 2:{a3}</h3>
    <h3>index 3:{a4}</h3>

    <h1>Function destruction</h1>
    <h3>value 1:{v1}</h3>
    <h3>value 2:{v2}</h3>
    <h3>value 3:{v3}</h3>
    <h3>value 4:{v4}</h3>

    <h1>Object destruction</h1>
    <h3>rno: {ov1}</h3>
    <h3>name: {ov2}</h3>
    <h3>mark:{ov3}</h3>

    <h1>Nested object destruction</h1>
    <h3>Rno: {r1}</h3>
    <h3>Student name: {n1}</h3>
    <h3>mark1: {m1}</h3>
    <h3>mark2: {m2}</h3>
    <h3>mark3: {m3}</h3>
    </>
  )
}
export default Manoj */

// function Manoj(){

//   var arr = [11,22,33,44,55,66,77,88,99];
//   var [a,b,...c] = arr;
//   console.log(typeof(c));
//   console.log(Array.isArray(c));
//   //var s = 0;
//   return(
//     <>
//       <h1>React Loop - Array methods map</h1>
//       <ol>
//         {arr.map((val,i)=><li key={i}>{val}</li>)}  
//         {/* Here i represents the index of the mapping element */}
//         {/* {arr.map((val,s)=><li key={s+1}>{val} {s+1}</li>)} */}
//       </ol>

//       <h1>Spread operator</h1>
//       <h3>index 0: {a}</h3>
//       <h3>index 1: {b}</h3>
//       <h3>index 2 onwards : {c}</h3>

//       <ol>
//         {c.map((val,i)=><li key={i}>{val}</li>)}
//       </ol>
//     </>
//   )
// }
// export default Manoj



/* Default REACT App components */
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
