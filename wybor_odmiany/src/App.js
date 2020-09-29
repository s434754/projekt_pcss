import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import './App.css';
import {Button} from "./components/Button"
import druga from "./pages/page3/druga.js";
import { Link } from "react-router-dom";
import Form from './pages/page1/Form';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./pages/page1/Home.js";
import trzecia from "./pages/page4/trzecia.js";
import czwarta from "./pages/page5/czwarta.js";
import piata from "./pages/page6/piata.js";
import szusta from "./pages/page7/szusta.js";
import pierwsza from "./pages/page2/pierwsza.js";
import siodma from "./pages/page8/siodma.js";
import osma from "./pages/page9/osma.js";
import dziewiata from "./pages/page10/dziewiata.js";
import dziesiata from "./pages/page11/dziesiata.js";






function App() {
  return (
    
    <Router>
    
      <div className="App"> 
      
      <Navbar />
        
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/pierwsza" component={pierwsza} />
          <Route path="/druga" component={druga} />
          <Route path="/trzecia" component={trzecia} />
          <Route path="/czwarta" component={czwarta} />
          <Route path="/piata" component={piata} />
          <Route path="/szusta" component={szusta} />
          <Route path="/siodma" component={siodma} />
          <Route path="/osma" component={osma} />
          <Route path="/dziewiata" component={dziewiata} />
          <Route path="/dziesiata" component={dziesiata} />
          
          

        </Switch>
        
        
      
      </div>
      
    </Router>
  );
}

export default App;
