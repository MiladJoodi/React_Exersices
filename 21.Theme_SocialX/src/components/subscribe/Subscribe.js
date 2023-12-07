import React,{useEffect} from 'react';
import { TiSocialGooglePlus } from "react-icons/ti";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import './Subscribe.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Subscribe = () => {

  useEffect(()=>{
    AOS.init({
      duration: 1000
    });
  },[])


  return (
    <section id='subscribe'>
      <div className='container subscribe' data-aos="fade-up">
        <h2>حالا مشترک شوید</h2>
        <form>
          <button>مشترک شدن</button>
          <input type="text" placeholder='ایمیل خود را وارد کنید' />
        </form>

        <div className='socials'>
          <div className="social-icon">
            <FaFacebookF />
          </div>
          <div className="social-icon">
            <TiSocialGooglePlus />
          </div>
          <div className="social-icon">
            <FaTwitter />
          </div>
          <div className="social-icon">
            <FaInstagram />
          </div>
        </div>

      </div>
    </section>
  )

    ;
};

export default Subscribe;
