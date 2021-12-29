import React from 'react';
import "./header.css";
import { Link } from 'react-router-dom';


const Header = () => {
    return(
    <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">


      <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><Link to="/" class="nav-link px-2 link-dark">Home</Link></li>
        <li><Link to="/faqs" class="nav-link px-2 link-dark">FAQs</Link></li>
        <li><Link to="/features" class="nav-link px-2 link-dark">Features</Link></li>
      </ul>


      <div class="col-md-3 text-end">
        <button type="button" class="btn btn-outline-primary me-2">Login</button>
        <button type="button" class="btn btn-primary">Sign-up</button>
      </div>
    </header>
    );
};
export default Header;