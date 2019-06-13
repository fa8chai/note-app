import React, { Component } from "react";
import { BrowserRouter as Router, Route , NavLink } from "react-router-dom";
import "./App.css" ;
import "bootstrap/dist/css/bootstrap.min.css";

import CreateNote from "./components/create-note";
import List from "./components/list";



class App extends Component {
  render() {
    return (
      <Router>
        <div >
          <nav style={{margin:"unset",opacity:"0.8"}} className="navbar navbar-expand-sm navbar-dark bg-dark">
            <h4 className="navbar-logo">App</h4>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                
                <li className="navbar-item">

                  <NavLink exact activeStyle={{color:"rgb(188, 256, 273)"}} to="/" className="nav-link">Notes</NavLink>
                </li>
                <li className="navbar-item">
                  <NavLink activeStyle={{color:"rgb(188, 256, 273)"}} to="/create" className="nav-link">Create Note</NavLink>
                </li>
       
              </ul>
            </div>
          </nav>
          <br/>
          <Route path="/" exact component={List} />
          
          <Route path="/create" component={CreateNote} />
        </div>
      </Router>
    );
  }
}

export default App;