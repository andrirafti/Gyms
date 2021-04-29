import React from 'react';
import Aos from "aos"
import "aos/dist/aos.css";
import {useEffect} from 'react'
import "./ClientShow.css"


export default function ClientShow(props) {
  const {name,goal} = props;


  useEffect(()=>{
    Aos.init({duration:2000});
//can use fadeleft, fade right,etc..
  },[])
  return (
      <div data-aos="fade-right" className="centerme">
        <div className="container2">
        <div className="box2">
        <p className="product">{name}</p>
        <p >{goal}</p>
      </div>
      </div>
      </div>
  )
}
