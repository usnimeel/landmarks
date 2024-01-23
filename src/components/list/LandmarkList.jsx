import React, {useState, useEffect} from 'react';
import './LandmarkList.css';
import LandmarkRow from './LandmarkRow';

const LandmarkList = (props) => {
    const [landmarks, setLandmarks] = useState([]);

    useEffect(() => {
        fetch('/landmarkData.json', {
            method: "GET"
        })
        .then(res => res.json())
        .then(data => {
            setLandmarks(data)
            console.log(data)
        })
        .catch(err => console.error(err))
    }, []);

    return(
        <div>
            <div className='landmark-list-title'>
                Landmarks
            </div>
            <div className='landmark-list'>
                {landmarks.map((landmark) => (
                    <LandmarkRow key={landmark.key} imageName={landmark.imageName} name={landmark.name}/>
                ))}
            </div>
        </div>
    );
}

export default LandmarkList