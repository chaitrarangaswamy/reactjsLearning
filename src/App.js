import React from 'react';

//import logo from './logo.svg';

import './App.css';
//import ReactDOM from 'react-dom'

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';

import Dashboard from './components/views/Dashboard';

// import About from './components/views/About';

import Parent1 from './components/parentChild/Parent1';

import Parent from './components/childParent/Parent';
import ConditionalRendering from './components/conditionalRendering';
import LifeCycleA from './components/lifeCycleMethods/mounting/lifeCycleA';
import ParentComp from './components/pureComponent/parentComp';

function App() {

  return (
     
    <div className="App">
     <h1>welcome to shopping app</h1>
     {/* <Parent1/>  */}
     {/* <Parent/> */}
     {/* <ConditionalRendering/> */}
     <ParentComp/>
     {/* <LifeCycleA/> */}
      <Router>

        <Route path='/home' component={Home} />

         <Route path='/dashboard' component={Dashboard} /> 

        {/* <Route path='/about' component={About} /> */}

      </Router>

    </div>

  );

}



export default App;
