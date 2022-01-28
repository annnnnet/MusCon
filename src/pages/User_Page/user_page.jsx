import React from 'react';
import { ImLocation } from '../../../node_modules/react-icons/im';

import { ImPencil } from '../../../node_modules/react-icons/im';
import { RiChat1Line } from '../../../node_modules/react-icons/ri';
import { RiUserFollowLine } from '../../../node_modules/react-icons/ri';
// import { MDBContainer } from "mdbreact";
import '@fortawesome/fontawesome-free/css/all.min.css';  
import 'bootstrap-css-only/css/bootstrap.min.css';  
import 'mdbreact/dist/css/mdb.css';
import './user_page.css';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import Friends from '../../components/tables/friends';
import Polar_Chart from '../../components/polar_chart/polar_chart';
const friends = [[<img class="col-md-2 ava rounded-circle link-dark  " src="/images/ava.jpg"/>,"Username1"],
    [<img class="col-md-2 ava rounded-circle link-dark " src="/images/ava.jpg" />, "Username2"],
    [<img class="col-md-2 ava rounded-circle link-dark " src="/images/ava.jpg" />,"Username3"],
    [<img class="col-md-2 ava rounded-circle link-dark " src="/images/ava.jpg" />,"Username4"],
    [<img class="col-md-2 ava rounded-circle link-dark " src="/images/ava.jpg" />,"Username5"]];
const genres = ["Genre1", "Genre2", "Genre3", "Genre4", "Genre5"];
const songs=["Song1-Artist1", "Song2-Artist2", "Song3-Artist3","Song4-Artist4", "Song5-Artist5"]


const My_Page = () => {
    return (
        <div class="col-md-12 standart">
       <div class="top sticky-top ">
          <Header />  
          </div>
            <div class="top back">
                {/* <img src="/images/Wave_Violet_top_right_shape_1.png" /> */}
                <img src="/images/Violet_top_left_wave_1.png" />
        </div>
                <body class="col-md-12 left violet_back body w-100 ">
                    <div class="col-md-8 column canva ">
                        <h4 class=" col-md-8  heading personal_data">Manuella_Tarly</h4>
                        <div class="row location">
                        <i class=" col-md-1 fa-2x sign" ><ImLocation /></i>
                        <h1 class="col-md-7 location_name">Los-Angles, USA</h1>
                        </div>
                    <div class="col-md-8 left ">
                        <img src="/images/ava.jpg" class="img-fluid rounded-circle  link-dark w-50" />
                        <a href="#" role="button" class=" edit col-md-4 text-capitalize btn "><RiUserFollowLine /> Follow back </a>
                        <a href="#" role="button" class=" edit col-md-4 text-capitalize btn "><RiChat1Line/> Send a message </a>
                    </div>
                    </div>
            {/* </div>   */}
            </body >
            {/* <div class="col-md-12 right yellow_back body w-100"> */}

             <body class="col-md-12 right yellow_back body w-100">
            <div class="bottom back switch_1">
                <img   src="/images/Wave_Violet_bottom_right_shape_1.png" />
            <div class="col-md-8 column canva ">
                <h1 class="col-md-8 heading favorites">Favorites</h1>


                 <div class="col-md-8 table_1 ">                

                <nav class=" col-md-12  ">
                    <div class="nav w-100 title nav-tabs" id="nav-tab" role="tablist">
                        <button class="col-md-6 nav-link " id="nav-songs-tab" data-bs-toggle="tab" data-bs-target="#nav-songs" type="button" role="tab" aria-controls="nav-songs" >Favorited songs</button>
                        <button class=" col-md-6  nav-link  " id="nav-friends-tab" data-bs-toggle="tab" data-bs-target="#nav-friends" type="button" role="tab" aria-controls="nav-friends" >Friends</button>
                    </div>
                </nav>
                <div class="col-md-12 tab-content" >
               
                        <div class="col-md-12  tab-pane fade show active" id="nav-friends" role="tabpanel" aria-labelledby="nav-friends-tab">
                                     
                
                            <div class="w-100 list-group-item list">
                                {friends.slice(0, friends.length).map((item, index) => {
                                    
                                    return (<div class="col-md-12 row ">
                                        <a href="/user/#" class="col-md-12  element ">{item[0]}<h4 class="col-md-8 username">{item[1]}</h4></a><button type="button" class=" col-md-4 right delete btn-close" aria-label="Close"></button>
                                    </div>
                                
                                )})} 
                                </div>
                        
                                </div>
                                         <div class="col-md-8  tab-pane fade " id="nav-songes" role="tabpanel" aria-labelledby="nav-songs-tab">
                        
                            <div class="w-100 list-group-item list">
                        {songs.map((item, index) => {
                            return (
                                <div class="col-md-12 row ">
                                    <h4 class="w-100  element songs" href="/{items}">{item}</h4></div>) 
                                          })}
                        </div>
                                     
                                         
                        </div>
                                
                    </div>
    </div></div>
</div>
            </body>
            
        <body class="col-md-12 left violet_back body pt-0 w-100">
            <div class="top back switch_2">
                <img   class="" src="/images/Wave_Violet_top_right_shape_1.png" />
                <div class="col-md-8 column violet_back canva ">
                        <h1 class="col-md-6 title  heading pref">Music preferences</h1>
                        <div class="col-md-6 table_2 ">                

                            <nav class=" col-md-12  ">
                                <div class="nav w-100 nav-tabs" id="nav-tab" role="tablist">
                                    <button class="col-md-12 nav-link " id="nav-geners-tab" data-bs-toggle="tab" data-bs-target="#nav-genres" type="button" role="tab" aria-controls="nav-genres" >Genres</button>
                                </div>
                            </nav>
                            <div class="col-md-12 tab-content" >
                                <div class="col-md-8  tab-pane fade show active" id="nav-genres" role="tabpanel" aria-labelledby="nav-genres-tab">
                                
                                    <div class="w-100 list-group-item list">
                                        {genres.map((item, index) => {
                                            return (
                                                <div class="col-md-12 row w-100 ">
                                                    <h4 class="col-md-12 w-100 element genre" href="/{items}">{item}</h4>
                                                </div>) 
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>

                </div>  
            </div>
            </body>
            <div class="bottom back">
        <img src="/images/Wave_Violet_bottom_right_shape_11.png" />
        </div>
        
           
{/* <Friends/> */}
        <div class="bottom">
          <Footer /> 
        </div>
     </div>
     );
};

export default My_Page;