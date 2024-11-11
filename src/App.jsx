import React, {useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'
import Props from './Props'
import Count from './Count'


function App() {

  return (
    <div>
    
      <Navbar parent='Users '
       name='Name' name1='Tony Stark'
       name2='Name' name3='James mary'
       name4='Name' name5='Vikram Rathod'/>
      <Props/>
      <Count/>

      
      
      
       
    </div>

   
  )
}



export default App
 