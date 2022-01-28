import React, { Component, useState } from 'react';
import 'react-dropzone-uploader/dist/styles.css'
import './postcreate.css';
import '../../basic.css';
import Dropzone from 'react-dropzone-uploader'
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';

var args={
    user_avatar: require("../../pics/singer.jpg"),
    username:"username",
}

var genres =["-", "pop", "rock", "folk", "ballad"];

const genresopt = genres.map((genre, index) => {
      return <option key={index}>{genre}</option>;
});

const PostCreate = () => {
  const getUploadParams = () => {
    return { url: 'https://httpbin.org/post' }
  }

  const handleChangeStatus = ({ meta }, status) => {
    console.log(status, meta)
  }

  const handleSubmit = (files, allFiles) => {
    console.log(files.map(f => f.meta))
    allFiles.forEach(f => f.remove())
  }

  return (
    <div>
    <div class="top sticky-top ">
          <Header />  
          </div>
    <div className="yellow_top_wave">
        <form className="post_create_form">
        <div className="flexy">
        <img className="post_user_logo" src={args.user_avatar} />
        <p className="post_username">{args.username}</p> 
        <button className="post_it">Post it!</button>
        </div>
         <div className="post_create">
            <label for="title">Post title:</label>
            <br/>
          <input type="text" name="title" required/>
          <br/>
          <label for="text">Post text:</label>
          <br/>
          <textarea className="post_create_text" type="text" name="text" required/>
          <br/>
          <label for="genre">Choose genre:</label>
          <br/>
          <select name="genre" required>
          {genresopt}
          </select > 
          <div class="select-arrow"></div> 
          <br/>
    <Dropzone
    className="dropzone"
      getUploadParams={getUploadParams}
      onChangeStatus={handleChangeStatus}
      onSubmit={handleSubmit}
      accept="image/*"
      inputContent={'Choose images'}      
    />
    </div>   
     
  </form> 
  </div>
  <div className="yellow_bottom_wave"><img src={require("../../pics/white_bottom_wave_01.png")}/></div>

    <Footer/>
  </div>
  )
}

export default PostCreate;