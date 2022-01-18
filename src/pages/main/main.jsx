import React from "react";
import './main.css';
import '../../basic.css';
import logo from '../../pics/logo2.png';
import g_logo from '../../pics/g_logo.jpg';
import f_logo from '../../pics/f_logo.png';
import s_logo from '../../pics/s_logo.png';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';


const Main = () => {
  return(
<div class="back">
<Header/>
    <div className="main">      
      <div className="body">

        <div className="main_logo">
            <img  src={logo}></img>
        </div>
        <div className="main_buttons">
            <button type="button" class="main_vertical_button">Log in</button>
            <br></br>
            <button type="button" class="main_vertical_button">Sign up</button>
            <div className="main_horizontal_buttons">
                <button type="button" className="main_horizontal_button"><img className="main_button_img" src={g_logo}></img></button>
                <button type="button" className="main_horizontal_button"><img className="main_button_img" src={f_logo}></img></button>
                <button type="button" className="main_horizontal_button"><img className="main_button_img" src={s_logo}></img></button>
            </div>
        </div>
      </div>   
             
    </div>
    <Footer/>
  </div>
  );
};

export default Main;