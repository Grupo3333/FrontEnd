import React from 'react';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/statics/navbar/Navbar';
import Footer from './components/statics/footer/Footer';
import Lista from './components/lista/Lista';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';
import './App.css';


function App() {
  return (
    <Router>

      <Navbar />

        <Switch>

          <div >

            <Route path='/login'>
              <Login />
            </Route>

            <Route path='/home'>
              <Home />
              <Lista />
            </Route>

          </div>

        </Switch>

      <Footer />

    </Router>
  );
}

export default App;