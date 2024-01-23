import React from 'react';
import './LandmarkDetail.css';
import CircleImage from './CircleImage';
import MapView from './MapView';

const LandmarkDetail = (props) => {

  return (
    <div>
      <MapView/>
      <CircleImage/>
      <div className='detail'>
        <div className='information'>
          <div className='name'>{props.name}</div>
          <div>
            <div className='park'>{props.park}</div>
            <div className='state'>{props.state}</div>
          </div>
        </div>
        <div className='divider'></div>
        <div className='description'>
          <div className='about'>About Turtle Rock</div>
          <div className='text'>Descriptive text goes here.</div>
        </div>
      </div>
    </div>
  );
};
export default LandmarkDetail;