import React from 'react';
import './Features.css'
import { BsFillBookmarkCheckFill } from "react-icons/bs";


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

      </div>
    </div>
  </section>
  );
};

export default Features;
