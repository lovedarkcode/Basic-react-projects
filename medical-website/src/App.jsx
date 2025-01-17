import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Services from './Components/Services'
import Doctor from './Components/Doctor'
import Blogs from './Components/Blogs'
import Footer from './Components/Footer'

function App() {
  

  return (
    <>
    <Navbar></Navbar>
    <main>
    <div id='home'><Home></Home></div>
      <div id='about'><About></About></div>
      <div id='services'><Services></Services></div>
      <div id='doctor'><Doctor></Doctor></div>
      <div id='blogs'><Blogs></Blogs></div>
    </main>
    <Footer></Footer>
      
    </>
  )
}

export default App
