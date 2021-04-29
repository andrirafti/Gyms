import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import GymShow from '../components/GymShow';
import { getAllGyms } from '../services/gyms';
import Loading from './Loading'
import Aos from "aos"
import "aos/dist/aos.css";




export default function Gym(props) {
  // const { allGyms } = props;
  const [search, setSearch] = useState("");
  const [queryGym,setQueryGym]=useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  
  /////// get my gym to show everything here// 
  useEffect(()=>{
    const fetchGyms=async()=>{
      const gyms= await getAllGyms();
      setQueryGym(gyms);
      setIsLoaded(true);
    };
    fetchGyms();
  },[])
// Filter my gym method up above which connect to the map method at line 34// 
  const filteredGyms=queryGym.filter((val)=>{
    return val.name.toLowerCase().includes(search.toLowerCase())
  })

  if (!isLoaded) {
    return <Loading/>
  }
 
  

  return (
    
    <div className="gym-list">
      <h2>Select Your Gym!</h2>
      <label>Search:{""}</label>
            <input className="search" type="text" placeholder="Gym Name" value={search} onChange={(e)=>setSearch(e.target.value)}/>
       <div className="gym-list2">
        {filteredGyms.map(gym => (
          <React.Fragment key={gym.id}>
            <Link className="glow-on-hover" to={`/gyms/${gym.id}`}>
              <GymShow //name,address,slogan is what its named  EXACTLY in the backend for my GYM model inside of schema
                //and GymShow is inside my components aka what i want to show, name,address,slogan... 
                name={gym.name}
                img={gym.img}
              />
            </Link>
         
          </React.Fragment>
        ))}
        </div>
      
      </div>
      
  );
};