import React from 'react';
import './MapView.css';

const MapView = (props) => {
  const ifameData = document.getElementById("iframeId")
  // var lat = 34.011_286;
  // var lon = -116.166_868;
  // ifameData.src=`https://maps.google.com/maps?q=${lat},${lon}&hl=es;&output=embed`
  return (
    <div>
        <iframe id="iframeId"></iframe>
    </div>
  );
};

export default MapView;