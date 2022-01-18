import React from "react";
import './singerchoose.css';
import '../../basic.css';
import singer from '../../pics/singer.jpg';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
var musicians = [
  "BLACKPINK", "Maneskin", "Melovin", "KAZKA", "Vivaldi", "Chopin", "YUNGBLUD", "BLACKPINK", "Maneskin", "Melovin", "KAZKA", "Vivaldi"
];

const Singerchoose = () => {
  return(
<div class="back">
<Header/>
    <div className="main">
    
      <div className="body">
        <div className="block">        
        <h1>Choose singer / group:</h1>
          <div className="sc_search_box">
            <input className="sc_search" type="search" placeholder="Search through singers"></input>
            <button className="sc_button">Search</button>
          </div>
          <div class="row products-container">
          {musicians.map((items, index) => {
            return (
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
                  <div className="card sc_musician">
                    <img className="sc_singer" src={singer}/>                    
                    <h4>{items}</h4>   
                  </div>                  
                </div>
            );
          })}
            </div>
            
        <br/>
        <div className="center">
        <button className="left_rigth">Previous page</button>
        <button className="left_rigth">Next page</button>
        
        </div>
        <div className="center">
        <button className="sc_button">Submit</button>
        </div>
        
        </div>
        
      </div>
      
    </div>  
    <Footer/>  
  </div>
  );
};

export default Singerchoose;