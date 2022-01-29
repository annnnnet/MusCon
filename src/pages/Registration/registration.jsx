import React from 'react';
import './registration.css';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import Polar_Chart from '../../components/polar_chart/polar_chart';
import { MdOutlineAddAPhoto } from '../../../node_modules/react-icons/md';
  

const Registration = () => {
    return(
      <div class="col-md-12 standart ">
        <div class="top sticky-top ">
          <Header />  
          </div>
        <div class="top back">
        <img src="/images/Violet_top_left_wave_1.png"/>
        </div>
          <div class="col-md-12 violet_back text-center">
          <h1 class="present">MusCon</h1>
          </div>
        <body class="col-md-12 pt-10 violet_back body h-100 w-100">
          <div class="media logo mr-1 col-md-5 ">
            <img src="/images/logo2.png" class="img-fluid  link-dark" />
          </div >
          <div class="form-container ml-1 col-md-7 ">
            <form class=" signup-form col-md-11"> 
              <h3 class="text-center title"><strong>Create</strong> an account</h3>
              <main class="col-md-10 form-signup text-left">   
                <div class="form-row  ">
                     
                  <div class="form-group col-md-12">
                    <img src="/images/ava.jpg" class="col-md-6 img-fluid rounded-circle  link-dark w-50" />
                    <button type="submit" class="btn add_photo row col-md-5 text-capitalize btn w-100 "><MdOutlineAddAPhoto/> Add best photo </button>
                </div>
                    <div class="form-group col-md-12">
                      <label for="floatingInput" class="control-label ">Username</label>
                      <input type="username" class="form-control" id="floatingInput" placeholder="Input username"/>
                    </div>
                    
                    <div class="form-group col-md-12">
                      <label for="floatingInput" class="control-label ">Email address</label>
                      <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                    </div>
                          
                    <div class="form-group col-md-12">
                      <label for="floatingInput" class="control-label ">Location</label>
                      <input type="city" class="form-control" id="floatingInput" placeholder="Input city and country"/>
                    </div>
                          
                    <div class="form-group col-md-12">
                      <label for="floatingPassword" class="control-label ">Password</label>
                      <input type="password" class="form-control" id="floatingPassword" placeholder="Input password"/>
                    </div>
                    
                    <div class="text-left form-check col-md-6">
                      <label class="form-check-label">
                        <input  type="checkbox" class="form-check-input" />I agree to the license terms.
                      </label>
                    </div>
                    
                  </div>
                        
                  <div class="col-md-6 form-group">
                        <button class="btn" type="submit">Sign Up</button>
                  </div>
                        
                  <p class="already">You already have an account? <a href="/login"> Login here.</a></p>
                </main>
            </form>
          </div>
        </body>
        {/* </div> */}

      <div class="bottom back">
        <img src="/images/Wave_Violet_bottom_right_shape_1.png" />
        </div>
        
          <div class="bottom">
          <Footer /> 
        </div>
        
</div>
  );
};

export default Registration;



                  {/* <div class="row py-4">
        <div class="col-lg-6 mx-auto"></div>
                  <div class="input-group mb-3 px-2 py-2 rounded-pill bg-white shadow-sm">
                <input id="upload" type="file" onchange="readURL(this);" class="form-control border-0"/>
                <label id="upload-label" for="upload" class="font-weight-light text-muted">Choose file</label>
                <div class="input-group-append">
                    <label for="upload" class="btn btn-light m-0 rounded-pill px-4"> <i class="fa fa-cloud-upload mr-2 text-muted"></i><small class="text-uppercase font-weight-bold text-muted">Choose file</small></label>
                </div>
            </div> */}
{/* 
            <p class="font-italic text-white text-center">The image uploaded will be rendered inside the box below.</p>
            <div class="image-area mt-4"><img id="imageResult" src="#" alt="" class="img-fluid rounded shadow-sm mx-auto d-block"/></div>

                </div> */}