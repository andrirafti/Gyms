import React from 'react';
import "./GymShow.css"
// import Tilt from 'react-vanilla-tilt'
import {useEffect} from 'react'
import Aos from "aos"
import "aos/dist/aos.css";

// This is what we want to show for the GYM// 
export default function GymShow(props) {
  const { name, address, slogan,img } = props;
  //Aos style
  useEffect(()=>{
    Aos.init({duration:2000});
//can use fadeleft, fade right,etc..
  },[])



  return (
    <div data-aos="fade-right"className="centerme"> 
    <div className="container">
      {/* <Tilt className="box" options={{max:25,speed:400,glare:false}}> */}
      <div className="box">
        <h3  className="name">{name}</h3>
        <p className="name">{address}</p>
        <p className="name">{slogan}</p>
       
      <img className="product" src={img}/>
     
        
      </div>
      {/* </Tilt> */}
     
      
      </div>
      </div>
  )
}
