import {postClient} from '../services/clients'
import {useState} from 'react'
import {useHistory,useParams} from 'react-router-dom'
import Loading from './Loading'
import Aos from "aos"
import "aos/dist/aos.css";
import Tilt from 'react-vanilla-tilt'



const ClientCreate=()=>{
  const[isCreated,setCreated]=useState(false);
  const {gym_id,trainer_id}=useParams();
  const history=useHistory();
  //the below is an easier way to do const [name,setName] const [goal,setGoal] make all useState into one big one
  const [client,setClient]=useState({
    name:"",
    goal:""
  })
  console.log(trainer_id)
  //handleChange for the above// its the shorter way of doing const [name,setName]=useState([]) do all at once instead of indivually 
  
  const handleChange=(e)=>{
    //name,value as special values used in our form so that what we will target.
    const {name,value}=e.target;
    setClient({
      ...client,
      //we are making our client.. aka name,goal become name:value
      [name]:value
    })
  }
  // Now we need our handleSubmit which brings in the axios call to submit everyting properly from the handleChange input fields//
    const handleSubmit=async(e)=>{
      e.preventDefault();
      const clientadded = await postClient(gym_id,trainer_id, client);
      setCreated(clientadded);
    };
    if (isCreated){
      history.push(`/gyms/${gym_id}/trainers/${trainer_id}/clients/`)
    }
  return (
    <div className="card">
      <Tilt  options={{max:25,speed:400,glare:false}}>
      <form onSubmit={handleSubmit}>
        <h1>Client Sign Up!</h1>
        <div>
        <label> Name:
        <input type="text" name="name" value={client.name} required onChange={handleChange} /></label>
        </div>
        <div className="goal">
          <label> Goal:
          <input type="text" name="goal" value={client.goal} required onChange={handleChange} /> </label>
        </div>
        <button type="submit">Enroll Now</button>
        </form>

      
</Tilt>



    </div>
  );


}
export default ClientCreate