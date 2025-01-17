import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


//Nested JSON object
var sobj = {
  rno: 1991,
  sname: "manoj kumar",
  test: "true",
  marks:{
    avg: 88.5,
    tamil: 99,
    english: 88,
    maths: 48
  }  
}
// Normal JSON object 
/*var sobj = {
  rno: 1991,
  sname: "manoj kumar",
  test: "true",
  avg: 88.5,
  tamil: 99,
  english: 88,
  maths: 48
}*/
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App name="manojkumar" rno="1001" mark="99"/> */}
    <App myobj={sobj}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
