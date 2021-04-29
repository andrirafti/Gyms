import React, { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { getAllGyms,getOneGym, deleteGym, postGym, putGym } from '../services/gyms'
import Gym from '../screens/Gym';
import GymDetail from '../screens/GymDetail'

export default function GymsContainer() {
  const [allGyms, setAllGyms] = useState([]);
  const [oneGym,setOneGym] =useState([]);
  const [allTrainers,setAllTrainers]=useState([])
  //multiple gyms
  const fetchGyms = async () => {
    const gyms = await getAllGyms();
    setAllGyms(gyms);
   }

  useEffect(() => {
    fetchGyms();
  }, []);
 

  return (
    //Here is where my route EXACT PATHS will be SET!// 
    <>
      <Switch>
        <Route exact path='/gyms'>
          <Gym
            allGyms={allGyms}
          />
        </Route>
        <Route  exact path='/gyms/:id'>
          <GymDetail
          allGyms={allGyms}
          />
        </Route>
      </Switch>
    </>
  )
}
