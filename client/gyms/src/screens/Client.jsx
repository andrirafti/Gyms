
import React from 'react';
import { Link,useParams } from 'react-router-dom';
import {useState,useEffect} from 'react'
import ClientShow from '../components/ClientShow'
import { getAllClients } from '../services/clients'
import Loading from './Loading'


export default function Client() {
  const [search, setSearch] = useState("");
  const [queryClient, setQueryClient] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const {gym_id,trainer_id,id} = useParams();
  
  /////////
 
  useEffect(() => {
    const fetchClients = async () => {
      const clients = await getAllClients(gym_id,trainer_id);
      setQueryClient(clients);
      setIsLoaded(true);
    };
    fetchClients();
  }, [])
  if (!isLoaded) {
    return Loading
  }
  
  
  console.log(gym_id,trainer_id,queryClient[0].id)
  

    //filter clients//
    const filterClients=queryClient.filter((val)=>{
      return val.name.toLowerCase().includes(search.toLowerCase())
    })
    
    
 
  
  return (
      <div className="gym-list">
        <h1>Client List</h1>
        <p>Find a Client!</p>
    <label>Clients:{" "}
         </label>
          <input className="search"type="text" placeholder="Client Name" value={search} onChange={(e)=>setSearch(e.target.value)}/>
         <div className="gym-list2">
         {filterClients.map((client) => (
           <React.Fragment key={client.id}>
             <Link to={`/gyms/${gym_id}/trainers/${trainer_id}/clients/${client.id}`}>
              <ClientShow 
                name={client.name}
               />
            </Link> 
        </React.Fragment>
      ))}
     
      
      </div>
      </div>
    
  )
}