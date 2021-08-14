import React, { Component } from 'react'
import Posts from './Posts.js'
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap'
import './App.css'
import Home from './Home.js'
import About from './About.js';
import AddPost from './AddPost.js';
import NavBar from './NavBar.js';
import { connect, Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ViewPost from './ViewPost.js'


import 'bootstrap/dist/css/bootstrap.min.css';


export class App extends Component {
  constructor(props) {
    super(props);
    console.log(this.props)
  }
  render() {
    return (
      <Router>

        <div className="Navbar" style={{
          display: "flex",
          flexDirection: "column", alignItems: "center", alignContent: "center"
        }}>
          <NavBar />
        </div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/add">
            <AddPost />
          </Route>

          <Route exact path="/about">
            <About />
          </Route>

          <Route exact path="/post">
            <ViewPost />
          </Route>

        </Switch>

      </Router>



    )
  }
}

export default App
