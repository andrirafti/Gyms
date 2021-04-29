import React, { useState, useEffect } from 'react';
import {Link,useParams,useHistory} from 'react-router-dom';
import Tilt from 'react-vanilla-tilt'

import Loading from './Loading'
import Aos from "aos"
import "aos/dist/aos.css";


const GymDetail = (props) => {
  const [gym, setGym] = useState([])
  const history=useHistory()
  const { allGyms } = props
  const { trainer_id, gym_id, id } = useParams();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(()=>{
    Aos.init({duration:2000});
//can use fadeleft, fade right,etc..
  },[])




  useEffect(() => {
     if (allGyms.length) {
      //id can be used since its our useParams aka useProps
      const oneGym = allGyms.find((gym) => gym.id === Number(id));
       setGym(oneGym)
       setIsLoaded(true)
    }
    //runs everyone allgyms or id changes
  }, [allGyms, id])
  if (!isLoaded) {
    return <Loading/>
  }
 
  return (
    <div data-aos="fade-down" className="gym-details">
       {
          /* check the single dog in state for data */
        <div className="card">
          <Tilt >
          <img src={gym.img}/>
            <h1><label> Name: {gym.name}</label></h1>
            <h2><label> Gyms Motto: {gym.slogan}</label></h2>
            <p><label> Location: {gym.address}</label></p>
            <Link to={`/gyms/${gym.id}/trainers`}><button>View Trainers!</button></Link>
       </Tilt>
          </div>
        }
    </div>
  )
}

export default GymDetail
