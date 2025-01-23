//React - class - Life cycle components

//Update
import { Component } from "react";
class App extends Component
{
  constructor(props)
  {
    super(props)
    console.log("Constructor called")
    this.state = this.props.myobj;
    this.state.curdt = new Date();
  }
  componentDidMount(){
    setTimeout(()=>{this.setState({rno:1001})},4000)
  }
  componentDidUpdate(){
    document.getElementById("r1").innerHTML = "Component updated"
  }
  shouldComponentUpdate(){
    return true; 
    //return false will restrict the component updation
  }
  getSnapshotBeforeUpdate(prevState,prevProps)
  {
    document.getElementById("r2").innerHTML = "Old value: "+ prevProps.rno+" "+"Time: "+prevProps.curdt;
    document.getElementById("r3").innerHTML = "New value: "+ this.state.rno+" "+"Time: "+ Date();

    return this.state
    //return null;
  }
  render()
  {
    const updatefun = ()=>{
      var newrno = parseInt(document.getElementById("t1").value);
      this.setState({rno:newrno})
    }
    const reloadfun = ()=>{
      window.location.reload()
    }
    return(
      <>
      <h1>Update lifecycle components</h1>
      <h2>Rollno:{this.state.rno}</h2>
      <div id="r1"></div>
      <div id="r2"></div>
      <div id="r3"></div>
      <input type="text" id="t1" placeholder="Enter new rno"></input>
      <button onClick={updatefun}>Update rollno</button>
      <button onClick={reloadfun}>Refresh</button>
      </>
    )
  }
}
export default App

//Mount
/*import React from "react";
class App extends React.Component
{
  constructor(props)
  {
    super(props)
    //this.state = props.myobj;
    this.state={
      rno: this.props.myobj.rno,
      sname: this.props.myobj.sname
    }
    console.log("constructor called")
  }
  componentDidMount()
  {
    setTimeout(()=>{this.setState({rno:1001})},4000);
    //this.setState({rno:1001})
  }
  render()
  {
    return(
      <>
      <h1>This is lifecycle of react - only class component</h1>
      <h2>Roll number: {this.state.rno}</h2>
      <h2>Student name: {this.state.sname}</h2>
      </>
    )
  }
}
export default App*/

//React Hooks

//React Hooks - passing object using props
/*import{useState} from "react"
function App(props)
{
  const[obj,setObj] = useState(props.myobj);
  const show = ()=>{
    setObj({rno:1009, sname:"Kathik"})
  }
  return(
    <>
      <h1>React Hooks - passing object using props</h1>
      <h2>{obj.rno}</h2>
      <h2>{obj.sname}</h2>
      <button onClick={show}>Change</button>
    </>   
  )
}
export default App*/

//React Hooks - using props
/*import {useState} from "react"
function App(props)
{
  const[rno,setRno] = useState(props.myobj.rno);
  return(
    <>
      <h1>React Hooks - using props</h1>
      <h2>{rno}</h2>
      {props.myobj.sname}
    </>
  )

}
export default App*/

//React Hooks - useForm with Error handling
/*import { useForm } from "react-hook-form";
function App()
{
  const {register,handleSubmit,formState:{errors}} = useForm()
  const dis = (sobj) =>{
    console.log(sobj)
    console.log(sobj.unam)
    console.log(sobj.pwd)
    console.log(sobj.city)
  }
  return(
    <form onSubmit={handleSubmit(dis)}>
    <h1>React Hook - useForm with Error handling</h1>
    username: <input type="text" {...register("unam",{required:true,minLength:3})}></input>
    {errors.unam && errors.unam.type === "required" && "Must Fill username"}
    {errors.unam && errors.unam.type === "minLength" && "Type 3 chars"}
    <br></br>
    password: <input type="password" {...register("pwd",{required:true,minLength:5})}></input>
    {errors.pwd && errors.pwd.type === "required" && <font color="red">"Must fill password"</font>}
    {errors.pwd && errors.pwd.type === "minLength" && <font color="red">"type atleast 5 chars"</font>}
    <br></br>
    city: <input type="text" {...register("city",{maxLength:10})}></input>
    {errors.city && errors.city.type === "maxLength" && "Donot exceed 10 chars"}
    <br></br>
    <input type="submit"></input><br></br>
    </form>
  )
}
export default App*/

