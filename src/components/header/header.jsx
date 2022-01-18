import React from 'react';
import "./header.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const Header = () => {
    return(
    <header className="header">
      <ul className="header_left_nav">
            <li>
              <Link to="/main">Main</Link>
            </li>
            <li>
              <Link to="/singerchoose">Singerchoose</Link>
            </li>
            <li>
              <Link to="/PostCreate">Poscreate</Link>
            </li>
          </ul>

        <div className="header_buttons">
        <button type="button" class="header_vertical_button">Login</button>
        <button type="button" class="header_vertical_button">Sign up</button>
      </div>
    </header>
    );
};
export default Header;