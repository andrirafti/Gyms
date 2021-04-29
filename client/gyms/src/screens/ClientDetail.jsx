import React, { useState, useEffect } from 'react';
import {Link,useParams,useHistory} from 'react-router-dom';
import {getOneClient,deleteClient} from '../services/clients'
import Tilt from 'react-vanilla-tilt'


const ClientDetail = () => {
  const [client, setClient] = useState(null)
  const history=useHistory();
  const [isLoaded, setIsLoaded] = useState(false);
  const {gym_id,trainer_id,id}=useParams();
//Delete Client


useEffect(()=>{
  const fetchClient=async()=>{
    const client=await getOneClient(gym_id,trainer_id,id);
    setClient(client);
    setIsLoaded(true);
  };
  fetchClient();
},[gym_id,trainer_id,id])
console.log(id)
console.log(gym_id,trainer_id,id)
const handleDelete=()=>{
  deleteClient(gym_id,trainer_id,id)
  history.push(`/gyms/${gym_id}/trainers/${trainer_id}/`)
  setIsLoaded(true);
}
  if (!isLoaded) {
    return <img className="Loading" src="https://ak.picdn.net/shutterstock/videos/1054933562/thumb/7.jpg"/>;
  }

  
  // Made the trainer ID so its easier to call upon// 
  // let trainerID = client.trainer_id
  // console.log(client.trainer_id)
 
  
  return (
    <div className="gym-details">
       {<div className="card">
        <Tilt  options={{max:25,speed:400,glare:false}}>
         <div className="card">
            <h1><label>Name: {client.name}</label></h1>
            <h2><label>Goal: {client.goal}</label></h2>        
             </div>
               
               <Link to={`/gyms/${gym_id}/trainers/${trainer_id}/clients/${id}/edit`}><button>Edit Client!</button></Link> 
               <button onClick={handleDelete}>Delete Client </button>
             <Link className="button" to={`/gyms/${gym_id}/trainers/${trainer_id}/clients/create`}>
               <button>
             Enroll Today
             </button>
         </Link>
             </Tilt>
             </div>

        }
       

    </div>
  )
}

export default ClientDetail