//React Hooks - useForm
/*import { useForm } from "react-hook-form";
function App()
{
  const {register,handleSubmit} = useForm()
  const dis = (sobj) =>{
    console.log(sobj)
    console.log(sobj.unam)
    console.log(sobj.pwd)
    console.log(sobj.city)
  }
  return(
    <form onSubmit={handleSubmit(dis)}>
    <h1>React Hook - useForm</h1>
    username: <input type="text" {...register("unam")}></input><br></br>
    password: <input type="password" {...register("pwd")}></input><br></br>
    city: <input type="text" {...register("city")}></input><br></br>
    <input type="submit"></input><br></br>
    </form>
  )
}
export default App */

//React Hooks- useEffect()

/*import { useState } from "react"

function App(){
  const [un,setUn] = useState("-")
  const [pw,setPw] = useState("*")
  const [city,setCity] = useState("*")
  const dis = (event)=>{
    if(event.target.id === "un")
      setUn(event.target.value)
    if(event.target.id === "pw")
      setPw(event.target.value)
    if(event.target.id === "city")
      setCity(event.target.value)
  }
  const show = (event) =>{
    var sobj={
      uname: un,
      pword: pw,
      city: city
    }
    console.log(sobj)
  }
  return(
    <>
    <h1>React Hooks - useState</h1>
    username:<input type="text" id="un" value={un} onChange={(e)=>dis(e)}></input><br></br>
    password:<input type="password" id="pw" value={pw} onChange={(e)=>dis(e)}></input><br></br>
    city:<input type="text" id="city" value={city} onChange={(e)=>dis(e)}></input><br></br>
    <button onClick={show}>json</button>
    </>
  )
}
export default App*/

/*import {useState, useEffect} from "react"
function App(){

  const [count,setCount] = useState(0)
  useEffect(()=>{
    setTimeout(()=>{document.title = "gowthaman"+count},5000)
  })

  const dis = ()=>{
    document.title = "manoj"
    setCount(count+1)
  }
  return(
    <>
    <h1>React Hooks - useEffect()</h1>
    <button onClick={dis}>click me</button>
    <h2>count: {count}</h2>
    </>
  )
}
export default App*/

//React Hooks - useState()
/*import { useState } from "react";
function App(){
  const[name,setName] = useState("----")
  const[count,setCount] = useState(0)
 
  const dis = (e)=>{
    var k = e.target.value
    setName(e.target.value)
    setCount(count+1)
    document.getElementById("res").innerHTML = "k = "+k; 
  }
  return(
    <>
    <h2>React Hooks - useState()</h2>
    <input type="text" value={name} onChange={(event)=>dis(event)}></input><br></br>
    <div id="res"></div>
    name = {name} <br></br> 
    count = {count}
    </>
  )
}
export default App*/

//React - Event.target.type

/*const App = () => {
  const dis = (e)=>{
    document.getElementById("res").innerHTML = e.target.type + "working...";
  }
  return (
    <>
      <h1><u>Event.target.type usage</u></h1>
      <input type="text" onChange={(e)=>dis(e)}></input><br></br>
      <input type="password" onChange={(e)=>dis(e)}></input><br></br>
      <input type="file" onChange={(e)=>dis(e)}></input><br></br>
      <input type="radio" onChange={(e)=>dis(e)}></input>Male<br></br>
      <input type="radio" onChange={(e)=>dis(e)}></input>Female<br></br>
      <input type="radio" onChange={(e)=>dis(e)}></input>Others<br></br>
      <input type="checkbox" onChange={(e)=>dis(e)}></input>C++<br></br>
      <div id="res"></div>
    </>
  )
}

export default App*/

//React - Event.target.tagname

