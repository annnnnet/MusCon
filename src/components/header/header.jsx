import React from 'react';
import "./header.css";
import styled from 'styled-components'
import logo from '../../pics/logo.png';
import {
  BrowserRouter as Router,
  NavLink
} from "react-router-dom";

const Link = styled(NavLink)`     
  color: black;
  &:hover {
    text-decoration: underline;
    color: #b61984;
  }
  `

const Header = () => {
    return(<header className="header">
      <div className="header_logo">
            <img  src={logo}></img>
        </div>
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