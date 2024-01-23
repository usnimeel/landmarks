import React from 'react';
import './LandmarkRow.css';

const LandmarkRow = (props) => {
    return(
        <div className='row' id={props.key}>
            <img src={process.env.REACT_APP_DEV_BASE_URL + `/images/${props.imageName}@2x.jpg`} alt={props.imageName}/>
            <div className='row-name'>{props.name}</div>
            <div className='divider'></div>
        </div>
    );
}

export default LandmarkRow