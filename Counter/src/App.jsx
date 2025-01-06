import React, { useState } from 'react'
import './App.css'

function App() {
  const [counter,setCounter] = useState(5)

  let addvalue = ()=>{
    setCounter(counter + 1)
  }
  let removevalue = ()=>{
    if(counter<=0){
      alert("Counter value can not be less than 0")
    }else{
      setCounter(counter - 1)
    }
  }
  return (
    <>
      <h1 className="text-3xl font-bold">Counter Project</h1>
      <h1 className="text-2xl">Counter value:{counter}</h1>
      <button className="text-2xl bg-green-600 mt-4 p-2" onClick={addvalue}>Add value</button>
      <br />
      <button className="text-2xl bg-red-600 mt-4 p-2" onClick={removevalue}>Remove value</button>
    </>
  )
}

export default App
