import React,{useEffect} from 'react';
import Header from './components/header/Header';
import LeftMenu from './components/leftMenu/LeftMenu';
import Homepage from './components/body/Homepage';
import Ccc from './components/body/Ccc';
import Fashion from './components/body/Fashion';
import Homekitchen from './components/body/HomeKitchen';
import AddNewItem from './components/body/AddNewItem'
import ShoppingCart from './components/body/ShoppingCart'
import LikeItem from './components/body/LikeItem'
import LoginModal from './components/auth/LoginModal'
import Register from './components/auth/Register'
import Footer from './components/footer/Footer'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import store from './store'
import { loadUser } from './actions'

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  });
  
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <LeftMenu />
          <ShoppingCart />
          <LikeItem />
          <LoginModal />
          <Switch>
              <Route exact path='/' component={Homepage} />
              <Route exact path='/3c' component={Ccc} />
              <Route exact path='/fashion' component={Fashion} />
              <Route exact path='/home-kitchen' component={Homekitchen} />
              <Route exact path='/add-new-item' component={AddNewItem} />
              <Route exact path='/user-register' component={Register} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
