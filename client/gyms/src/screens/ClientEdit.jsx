import React, { useState, useEffect } from 'react';
import {Link,useParams,useHistory} from 'react-router-dom';
import {putClient,getOneClient} from '../services/clients'

const ClientEdit = () => {
  const [client, setClient] = useState({
    name: "",
    goal: "",
  });
  const [isUpdated, setUpdated] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const { gym_id,trainer_id,id } = useParams();
  const history = useHistory();

  //this will auto fill in all our client details because of the getOneClient(id) method//
  useEffect(() => {
    const fetchClient = async () => {
      const client = await getOneClient(gym_id,trainer_id,id);
      setClient(client)
      setIsLoaded(true)
    };
    fetchClient();
  },[gym_id,trainer_id,id])
      

/// this is where we set our onChange... 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setClient(({
      ...client,
      [name]: value
    }));
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const updated = await putClient(gym_id,trainer_id,id, client);
    console.log(updated)
    setUpdated(updated);
  };
  //if loading screen not false.. display image//
  if (!isLoaded) {
    return <img className="Loading" src="https://ak.picdn.net/shutterstock/videos/1054933562/thumb/7.jpg"/>;
  }
  //if isupdated is true push back to link below//
  if (isUpdated) {
    history.push(`/gyms/${gym_id}/trainers/${trainer_id}/clients/${id}`);
  }

  
  return (
    <div className="gym-details">
      <form onSubmit={handleSubmit}>
        <h1>Update Client</h1>
        <div className="btnupdate">
        <label>Name:
            <input
              type="text"
              name="name"
              value={client.name}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="btnupdate">
        <label>Goal:
            <input
              type="text"
              name="goal"
              value={client.goal}
              onChange={handleChange}
            />
          </label>
          </div>
        <button className="smbt"type='submit'>Submit Changes</button>
        </form>
    </div>
  )
}

export default ClientEdit
