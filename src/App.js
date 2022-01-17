import './App.css';
import React from 'react';
import Registration from './pages/Registration/registration';
import My_Page from './pages/My_Page/my_page';
import User_Page from './pages/User_Page/user_page';
import Polar_Chart from './components/polar_chart/polar_chart';
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
    <header class="App-headrer">

    <Router>
        <Switch>
          <Route path="/registration">
            <Registration/>
          </Route>
          <Route path="/my_page">
            <My_Page/>
          </Route>
          <Route path="/user_page">
            <User_Page/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
          <Route path="/polar_chart">
            <Polar_Chart/>
          </Route>
          
        </Switch>
      </Router>
      </header>
  );
}

function Home() {
  return <h2>Home</h2>;
}
