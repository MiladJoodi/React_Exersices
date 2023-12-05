import React from 'react';
import './Features.css'
import { BsFillBookmarkCheckFill } from "react-icons/bs";
import phoneFeatures from "../../assets/phone-features.png"
import {FeaturesList} from './data.js'
import { BsHexagon } from "react-icons/bs";


const Features = () => {
  return (
    <section className='features'>
      <div className="container features">
        <div className='title'>
          <BsFillBookmarkCheckFill color='orangered' size="30" />
          <h2>ویژگی های اصلی</h2>
          <p>ویژگی های منحصر به فرد را اینجا تجربه کنید</p>
        </div>
        <div className='features-content'>
            <div className='features-right'>
              <img src={phoneFeatures} />
            </div>
            <div className="features-left">
              {
                FeaturesList.map(feature => (
                  <div className="feature" key={feature.id}>
                    <div className='feature-icon'>
                      <BsHexagon color='#fc5412' size={55} />
                      <div className='inner-icon'>{feature.icon}</div>
                    </div>
                    <div className='feature-text'>
                      <h2>{feature.heading}</h2>
                      <p>{feature.text}</p>
                    </div>
                  </div>
                )
                  
                )
              }
            </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
