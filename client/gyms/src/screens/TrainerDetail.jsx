import React, { useState, useEffect } from 'react';
import {Link,useParams,useHistory} from 'react-router-dom';
import {getOneTrainer} from '../services/trainers'
import Loading from './Loading'
import Tilt from 'react-vanilla-tilt'
import Aos from "aos"
import "aos/dist/aos.css";
//my props is allTrainers and i deconstructered it doing this..
const TrainerDetail = () => {
  const [trainer, setTrainer] = useState([])
  const [isLoaded, setIsLoaded] = useState(false);
  const history=useHistory();
  //instead of params=useParams i just did {id} so we can just say id instead of id.params
  const params = useParams();
  useEffect(()=>{
    Aos.init({duration:2000});
//can use fadeleft, fade right,etc..
  },[])
  


  useEffect(()=>{
    const fetchTrainer=async()=>{
      const trainer=await getOneTrainer(params.id);
      setTrainer(trainer);
      setIsLoaded(true);
    };
    fetchTrainer();
  },[params.id])
  
  if (!isLoaded) {
    return <Loading/>
  }

  console.log(params)
  console.log("testing")
  console.log(trainer.gym_id)
  
  return (
    <div data-aos="fade-down" className="gym-details">
             {
         <div className="card">
          <Tilt  options={{max:25,speed:400,glare:false,easing:"cubic-bezier(.03,.98,.52,.99)"}}>
          <img src={trainer.img}/>
            <h1><label className="product"> Name: {trainer.name}</label></h1>
          <h2><label> Specialty: {trainer.specialty}</label></h2>
          <p><label> Personality: {trainer.personality}</label></p>
            <Link className="button" to={`/gyms/${trainer.gym_id}/trainers/${trainer.id}/clients`}><button>Become a Client!</button></Link>         
        </Tilt>
       </div>
        }
    </div>
  )
}

export default TrainerDetail
