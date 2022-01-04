import React from 'react';
import './registration.css';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
  
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></link>;


const Registration = () => {
    return(
<div>
      <Header/>
      <head>
        <title>Signin Template · Bootstrap v5.1</title>
        <link rel="canonical" href="https://getbootstrap.com/docs/5.1/examples/sign-in/"/>
        <link href="../assets/dist/css/bootstrap.min.css" rel="stylesheet"/>
        <link href="signin.css" rel="stylesheet"/>
      </head>
      
      <body class="text-center basic">
          <h1><em><strong>Wellcome to MusCon!</strong></em></h1>
          <div class="media text-center d-flex flex-wrap align-items-center justify-content-center justify-content-md-between col-md-2">
            <img src="/images/logo.jpg" class="img-fluid rounded-circle mb-3  link-dark" />
          </div>
            <form  class="rounded border border-top-0 border-warning" role="form"> 
           <h3 class="h3 mb-3 fw-normal">Please fill out the form</h3>
            <main class="form-signin col-md-12">   
              <div class="form-row col-md-12">
                <div class="form-group rounded-top col-md-6">
                  <label for="floatingInput"><em>Username</em></label>
                  <input type="username" class="form-control" id="floatingInput" placeholder="Input username"/>
                </div>
                
                <div class="form-group col-md-6">
                  <label for="floatingInput" class="control-label"><em>Email address</em></label>
                  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                      </div>
                      
                <div class="form-group col-md-6">
                  <label for="floatingInput" class="control-label"><em>Your name</em></label>
                  <input type="name" class="form-control" id="floatingInput" placeholder="Input name"/>
                </div>

                <div class="form-group col-md-6">
                  <label for="floatingInput" class="control-label"><em>Your surname</em></label>
                  <input type="surname" class="form-control" id="floatingInput" placeholder="Input surname"/>
                </div>
                
                <div class="form-group col-md-6">
                  <label for="floatingInput" class="control-label"><em>City where you live</em></label>
                  <input type="city" class="form-control" id="floatingInput" placeholder="Input city"/>
                </div>
                      
                <div class="form-group col-md-6">
                  <label for="floatingPassword" class="control-label"><em>Your password</em></label>
                  <input type="password" class="form-control" id="floatingPassword" placeholder="Input password"/>
                </div>
              </div>

              <button class="w-100 btn btn-lg btn-warning" type="submit">Sign Up</button>
            </main>
        </form>
      </body>
      <Footer/>
    </div>
  );
};

export default Registration;