import React from 'react';
import './CircleImage.css';

const CircleImage = (props) => {
  return (
    <div className='landmark-image'>
      <img src={process.env.REACT_APP_DEV_BASE_URL + '/images/turtlerock@2x.jpg'} alt='img'/>
    </div>
  );
};
export default CircleImage;