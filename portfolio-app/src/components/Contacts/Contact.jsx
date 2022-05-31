import './Contact.css';
import { AiOutlineYoutube } from 'react-icons/ai';
import { AiOutlineWhatsapp } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';

const Contact = () => {
  return (
    <div className="container contact-container">
      <h1>Contact me</h1>
      <div className="contact-links">
        <a href="" className="contact youtube">
          <AiOutlineYoutube className="icon" />
          <h2>
            youtube <span>Creative Ambition</span>
          </h2>
        </a>

        <a href="" className="contact whatsapp">
          <AiOutlineWhatsapp className="icon" />
          <h2>
            whatsapp <span>+00 000 00000-0000</span>
          </h2>
        </a>

        <a href="" className="contact instagram">
          <AiOutlineInstagram className="icon" />
          <h2>
           instagram <span>_Creative_Ambition_</span>
          </h2>
        </a>
        
      </div>
    </div>
  );
}

export default Contact;