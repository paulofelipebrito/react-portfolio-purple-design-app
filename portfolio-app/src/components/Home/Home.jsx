import './Home.css';
import img from '../props/img2.jpg';
import {BsMouse} from 'react-icons/bs';
import { useState } from 'react';
import Button from '../Button/Button';
import html from '../props/html.png';
import css from '../props/css.png';
import js from '../props/js.jpg'; 
import bootstrap from '../props/bootstrap.png'; 
import react from '../props/react.png'; 
import kotlin from '../props/kotlin.png'; 
import c from '../props/c-plus-plus.png'; 
import c2 from '../props/../props/c-sharp.png'; 

const Home = () => {
  const [isActive, setIsActive] = useState(false);
  return(
    <div id="home" className="container home-container">
      <div className="logo">
        <div className='hover-show'>
          <div className="circle"/>
          <div className="circle"/>
          <div className="circle"/>
          <div className="circle"/>
          <div className="circle"/>
          <div className="circle"/>
          <div className="circle"/>
          <div className="circle"/>
        </div>

        <img src={img} alt="" />
      </div>

      <a href="#footer" className="scroll-down">
        <hr />
        <h5>Scroll down</h5>
        <BsMouse className="scroll"/>
        <hr />
      </a>

      <h2>
        <span>About Me</span> <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis id
          quos deserunt, maxime sint sunt tempore quidem ad praesentium itaque,
          aspernatur, magnam culpa iste adipisci?
        </p>
      </h2>

      <Button />
    </div>  
  );
}

export default Home;