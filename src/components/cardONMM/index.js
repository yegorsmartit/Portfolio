import React from 'react';
import './styleONMM.css';
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const CardONMM = (props)=> {
  const { img, title, technologies, control, process, imgTitle } = props;

  let orientationImageClass = '';

  let imgObj = new Image();
  imgObj.src= img;
  if(imgObj.height < imgObj.width) {
    orientationImageClass = 'orientationImageClass';
  }

  const OnMouseEnterListener = (event) => {

    const centerHeight = event.nativeEvent.path[0].offsetHeight/2;
    const centerWidth = event.nativeEvent.path[0].offsetWidth/2;
    event.nativeEvent.path[0].style.transitionDuration = '0.5s';
    event.nativeEvent.path[0].style.transform =
      `rotateX(${-( event.nativeEvent.offsetY - centerHeight ) /10}deg) 
      rotateY(${( event.nativeEvent.offsetX - centerWidth ) /10}deg)`;

    event.nativeEvent.path[1].style.transitionDuration = '0.5s';
    event.nativeEvent.path[1].style.transform =
      `rotateX(${-( event.nativeEvent.offsetY - centerHeight ) /10}deg) 
      rotateY(${( event.nativeEvent.offsetX - centerWidth ) /10}deg)`;
  };

  const OnMouseLeaveListener = event => {
    event.nativeEvent.path[0].style.transform = `rotate(0deg)`;
    event.nativeEvent.path[0].style.transitionDuration = `0.5s`;

    event.nativeEvent.path[1].style.transform = `rotate(0deg)`;
    event.nativeEvent.path[1].style.transitionDuration = `0.5s`;
  };

  return (
    <div className="common_ONMM_card_container">
      <div className="card_container" >
        <div className="cardONMM_container_info" >
          <div className="cardONMM_title_container" >
            <span className="cardONMM_title" >{title}</span>
          </div>
          <div className="cardONMM_description_p" >
            <img className={ `${ orientationImageClass === '' ? 'cardONMM_img ': 'orientationImageClass'}  `} src={img} alt="project image" />
            <span className="cardSpanTopic"> technologies </span>
            <span className="cardSpanText">{technologies} </span>
            <br/>
            <span className="cardSpanTopic">control: </span>
            <br/>
            <span className="cardSpanText">{control}</span>
            <br/>
            <span className="cardSpanTopic">process: </span>
            <br/>
            <span className="cardSpanText">{process}</span>
          </div>
          <span className="cardONMM_link" >Подробенее</span>
        </div>
        <Link className="card_container_transparent" onMouseMove={ (event)=> OnMouseEnterListener( event ) }
             onMouseOut={ event => OnMouseLeaveListener(event) } to={`/project/:${imgTitle}`} />
      </div>
    </div>
  )

};

CardONMM.defaulProps = {

};

CardONMM.propsTypes = {

};

const mapDispatchToProps = dispatch => ({});

const mapStateToProps = store => ({});

export default connect( mapStateToProps, mapDispatchToProps)(CardONMM)
