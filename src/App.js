import logo from './logo.svg';
import React, { Component } from 'react';
import './common/Header.css';
import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css';

import ReactLogo from './assets/logo.svg';
import Img1 from './assets/1.jpg';
import Img2 from './assets/2.jpg';
import Img3 from './assets/3.jpg';
import Img4 from './assets/4.jpg';
import Img5 from './assets/5.jpg';
import Img6 from './assets/6.jpg';
import Img7 from './assets/7.jpg';
class App extends Component {
  render() {

    return(
        
      <div>
          <div className="headingdiv">  
           
          <img className="headerimg" src={ReactLogo} alt="React Logo" />
          <button className="headerBtn">Login</button> 
           
          </div>
          <div>
            <p>Back to Home</p>
          </div>
          
        <div className='findMovied'>
          <div class="middleBanner"><img src={Img1} alt="Image " /></div>
          <div class="middleBanner">
              <h2>Inception</h2>
              <p><b>Genre:</b> Action, Adventure, Sci-Fi</p>
              <p><b>Duration:</b> 148</p>
              <p><b>Release Date:</b> Fri Jul 16 2010</p>
              <p><b>Rating:</b> 8.8</p>
              <br />
              <p><b>Plot:</b> <a href=''>A Thief, who steals corporate secrets  through the use of dream-sharing technology, is given  the inverse task of planing an idea into the mind of CEO</a></p>
              <br />
              <p><b>Trailer:</b></p>



          </div>
          <div class="middleBanner">
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span></div>
        </div>
        <div className='findMovied1'>
          <p>FIND MOVIES BY</p>
        <form action="#"> 
        <table>
          <tr>
            <td><input type="text" name="name" value="" /></td>
          </tr>
          <tr>
            <td>
              <select name = "dropdown">
                  <option value = "Genres" selected>Genres</option>
                  <option value = "Genres" >Romance</option>
                  <option value = "Genres" >Horror</option>
                  <option value = "Genres" >action</option>
                  <option value = "Genres" >Crime</option>
                  <option value = "Genres" >Thriller</option>
                  <option value = "Genres" >Policical</option>
                  <option value = "Genres" >Social</option>
                  <option value = "Genres" >Fantacy</option>
                  <option value = "Genres" >Suspence</option>
                  <option value = "Genres" >Adventure</option>

              </select></td>
          </tr>
          <tr>
            <td>
              <select name = "dropdown">
                  <option value = "Physics">Manisha Koirala</option>
                  <option value = "Genres" >Rajkumar Hirani</option>
                  <option value = "Genres" >Marlon Brando</option>
                  <option value = "Genres" >Leorando DiCaprio</option>
                  <option value = "Genres" >Anne Hathway</option>
                  <option value = "Genres" >Kay Kay Menon</option>
                  <option value = "Genres" >Policical</option>
                  <option value = "Genres" >Anthony LaPag</option>
              </select></td>
          </tr>
          <tr>
            <td>
              
          <input type="date" id="birthday" name="birthday" /></td>
          </tr>
          <tr>
            <td>
              
          <input type="date" id="birthday" name="birthday" /></td>
          </tr>
        </table>
          
          
        </form>
        </div>
        </div>
        
    );

  }
}

export default App;
