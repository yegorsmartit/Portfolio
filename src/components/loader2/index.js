import React, {Fragment} from 'react';
import './styleLoader2.css';

const BubbleLoader2 = ()=>{
  return (
    <div className="loaderContainer2">
      <div className="bubbleLoaderContainer2">
        <span style={{"--i":1}}/>
        <span style={{"--i":2}}/>
        <span style={{"--i":3}}/>
        <span style={{"--i":4}}/>
        <span style={{"--i":5}}/>
        <span style={{"--i":6}}/>
        <span style={{"--i":7}}/>
        <span style={{"--i":8}}/>
      </div>
      <svg>
        <filter id="startLoaderId" >
          <feGaussianBlur in="SourceGraphic" stdDeviation="12" />
          <feColorMatrix values="
          1 0 0 0 0
          0 1 0 0 0
          0 0 1 0 0
          0 0 0 20 -10
          "/>
        </filter>
      </svg>
    </div>
  )
};

export default BubbleLoader2;
