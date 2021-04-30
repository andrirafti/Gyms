import React from 'react';
import { Link,useParams } from 'react-router-dom';
import {useState,useEffect} from 'react'
import TrainerShow from '../components/TrainerShow'
import { getAllTrainers } from '../services/trainers'
import Loading from './Loading'
//Step 1 take WHAT you want to show from component area.. aka TrainerShow which has name,persoanlity,etc etc..//
//Step 2: Grab your services folder for what you want to do(show all trainers!)
// so get the getallTrainers..
//Step 3 use Params since we will be using props as seen below..

export default function Trainer() {
   const [queryTrainer,setQueryTrainer]=useState([]);
 const [isLoaded, setIsLoaded] = useState(false);
 const {id}=useParams();
 
 useEffect(()=>{
       const fetchTrainers=async()=>{
         const trainers= await getAllTrainers(id);
         setQueryTrainer(trainers);
         setIsLoaded(true);
       };
       fetchTrainers();
    },[])
    if (!isLoaded) {
      return <Loading/>
    }
  
    //Look at link.. we use params.id to target the gym id using useparams //
  return (
    <>
    <div>
      <h1>Trainers</h1>
      <Link to={`/gyms/${id}/trainers/${queryTrainer[0].id}`}>
        <div className="gym-list2">
         {queryTrainer.map((trainer) => (
           <React.Fragment key={trainer.id}>
              <TrainerShow //name,address,slogan is what its named  EXACTLY in the backend for my GYM model inside of schema
                //and GymShow is inside my components aka what i want to show, name,address,slogan... 
                name={trainer.name}
                img={trainer.img}
                />
               
           </React.Fragment>
      ))}
      </div>
      </Link> 
      

      </div>
    </>
  )
}