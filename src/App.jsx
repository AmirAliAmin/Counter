import React, { useState } from 'react'

import './App.css'
import Card from './components/card';

function App() {
  let [counter, setCounter] = useState(15);

  const setValue = ()=>{
    if (counter >= 20) {
      setCounter(20)
    }
    else{
      counter = counter+1;
      setCounter(counter);
      // console.log("clicked" , counter);
    }
  }
  const removeValue = ()=>{
    if (counter<=0) {
      setCounter(0)
    }
    else{
      setCounter(counter - 1);
  
    }
  }
  

  return (
    <>
       <Card userName= "Amir Ali Amin"/>
       <Card userName = "Minhal Fatima"/>
      <h1>Amir Ali Amin</h1>
      <h2>Counter is :{counter} </h2>
      <br />
      <button style={{backgroundColor:"black", color:"white", marginRight:"20px"}} onClick={setValue} >Add Value</button>
      <button style={{backgroundColor:"black", color:"white"}} onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
