import React from "react";
import './singerchoose.css';
import logo from '../../pics/logo.jpg';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
const musicians = [
  "BLACKPINK", "Maneskin", "Melovin", "KAZKA", "Vivaldi", "Chopin", "YUNGBLUD"
];

const Singerchoose = () => {
  return(
<div>
    <Header/>
    <div className="main">
      <div class="body">        
        <h1>Choose singer/group:</h1>
          <div class="search_box">
            <input class="search" type="search" placeholder="Search through singers"></input>
            <button class="button">Search</button>
          </div>
        <div>
          {musicians.map((items, index) => {
            return (
              <ul class="musician">                
                <li> {items}  </li> <img class="logo" src={logo}></img>
              </ul>
            );
          })}
        </div>
      </div>
    </div>
    <Footer/>
  </div>
  );
};

export default Singerchoose;