import logo from './logo.svg';
import React from "react";
import {
  BrowserRouter as Router, Switch, Route, Link, BrowserRouter
} from "react-router-dom";
import { Button, Nav } from 'react-bootstrap';
import './App.css';
import Header from './components/Header/Header';
import Customized from './components/Customized/Customized';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">

      <Router>
        <Header></Header>

        <Switch>
          <Route exact path="/home">
            <Home>
            </Home>
          </Route>

        </Switch>

      </Router>
      <Footer></Footer>

    </div>
  );
}

export default App;
