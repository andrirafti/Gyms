import React from 'react'
import { Link } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
//install FA icons(font awesome)



const Footer = () => {
  return (
   
    <div className="footer">
      
      <a
          className="footer-link"
          href="https://www.linkedin.com/in/andri-rafti-770b49126/"
          target="blank"
        >
          {"  "}
          Andri Rafti   LinkedIn
          <i id="icon" className="fa fa-linkedin" aria-hidden="true"></i>
        </a>
      
      </div>
     
     
  )
}

export default Footer
