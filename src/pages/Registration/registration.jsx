import React from 'react';
import './registration.css';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import Polar_Chart from '../../components/polar_chart/polar_chart';
  
{/* <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></link>; */}

const Registration = () => {
    return(
<div class="back">
  <Header/>
    <h1 class="standcol text-center"><em><strong>Welcome to MusCon!</strong></em></h1>
  <div class="main">
    <body class="body">
    <div class="media logo col-md-6 ">
       <img src="/images/logo.jpg" class="img-fluid col-md-offset-9 rounded-circle  link-dark" />
    </div >
    <div class="basic form-container ml-1 col-md-6 ">
      <form className="signup-form" class="rounded col-md-10 border border-warning"> 
                  
        <h3 class="h3 mb-3 fw-normal standcol"><strong>Create</strong> an account</h3>
         <main class="form-signup text-left">   
            <div class="form-row ">
                    
              {/* <div class="media logo d-flex flex-wrap align-items-center justify-content-center col-md-2">
                <img src="/images/logo.jpg" class="img-fluid rounded-circle mb-3  link-dark" />
              </div >
                 */}
              <div class="form-group rounded-top col-md-12">
                <label for="floatingInput" class="control-label standcol">Username</label>
                <input type="username" class="form-control" id="floatingInput" placeholder="Input username"/>
              </div>
              
              <div class="form-group col-md-12">
                <label for="floatingInput" class="control-label standcol">Email address</label>
                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
              </div>
                    
              <div class="form-group col-md-12">
                <label for="floatingInput" class="control-label standcol">Location</label>
                <input type="city" class="form-control" id="floatingInput" placeholder="Input city and country"/>
              </div>
                    
              <div class="form-group col-md-12">
                <label for="floatingPassword" class="control-label standcol">Your password</label>
                <input type="password" class="form-control" id="floatingPassword" placeholder="Input password"/>
              </div>
              
              <div class="text-left form-check col-md-6">
                <label class="form-check-label standcol">
                  <input class="form-check-input  " type="checkbox" />I agree to the license terms.
                </label>
              </div>
              
              </div>
                  
              <div class="w-100 form-group">
                    <button class="btn btn-lg" type="submit">Sign Up</button>
              </div>
                  
              <a class="already" href="#">You already have an account? Login here.</a>
          </main>
        </form>
      </div>
    </body>
        </div>
        <Polar_Chart/>
  <Footer/>
</div>
  );
};

export default Registration;

{/* <div class="register-photo">
    <div class="form-container">
        <div class="image-holder"></div>
        <form>

            <div class="form-group"><input class="form-control" type="email" name="email" placeholder="Email"></div>
            <div class="form-group"><input class="form-control" type="password" name="password" placeholder="Password"></div>
            <div class="form-group"><input class="form-control" type="password" name="password-repeat" placeholder="Password (repeat)"></div>
            <div class="form-group">
                <div class="form-check"><label class="form-check-label"><input class="form-check-input" type="checkbox">I agree to the license terms.</label></div>
            </div>
            <div class="form-group"><button class="btn btn-primary btn-block">Sign Up</button></div><a class="already" href="#">You already have an account? Login here.</a>
        </form>
    </div>
</div> */}