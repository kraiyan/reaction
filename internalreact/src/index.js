import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route, Link, BrowserRouter } from 'react-router-dom';
import A from "./A";


import Ref from "./ref";
import { Switch } from 'react-router';
  



const routs = (
  < BrowserRouter >
     

             <Switch>
              <Link to="/">Home</Link>
           
        
              <Link to="/B ">Users</Link>
          
           
              <Link to="/ref ">reference</Link>
          
           
              
        
              </Switch>

              <ul role="nav">
         <li><Link to="/B">B</Link></li>
         <li> <Link to= "/ref">Reference</Link></li>
       </ul>


      
        <Route exact path="/" component={A} />
        <Route path="/B" component={App} />
        <Route path = "/ref" component= {Ref} />
        
     
  </ BrowserRouter >
);


ReactDOM.render(

      routs,

document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