/*const App = () => {
  const dis = (e)=>{
    document.getElementById("res").innerHTML = e.target.tagName + "working...";
  }
  return (
    <>
    <h1><u>Event.target.tagname usage</u></h1>
      <input type="text" onChange={(e)=>dis(e)}></input><br></br>
      <textarea rows="6" cols="20" onChange={(e)=>dis(e)}></textarea><br></br>
      <select onChange={(e)=>dis(e)}>
      <option>Sunday</option>
      <option>Monday</option>
      <option>Tuesday</option>
      <option>Wednesday</option>
      <option>Thursday</option>
      <option>Friday</option>
      <option>Saturday</option>
      </select>
      <div id="res"></div>
    </>
  )
}

export default App*/

//React - Event.target.name

/*const App = () => {
  const dis =(e) =>{
    var k = e.target.value
    document.getElementById("res").innerHTML = k+" is typing in..."+e.target.name+" box";
  } 
  return (
    <div>
      <h1><u>Event.target.name usage</u></h1>
      Username: <input type="text" id="username" name="user" onChange={(event)=>dis(event)}></input><br></br>
      Password: <input type="password" id="password" name="pwd" onChange={(event)=>dis(event)}></input><br></br>
      City: <input type="text" id="city" name="city" onChange={(event)=>dis(event)}></input><br></br>
      <div id="res"></div>
    </div>
  )
  
}

export default App */

//React - Event.target.id

/*const App = () => {
  const dis =(e) =>{
    var k = e.target.value
    document.getElementById("res").innerHTML = k+" is typing in..."+e.target.id+" box";
  } 
  return (
    <div>
      <h1><u>Event.target.id usage</u></h1>
      Username: <input type="text" id="username" onChange={(event)=>dis(event)}></input><br></br>
      Password: <input type="password" id="password" onChange={(event)=>dis(event)}></input><br></br>
      City: <input type="text" id="city" onChange={(event)=>dis(event)}></input><br></br>
      <div id="res"></div>
    </div>
  )
}

export default App*/

//React - Event.target.value

/*const App = () => {
  const dis =(e) =>{
    var k = e.target.value
    document.getElementById("res").innerHTML = k;
  } 
  return (
    <div>
      <h1><u>Event.target.value usage</u></h1>
      <input type="text" onChange={(event)=>dis(event)}></input><br></br>
      <input type="text" onChange={(event)=>dis(event)}></input><br></br>
      <input type="text" onChange={(event)=>dis(event)}></input><br></br>
      <div id="res"></div>
    </div>
  )
}

export default App*/

//Event handling

//React Event - onSubmit
/*function App(){
  const disp = (event)=>{
    event.preventDefault()  //will not allow to refresh
    document.getElementById("res").innerHTML = "Submit button pressed";
  }
  return(
    <center>
      <h1>React - onSubmit event</h1>
      <form onSubmit={(e) => disp(e)}>
        <input type="text"></input>
        <input type="submit"></input>
        <button>clickme</button>
        <input type="button" value="clickmenormal"></input>
        <div id="res"></div>
      </form>
    </center>
  )
}
export default App*/

//React Event - onFocus, onBlur
/*function App()
{
  const dis1 = ()=>{
    document.getElementById('res').innerHTML = "Cursor inside textbox"
    document.getElementById("t1").style.backgroundColor = "green";
    document.getElementById("t1").style.color = "white";
  }

  const dis2 = ()=>{
    document.getElementById('res').innerHTML = "Cursor outside textbox"
    document.getElementById("t1").style.backgroundColor = "red";
    document.getElementById("t1").style.color = "white";
  }
  return(
    <>
    <center><h2>React Event - onFocus, onBlur</h2></center>
    <input type="text" onFocus={dis1} onBlur={dis2} id="t1"></input>
    <div id="res"></div>
    </>
  )
}
export default App*/

//React Event - onChange
/*function App()
{
  var data;
  const show = () =>{
    data = document.getElementById("t1").value;
    document.getElementById("res").innerHTML = data;
  } 
  return (
    <>
    <center><h1>React event - onChange</h1></center>
    <input type="text" onChange={show} id="t1" placeholder="Enter data"></input>
    <div id="res"></div>
    </>
  )
}
export default App*/

