import React from 'react'
import img from  './hello.jpg'
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <>
    <div></div>
    <h1>Welcome to Services page</h1>
    <img className='Img' src ={img} alt="welcome"/>
    <br/>
    <button style={{backgroundColor: 'green',fontSize:"20px",fontFamily:"italic"}}><Link style={{textDecoration:'none',color:'white'}} to="/"> Click for Home</Link></button>
    </>
  )
}
export default Services;
