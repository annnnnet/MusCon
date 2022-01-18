import React from "react";
import Carousel from 'nuka-carousel';
import "./news_output.css";
import '../../basic.css';

var post_args={
    user_avatar: require("../../pics/singer.jpg"),
    username:"username",
    title:"title",
    genre:"music",
    news_text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    news_pics:[require("../../pics/singer.jpg"), require("../../pics/back.jpg"), require("../../pics/g_logo.jpg")]
}

function News_output () {
  return (     
    <div className="post"><div className="flexy">
    <img className="post_user_logo" src={post_args.user_avatar} />
    <p className="post_username">{post_args.username}</p>
    <p className="post-genre">{post_args.genre}</p>
  </div>
  <hr/>          
    <p className="post_title">{post_args.title}</p>
    
  <p className="post_text">{post_args.news_text}</p>   
  <div className="post_carousel">     
  <Carousel 
  heightMode="first"
  initialSlideHeight="100"
  renderCenterLeftControls={({ previousSlide }) => (
    <button onClick={previousSlide} className="post_left_right">
     &lt;
    </button>
  )}
  renderCenterRightControls={({ nextSlide }) => (
    <button onClick={nextSlide} className="post_left_right">
      &gt;
    </button>
  )}>
  {post_args.news_pics.map((pic, index) => {return (<div className="inner_carousel"><img className="post_carousel_img" src={pic} /></div>)})}
  </Carousel>    
  </div>
</div>
  );
}
export default News_output;



