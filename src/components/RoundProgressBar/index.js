import React, {useEffect} from 'react';
import './roundProgressBarStyle.css';

const RoundProgressBar = props =>{
  const { percents, skill, index } = props;

  useEffect(()=>{
     let element1 = document.querySelector(`#progress_bar_thumb_id${index}`).style;
     let element2 = document.querySelector(`#progress_bar_thumb_id2${index}`).style;
     let element3 = document.querySelector(`#progress_bar_thumb_id3${index}`).style;
     const viewPercents = percents * 2 - 10;

    element1.setProperty('--percents', viewPercents );
    element2.setProperty('--percents', viewPercents );
    element3.setProperty('--percents', viewPercents );

   },[percents]);


  return (
      <div className="progress_bar_container">
        <div className="logo">
          <h1 className="progress_bar_h1">{skill}</h1>
          <hr />
          <h2 className="progress_bar_h2">progress</h2>
        </div>
        <div className="progress-container">
          <svg className="progressBar" viewBox="0 0 64 64">
            <defs>
              <clipPath id="progress_mask">
                <path d="M29 63.35h-.15a31.55 31.55 0 0 1-28.2-28.2 1.5 1.5 0 0 1 3-.3 28.56 28.56 0 0 0 25.5
                  25.51 1.5 1.5 0 0 1-.15 3zM35 63.35a1.5 1.5 0 0 1-.15-3 28.56 28.56 0 0 0 25.52-25.5 1.5 1.5 0 0 1 3 .3
                   31.55 31.55 0 0 1-28.2 28.19zM2.14 30.5H2a1.5 1.5 0 0 1-1.35-1.65A31.56 31.56 0 0 1 28.85.66a1.5 1.5 0 0 1
                   .3 3A28.56 28.56 0 0 0 3.63 29.15a1.5 1.5 0 0 1-1.49 1.35zM61.86 30.5a1.5 1.5 0 0 1-1.49-1.35A28.56 28.56 0
                   0 0 34.85 3.64a1.5 1.5 0 1 1 .3-3 31.56 31.56 0 0 1 28.2 28.19A1.5 1.5 0 0 1 62 30.49z"
                />
              </clipPath>
            </defs>
            <g clipPath={"url(#progress_mask)"} >
              <circle  className="progress_bar_track" cx="50%" cy="50%" r="30px"/>
              <circle id={`progress_bar_thumb_id3${index}`} className="progress_bar_thumb progress_bar_thumb1" cx="50%" cy="50%" r="30px"/>
              <circle id={`progress_bar_thumb_id2${index}`} className="progress_bar_thumb progress_bar_thumb2" cx="50%" cy="50%" r="30px"/>
              <circle id={`progress_bar_thumb_id${index}`} className="progress_bar_thumb progress_bar_thumb3" cx="50%" cy="50%" r="30px"/>
            </g>
          </svg>
          <div className="progress-content">
            <div className="progress_value">{percents}% </div>
            <div className="progress_text">well done</div>
          </div>
        </div>
      </div>
  )
};

export default RoundProgressBar;
