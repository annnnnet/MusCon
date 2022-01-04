import React from "react";
import { Link } from 'react-router-dom';
import "./footer.css";
// import bootstrap from 'bootstrap';

const Footer = () => {
    return (
        <footer class="d-flex flex-wrap justify-content-md-between justify-content-center align-items-center py-3 my-0 border-top">
        <p class="col-md-4 mb-0 text-muted">&copy; 2021 Company, Inc</p>
    
        {/* <div class="media text-center col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
          <img src="/images/logo.jpg" class="img-fluid rounded-circle mb-3 bi me-2" width="40" height="40"/>
        </div> */}
        
        <ul class="nav col-md-2 justify-content-end">
          <li class="nav-item"><Link to="/" class="nav-link px-2 text-muted">Home</Link></li>
          <li class="nav-item"><Link to="/faqs" class="nav-link px-2 text-muted">FAQs</Link></li>
          <li class="nav-item"><Link to="/features" class="nav-link px-2 text-muted">Features</Link></li>
        </ul>
      </footer>
    );
  };
  export default Footer;


  