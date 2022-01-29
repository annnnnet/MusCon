import React from 'react';
import Main from './pages/main/main';
import Pd from './pages/post_demonstrate/pd';
import Singerchoose from './pages/singerchoose/singerchoose';
import PostCreate from './pages/postcreate/postcreate';
import My_Page from './pages/My_Page/my_page'
import User_Page from './pages/User_Page/user_page'
import Registration from './pages/Registration/registration'
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
          <Route path="/pd">
            <Pd />
          </Route>
          
          <Route path="/My_Page">
            <My_Page />
          </Route>

          <Route path="/User_Page">
            <User_Page />
          </Route>

          <Route path="/reg">
            <Registration />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}