//React Event - onClick
/*function App(){
  var m1 = 100;
  var m2 = 200;
  const disp = () =>{
    var a = parseInt(document.getElementById("t1").value)
    var b = parseInt(document.getElementById("t2").value)
    document.getElementById("res1").innerHTML = "Sum = "+(a+b);
    document.getElementById("res2").innerHTML = "m1+m2 = "+(m1+m2);
  }
  return(
    <form>
      <h2>React Event - onClick</h2>
      Enter num1: <input type="text" id="t1" placeholder="Enter number 1"></input>
      <br></br>
      Enter num2: <input type="text" id="t2" placeholder="Enter number 2"></input>
      <br></br>
      <input type="button" onClick={disp} value='Sum'></input>
      <div id="res1"></div>
      <div id="res2"></div>
      {m1+m2}
    </form>
  )
}
export default App*/

//React Forms
/*import React from 'react'

const App = () => {
  return (
   <form>
    <h2>React Forms</h2>
    Name:<input type='text' value='manoj kumar'></input><br></br>
    Mobile no:<input type='number'></input><br></br>
    <label>Enter password: <input type='password'></input></label><br></br>
    <p>Select gender :</p>
    <input type='radio' name='gen'></input>Male
    <input type='radio' name='gen'></input>Female
    <input type='radio' name='gen'></input>Others
    <p>Select programming language: </p>
    <input type='checkbox'></input>C
    <input type='checkbox'></input>C++
    <input type='checkbox'></input>Java
    <br></br>
    <textarea rows="4" cols="20"></textarea>
    <br></br>
    <p>Select month</p>
    <select>
      <option>January</option>
      <option>February</option>
      <option>March</option>
      <option>April</option>
      <option>May</option>
      <option>June</option>
    </select>
    <br></br>
    Email:<input type='email'></input><br></br>
    Date:<input type='date'></input><br></br>
    Time:<input type='time'></input><br></br>
    Week:<input type='week'></input><br></br>
    File:<input type='file'></input><br></br>
    Range:<input type='range' min='0' max='1'></input><br></br>
    <input type='button' value='clickme'></input>
    <input type='submit' value='submit'></input>
    <button>CLICKME</button>
    <input type='hidden' value='100' name='h1'></input>
    <br></br>
    <input type='reset' value="clear"></input>
    <br></br>
   </form>
  )
}

export default App */


//Passing argument using class constructor
/*import React from 'react'
class App extends React.Component
{
  constructor(props)
  {
    super(props)
    this.state = props;
  }
  render()
  {
    return(
      <>
        <h1><center>Passing argument using class constructor</center></h1>
        <h2>Student Roll number:{this.state.myobj.rno}</h2>
        <h2>Student name:{this.state.myobj.sname}</h2>
        <h2>Student mark average:{this.state.myobj.marks.avg}</h2>
        <h2>Student tamil mark:{this.state.myobj.marks.tamil}</h2>
        <h2>Student english mark:{this.state.myobj.marks["english"]}</h2>
        <h2>Student maths mark:{this.state.myobj["marks"]["maths"]}</h2>
      </>
    )
  }
}

export default App*/

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

//Passing Nested JSON object
/*function App(props){
    return(
      <>
      <h1><center>1. Props passing as nested JSON object</center></h1>
      <h2>Student Roll number:{props.myobj.rno}</h2>
      <h2>Student name:{props.myobj.sname}</h2>
      <h2>Student mark average:{props.myobj.marks.avg}</h2>
      <h2>Student tamil mark:{props.myobj.marks.tamil}</h2>
      <h2>Student english mark:{props.myobj.marks["english"]}</h2>
      <h2>Student maths mark:{props.myobj["marks"]["maths"]}</h2>

      </>
    )

}
export default App*/

//Passing normal JSON object
/*function App(props){

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
export default App*/

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
