import React,{useState} from 'react';
import './App.css';
import Funcbox from "./Components/Functional-Component";
import Classbox from "./Components/Class-Components";

function App() {
  const [Func,setFunc]=useState();
  const [Class,setClass]=useState();

  return (
    <div id="App">
      <div className="head">Styling using Functionaland Class Component</div>
      <div id="Btn">
        <button id="btn1"onClick={()=>setFunc(!Func)}>To see styling in functional component</button>
        <button id="btn2"onClick={()=>setClass(!Class)}>To see styling in class component</button>
      </div>
      {Func && <Funcbox/>}
      {Class && <Classbox/>}
    </div>
  );
}

export default App;
