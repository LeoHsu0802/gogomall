import React from 'react';
import Header from './components/header/Header';
import LeftMenu from './components/leftMenu/LeftMenu';
import Homepage from './components/body/Homepage';
import Ccc from './components/body/Ccc';
import Fashion from './components/body/Fashion';
import Homekitchen from './components/body/HomeKitchen';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <LeftMenu />
        <Switch>
            <Route exact path='/' component={Homepage} />
            <Route exact path='/3c' component={Ccc} />
            <Route exact path='/fashion' component={Fashion} />
            <Route exact path='/home-kitchen' component={Homekitchen} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
