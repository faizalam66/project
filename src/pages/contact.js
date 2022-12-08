import React from 'react'
import img from  './hello.jpg'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <>
    <div className='page2'></div>
    <h1>Welcome to Contact page</h1>

        <img className='Img' src ={img} alt="welcome"/>
        
        <br/>
        <button style={{backgroundColor: 'green',fontSize:"20px",fontFamily:"italic"}}><Link style={{textDecoration:'none',color:'white'}} to="/">Click me to Home</Link></button>
        <br/><br/>
        <button style={{backgroundColor: 'green',fontSize:"20px",fontFamily:"italic"}}><Link style={{textDecoration:'none',color:'white'}} to="/s">Click me to Services</Link></button>
        </>
  )
}
export default Contact;
