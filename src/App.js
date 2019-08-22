import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import GetDetails from './pages/GetDetails'
import Error from './pages/Error';
import NavBar from './components/Navbar';

function App() {
  return  <>
  <NavBar />
  <Switch>
    <Route exact path = "/" component={Home} />
    <Route exact path = "/getaways" component={Rooms} />
    <Route exact path = "/getaways/:slug" component={GetDetails} />
    <Route component={Error} />
    
  </Switch>
  
  
  </>
}
    
export default App
