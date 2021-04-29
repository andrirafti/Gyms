import React from 'react';
import "./TrainerShow.css"
// import Tilt from 'react-vanilla-tilt'
import {useEffect} from 'react'
import Aos from "aos"
import "aos/dist/aos.css";
// This is what we want to show from the Trainer Model// (usually in the First Page AKA mapping page)
export default function TrainerShow(props) {
  const { name, personality, specialty,img } = props;
  return (
      <div data-aos="fade-right" className="centerme">
        <div className="container3">
          <div className="box3">
        <img className="product" src={img}/>
        <h3 className="name">{name}</h3>
        <p className="name">{personality}</p>
        <p className="name">{specialty}</p>
      </div>
      </div>
      </div>
  )
}
