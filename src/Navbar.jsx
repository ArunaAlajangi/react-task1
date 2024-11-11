import React from 'react'

const Navbar = (p) => {
  return (
    <div>
        <h4 >{p.parent}</h4>
        <h3>{p.name}  :  {p.name1}</h3>
        <h3>{p.name2}   :  {p.name3}</h3>
        <h3>{p.name4}  :  {p.name5}</h3>
    
    </div>
    
      
    
  )
}


export default Navbar
