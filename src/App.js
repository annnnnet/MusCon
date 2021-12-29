import './App.css';
import React from 'react';
// import { BrowserRouter } from "react-router-dom"; 
import Registration from './pages/Registration/registration';
// import Map from './Map';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

export default function App() {
  return (
    <Router>
        <Switch>
          <Route path="/registration">
            <Registration/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}
