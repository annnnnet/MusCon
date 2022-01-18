import React from 'react';
import Main from './pages/main/main';
import Singerchoose from './pages/singerchoose/singerchoose';
import PostCreate from './pages/postcreate/postcreate'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/Main">
            <Main />
          </Route>
          <Route path="/Singerchoose">
            <Singerchoose />
          </Route>
          <Route path="/PostCreate">
            <PostCreate />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}