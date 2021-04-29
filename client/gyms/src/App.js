
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import GymsContainer from './container/GymsContainer';
import Trainer from './screens/Trainer';
import TrainerDetail from './screens/TrainerDetail'
import Client from './screens/Client'
import ClientDetail from './screens/ClientDetail'
import ClientEdit from './screens/ClientEdit'
import ClientCreate from './screens/ClientCreate'
import HomePage from './components/HomePage'


function App() {

  //The way switch works goes bottom up... so start with gyms on the lowest and work your way up the deeply nested tree so trainers... then clients //
  //Trainer from trainer.jsx already has trainershow inside of it so it will show everything we need.//
  return (
    <div className="App">
      <Nav/>
      <Switch>
        <Route exact path='/gyms/:gym_id/trainers/:trainer_id/clients/:id/edit'>
          <ClientEdit/>
        </Route>
        <Route exact path='/gyms/:gym_id/trainers/:trainer_id/clients/create'>
          <ClientCreate/>
        </Route>
        <Route exact path='/gyms/:gym_id/trainers/:trainer_id/clients/:id' >
           <ClientDetail/>
           </Route>
        <Route exact path= '/gyms/:gym_id/trainers/:trainer_id/clients'>
          <Client/>
           </Route>
        <Route exact path='/gyms/:id/trainers/:id'>
          <TrainerDetail/>
        </Route>
        <Route exact path='/gyms/:id/trainers'>
          <Trainer/>  
        </Route>
        <Route  path='/gyms' component={GymsContainer}/>
      </Switch>
      <Route exact path='/'>
        <HomePage/>
      </Route>
      <Footer/>
    </div>
  );
}

export default App;
