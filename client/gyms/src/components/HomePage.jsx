import React from 'react'
import Aos from "aos"
import "aos/dist/aos.css";
import {useEffect} from 'react'
import Tilt from 'react-vanilla-tilt'
import './HomePage.css'


const HomePage = () => {
  useEffect(()=>{
    Aos.init({duration:2000});
//can use fadeleft
  },[])
  
  return (
    <div className="HomePage">
      <Tilt className="Tilt" options={{max:25,speed:400,glare:false}}>
      <h1>Welcome to NYCS top gym's list!</h1> 
      <p>Please click  "All Gyms" to continue!</p>
      </Tilt>
    </div>
  )
}

export default HomePage
