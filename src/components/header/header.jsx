import React from 'react';
import "./header.css";

const Header = () => {
    return(      
      <header class="header standart">
        <div class="media small_logo col-md-1 text-right">
           <img src="/images/logo3.png" class="img-fluid  " width="60" height="60"/>
        </div>
        <ul class="header_left_nav col-md-7">
          <li><a href="/singerchoose">Singerchoose</a></li>
          <li><a href="/my_page">My page</a></li>
          <li><a href="/genrechoose">Genrechoose</a></li>
        </ul>

        <div class="group standart col-md-4" >
          <a href="/login" role="button" class="text-capitalize btn col-md-4  justify-content-right">Login</a>
          <a href="/registration" role="button" class="text-capitalize btn active col-md-4  justify-content-left">Sign-Up</a>
        </div>

    </header>
    );
};
export default Header;