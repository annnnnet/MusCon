import React from 'react';
import { ImLocation } from '../../../node_modules/react-icons/im';
import { RiUserFollowLine } from '../../../node_modules/react-icons/ri';
import { RiChat1Line} from '../../../node_modules/react-icons/ri';

import "../../index.css";
import "../../basic.css";
import '@fortawesome/fontawesome-free/css/all.min.css';  
import 'bootstrap-css-only/css/bootstrap.min.css';  
import 'mdbreact/dist/css/mdb.css';
import './user_page.css';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import Friends from '../../components/tables/friends';
import Polar_Chart from '../../components/polar_chart/polar_chart';
const friends = [[<img class="col-sm-2 ava rounded-circle  " src="/images/ava.jpg"/>,"Username1"],
    [<img class="col-sm-2 ava rounded-circle  " src="/images/ava.jpg" />, "Username2"],
    [<img class="col-sm-2 ava rounded-circle  " src="/images/ava.jpg" />,"Username3"],
    [<img class="col-sm-2 ava rounded-circle  " src="/images/ava.jpg" />,"Username4"],
    [<img class="col-sm-2 ava rounded-circle  " src="/images/ava.jpg" />,"Username5"]];
const genres = ["Genre1", "Genre2", "Genre3", "Genre4", "Genre5"];
const songs=["Song1-Artist1", "Song2-Artist2", "Song3-Artist3","Song4-Artist4", "Song5-Artist5"]


const User_Page = () => {
    return (
        <div class="background standart">
       <div class=" sticky-top ">
          <Header />  
            </div>
              <div className="content">
           
                <img class="wavy" src="/images/Violet_top_left_wave_1.png" />
                <div class="my_page_wavy_content">
                

                <div class="left violet_back body ">
                    <div class=" col-sm-8 canva ">
                        <h4 class=" col-sm-8  heading personal_data">Manuella_Tarly</h4>
                        <div class="row location">
                        <i class=" col-sm-1 fa-2x sign_loc" ><ImLocation /></i>
                        <h1 class="col-sm-7 location_name">Los-Angles, USA</h1>
                        </div>
                    
                         <div class="col-sm-10 ava_reg canva ">
                        <img src="/images/ava.jpg" class="col-sm-12 rounded-circle" />
                        <a href="#" role="button" class=" edit col-sm-8 text-capitalize btn "><RiUserFollowLine /> Follow back </a>
                        <a href="#" role="button" class="edit col-sm-8 text-capitalize btn "><RiChat1Line/> Send a message </a>
                    </div>
                    </div>
            </div >


             <div class=" right yellow_back body">
            <div class="bottom switch_1">
                <img   src="/images/Wave_Violet_bottom_right_shape_1.png" />
                <div class="col-sm-12 canva ">
                                
                    <h1 class="col-sm-8 heading  favorites">Favorites</h1>

                    <div class="col-sm-8 table_1">                

                        <nav class=" col-sm-12  ">
                            <div class="nav title nav-tabs" id="nav-tab" role="tablist">
                                <button class="col-sm-6 nav-link" id="nav-songs-tab" data-bs-toggle="tab" data-bs-target="#nav-songs" type="button" role="tab" aria-controls="nav-songs" >Favorited songs</button>
                                <button class=" col-sm-6  nav-link  " id="nav-friends-tab" data-bs-toggle="tab" data-bs-target="#nav-friends" type="button" role="tab" aria-controls="nav-friends" >Friends</button>
                            </div>
                        </nav>
                        <div class="col-sm-12 tab-content" >
                    
                                        
                            <div class="col-sm-8  tab-pane fade  " id="nav-friends" role="tabpanel" aria-labelledby="nav-friends-tab">
                                <div class="list-group-item list">
                                    {friends.slice(0, friends.length).map((item, index) => {
                                        
                                        return (<div class="col-sm-12 row ">
                                            <a href="/user/#" class="col-sm-12  element ">{item[0]}<h4 class="col-sm-10 username">{item[1]}</h4></a><button type="button" class=" col-sm-2 right delete_1 btn-close" aria-label="Close"></button>
                                        </div>
                                    
                                    )})} 
                                </div>
                            
                            </div>
                            <div class="col-sm-8 tab-pane fade show active" id="nav-songs" role="tabpanel" aria-labelledby="nav-songs-tab">
                            
                                <div class="list-group-item list">
                                {songs.map((item, index) => {
                                    return (
                                        <div class="col-sm-12 row ">
                                            <h4 class="col-sm-10 element song" href="/{items}">{item}</h4><button type="button" class=" col-sm-2 left add btn"><i class="col-sm-2 left fas fa-plus "></i></button></div>) 
                                                })}
                                </div>
                            </div>
                            </div>
    </div></div>
</div>
            </div>
            
        <div class="left violet_back body">
            <div class="bottom switch_2">
                <img   class="" src="/images/Wave_Violet_top_right_shape_1.png" />
                            <div class="col-sm-12 canva ">
                        <h1 class="col-sm-8 heading pref">Music preferences</h1>
                        <div class="col-sm-8 table_2 ">                

                            <nav class=" col-sm-12  ">
                                <div class="nav title nav-tabs" id="nav-tab" role="tablist">
                                    <button class="col-sm-12 nav-link " id="nav-geners-tab" data-bs-toggle="tab" data-bs-target="#nav-genres" type="button" role="tab" aria-controls="nav-genres" >Genres</button>
                                </div>
                            </nav>
                            <div class="col-sm-12 tab-content" >
                                <div class="col-sm-8  tab-pane fade show active" id="nav-genres" role="tabpanel" aria-labelledby="nav-genres-tab">
                                
                                    <div class="list-group-item list">
                                        {genres.map((item, index) => {
                                            return (
                                                <div class="left col-sm-12 row  ">
                                                    <h4 class="col-sm-10 element genre" href="/{items}">{item}</h4><button type="button" class=" col-sm-2 right add btn" ><i class="col-sm-2 left fas fa-plus "></i></button>
                                                </div>) 
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>

                </div>  
            </div>
            </div>
            </div>
            <div class="bottom ">
        <img src="/images/Wave_Violet_bottom_right_shape_11.png" />
        </div>
        
           </div>
        <div>
          <Footer /> 
        </div>
     </div>
     );
};

export default User_Page;

