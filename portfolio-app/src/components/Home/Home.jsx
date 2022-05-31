import './Home.css';
import img from '../props/img2.jpg';
import {BsMouse} from 'react-icons/bs';
import { useState } from 'react';
import Button from '../Button/Button';

const Home = () => {
  const [isActive, setIsActive] = useState(false);
  return(
    <div id="home" className="container home-container">
      <div className="logo">
        <div className={isActive ? 'main-img active' : 'main-img'} onClick={(prevState) => setIsActive(prevState === true ? false : true)}>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
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
        <p>lorem ipsum dolor sit amet, consectetur adipiscing elorem lorem, sed do eiusmod tempor incididunt ut labore lorem. Ut enim ad
          lorem ipsum dlorem ipsum dolor SiInternetexplorerlore
        </p>
      </h2>

      <Button />
    </div>  
  );
}

export default Home;