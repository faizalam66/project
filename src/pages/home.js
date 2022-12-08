import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    
    <div className='page1'>
      <h1>Welcome to Home page</h1>
       <button style={{backgroundColor: 'green',fontSize:"20px",fontFamily:"italic" }}><Link style={{textDecoration:'none',color:'black'}} to="/c"> Click for Contact</Link></button>
        <br /><br/>
        <button style={{backgroundColor: 'green',fontSize:"20px",fontFamily:"italic"}}><Link style={{textDecoration:'none',color:'black'}} to="/s"> Click for Services</Link></button>
                
        
        </div>
        
    
    
  )
}
export default Home;