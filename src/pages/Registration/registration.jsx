import React from 'react';
import './registration.css';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></link>;


const Registration = () => {
    return(
<div>
      <Header/>
      <div>Wellcome to Muscon!</div>
      <head>
        <title>Signin Template · Bootstrap v5.1</title>
        <link rel="canonical" href="https://getbootstrap.com/docs/5.1/examples/sign-in/"/>
        <link href="../assets/dist/css/bootstrap.min.css" rel="stylesheet"/>
        <link href="signin.css" rel="stylesheet"/>
      </head>
      
      <body class="text-center">
        <main class="form-signin">
          <form>
            <img class="mb-4" src="../assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"/>
            <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

            <div class="form-floating">
              <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
              <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating">
              <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
              <label for="floatingPassword">Password</label>
            </div>

            <div class="checkbox mb-3">
              <label>
              <input type="checkbox" value="remember-me"/> Remember me
              </label>
            </div>
            <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
          </form>
        </main>
      </body>
      <Footer/>
    </div>
    );
};

export default Registration;