import React, {Fragment} from 'react';
import './styleLoader.css';

const BubbleLoader = ()=>{
  return (
    <div className="loaderContainer">
      <div className="bubbleLoaderContainer">
        <span style={{"--i":1}}/>
        <span style={{"--i":2}}/>
        <span style={{"--i":3}}/>
        <span style={{"--i":4}}/>
        <span style={{"--i":5}}/>
        <span style={{"--i":6}}/>
        <span style={{"--i":7}}/>
        <span style={{"--i":8}}/>
        <div className="liquidDiv"><span></span></div>
      </div>
      <div className="loadingContainer">
        <span style={{"--i":1}}>L</span>
        <span style={{"--i":2}}>O</span>
        <span style={{"--i":3}}>A</span>
        <span style={{"--i":4}}>D</span>
        <span style={{"--i":5}}>I</span>
        <span style={{"--i":6}}>N</span>
        <span style={{"--i":7}}>G</span>
      </div>
      {/*<p style={{ color: 'orange', fontSize: 34}}>loading</p>*/}
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

export default BubbleLoader;
