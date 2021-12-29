import React from "react";
import './main.css';
import logo from '../../pics/logo.jpg';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';

const Main = () => {
  return(
<div>
    <div className="main">
      <Header/>
      <div class="body">
        <div>
            <img class="logo" src={logo}></img>
        </div>
        <div class="buttons">
            <button type="button" class="vertical_button">Log in</button>
            <br></br>
            <button type="button" class="vertical_button">Sign up</button>
            <div>
                <button type="button" class="horizontal_button">G</button>
                <button type="button" class="horizontal_button">F</button>
                <button type="button" class="horizontal_button">S</button>
            </div>
        </div>
      </div>
      <Footer/>
    </div>
    
  </div>
  );
};

export default Main;