import React from 'react';
import './stylePostal.css';
// import mapStateToProps from "react-redux/es/connect/mapStateToProps";
// import mapDispatchToProps from "react-redux/es/connect/mapDispatchToProps";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

const CardPostal = (props) => {
  const { img, title, technologies, control, process } = props;
  return (
    <div className="card_postal_container">
      <div className="card_postal">
        <div className="img_box">
          <img className="card_postal_img" src={img} alt="card_logo"/>
          <span className="cardPostal_link">{title}</span>
        </div>
        <div  className="card_postal_details">
          <div className="card_postal_details_inner">
            <div style={{ flex: 1 }}>
              <span className="innerPostalTitle">{title}</span>
            </div>
            <div className="card_postal_details_characteristics">
              <span className="cardSpanTopic"> technologies: </span>
              <span className="cardSpanText">{technologies} </span>
              <span className="cardSpanTopic">control: </span>
              <span className="cardSpanText">{control}</span>
              <span className="cardSpanTopic">process: </span>
              <span className="cardSpanText">{process}</span>
            </div>
            <div style={{ flex: 1 }}>
              <span className="cardONMM_link">Подробенее</span>
            </div>
          </div>
        </div>


      </div>
    </div>
  )
};

const mapStateToProps = store => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(CardPostal)
