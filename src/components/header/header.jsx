import React from 'react';
import "./header.css";

const Header = () => {
    return(      
      <header class="header">
        <div class="media col-1 text-right">
           <img src="/images/logo.jpg" class="img-fluid rounded-circle " width="50" height="50"/>
        </div>
        <ul class="header_left_nav">
          <li><a href="/singerchoose">Singerchoose</a></li>
          <li><a href="/my_page">Features</a></li>
          <li><a href="/genrechoose">Pricing</a></li>
          <li><a href="/">FAQs</a></li>
          <li><a href="/">About</a></li>
        </ul>

        <div class="d-flex col-md-4 text-end " >
          <a href="/home" role="button" class="btn">Login</a>
         <a href="/registration" role="button" class="btn active">Sign-Up</a>
        </div>

    </header>
    );
};
export default Header;