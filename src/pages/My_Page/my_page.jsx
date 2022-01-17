import React from 'react';
// import { MDBContainer } from "mdbreact";
import '@fortawesome/fontawesome-free/css/all.min.css';  
import 'bootstrap-css-only/css/bootstrap.min.css';  
import 'mdbreact/dist/css/mdb.css';
import './my_page.css';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import Polar_Chart from '../../components/polar_chart/polar_chart';
const friends = ["Username1", "Username2", "Username3", "Username4", "Username5"]
const genre = ["Genre1", "Genre2", "Genre3", "Genre4", "Genre5"]




const My_Page = () => {
    return (
     <div class="back">
        <Header />
            
                {/* <div class="basic body">
                    </div> */}
                {/* <p class="small fieldname"><i class="fa fa-map-marker mr-2"></i></p>
                <i class="fa fa-map-marker overflow-hidden overflow-hidden"></i> */}
            <div class="leftside ">
                <h4 class="col-md-6 fieldname">Manuella_Tarly</h4>
            </div>
            {/* <div class="right border">
                <h4 class="col-md-6 fieldname">Music preferences</h4>
                </div> */}
            {/* <h4 class="col-md-12 text-left complete"> </h4> */}
            <div className="main">
                <div class="col-md-12 basic body">
                    <div class="media lcanva">
                        <img src="/images/ava.jpg" class="img-fluid rounded-circle  link-dark " />
                        <a href="#" class="edit col-md-6 btn btn-block">Edit profile</a>
                        {/* <i class="fa fa-map-marker mr-2"> </i> */}
                    </div>
                </div>  
            </div> 
                <div className="main">
            </div>
            <div class="rightside">
            {/* <h4 class="col-md-12 text-right complete"> </h4> */}
                <h4 class="col-md-6 text-left fieldname">Favorites</h4>
                
            </div>  
            <div className="main">
                <div class="col-md-12 basic body">
                    <div class="rcanva">
                        <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous" />
                      
                        {/* <div class="circle forma list-group list-group-mine  ">
                            <a class="circle list-group-item" href="/path"><strong><a href="#">Edit profile</a></strong></a>
                            <a class="circle list-group-item" href="/path"><strong><a href="#">Edit profile</a></strong></a>
                        </div> */}
                         <ul class="forma nav nav-tabs">
                            <li class="circle nav-item">
                                <a class=" nav-link " href="#"><strong><a href="#">Favotited songs</a></strong></a>
                            </li>
                            <li class="circle nav-item">
                                <a class=" nav-link"  href="#"><strong><a href="#">Friends</a></strong></a>
                            </li>
                        </ul>
                        <div class="list-group list-group-mine">
                             {friends.map((items, index) => {
                                return (
                                         <a class="col-md-12 list-group-item" href="/{items}"><a href="#" class="col-md-9">{items}</a><button type="button" class="col-md-1 delete btn-close" aria-label="Close"></button></a>)  })}
                        </div>
                        {/* <Friends/>; */}

                    </div>
                </div>  
            </div> 
            <div class="leftside">
            {/* <h4 class="col-md-12 text-right complete"> </h4> */}
                <h4 class="col-md-7 fieldname">Music preferences</h4>
                
            </div>  
            <div className="main">
                <div class="col-md-12 basic body">
                    <div class="medis lcanva">      
                        <ul class="forma nav nav-tabs">
                            <li class=" nav-item">
                                <a class=" nav-link " href="#"><strong>Favotited songs</strong></a>
                            </li>
                        </ul>
                        <div class="list list-group list-group-mine">
                             {genre.map((items, index) => {
                                return (
                                         <a class="col-md-12 list-group-item" href="/{items}"><a href="#" class="col-md-9">{items}</a><button type="button" class="col-md-1 delete btn-close" aria-label="Close"></button></a>)  })}
                        </div>
                    
                    </div>
                </div>
            </div>
        <Footer/>
     </div>
     );
};

export default My_Page;