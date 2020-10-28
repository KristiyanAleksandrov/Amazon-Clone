import React, { useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './components/Header'
import Home from './components/Home'
import Checkout from './components/Checkout'
import Login from './components/Login'
import UnderHeader from './components/UnderHeader'
import Details from './components/Details';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function App() {
  const [, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      } else {
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    });

    return () => {
      unsubscribe();
    }
  }, []);

  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <h1>Register Page</h1>
        </Route>
        <Route path="/details/:id">
          <Header />
          <UnderHeader />
          <Details />
        </Route>
        <Route path="/checkout">
          <Header />
          <UnderHeader />
          <Checkout />
        </Route>
        <Route path="/">
          <Header />
          <UnderHeader />
          <Home />
        </Route>
      </Switch>
    </Router >
  );
}

export default App;
