import React from 'react';
import "./header.css";
import { Link } from 'react-router-dom';
import Registration from '../../pages/Registration/registration';


const Header = () => {
    return(
    <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-0 border-bottom">
      <div class="media col-1 text-right col-md-2 m-1 link-dark">
          <img src="/images/logo.jpg" class="img-fluid rounded-circle " width="40" height="40"/>
      </div>
      
      <ul class="nav col-1 col-md-2 m-1 text-centre justify-content-md-between md-mb-0 align-items-centre">
        <li class="nav-item"><Link to="/" class="nav-link px-2 link-dark">Home</Link></li>
        <li class="nav-item"><Link to="/faqs" class="nav-link px-2 link-dark">FAQs</Link></li>
        <li class="nav-item"><Link to="/features" class="nav-link px-2 link-dark">Features</Link></li>
      </ul>

      <div class="col-md-2 text-end btn-group">
        <a href="/home" role="button" class="btn btn-outline-warning">Login</a>
        <a href="/registration" role="button" class="btn btn-warning active">Sign-Up</a>
     </div>
        
    </header>
    );
};
export default Header;