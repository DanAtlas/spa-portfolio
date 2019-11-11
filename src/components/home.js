import React from 'react';
import Jelly from './jelly';
import man from '../img/man.svg'

const Home = (props) => (
  <div className="main-content home-content">
    <span className="profile wow zoomIn" data-wow-delay=".5s">
      Hello there!
      <br/>I'm&nbsp;
      <Jelly>
        {hovered => 
          <div className={hovered ?  "animated rubberBand" : ""}>
            <span className="myname">Dias Abishev</span>
          </div>
        }
      </Jelly>
      ,
      <br/>Front-end developer
    </span>
    <div className="home-content-img">
      <img src={man} alt="man"/>
    </div>
  </div>    
);

export default Home;