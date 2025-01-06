import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  

  return (
    <>
    <div className="flex gap-8 ml-40">
    <Card username="Coffee and React" btnText='Click me' />
     <Card username="Aditya" btnText="Visit me" />
    </div>
     
    </>
  )
}

export default App
