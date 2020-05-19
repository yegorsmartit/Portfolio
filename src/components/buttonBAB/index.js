import React from 'react';
import './BABstyle.css';
import { connect } from "react-redux";

function ButtonBAB(props) {
  const { onClick, title, icon } = props;
  const clickHandler = ()=>{
    console.log('this is from bab button');
    onClick()
  };

  return (
    <div style={{ display: 'flex'}}>
      <a href="#" className="button_BAB_a" onClick={clickHandler}>
        <span className="button_BAB_span"/>
        <span className="button_BAB_span"/>
        <span className="button_BAB_span"/>
        <span className="button_BAB_span"/>
        <i className={`${icon} icon_buttonBAB`}/>
        {title}
      </a>
    </div>
  )
}

const mapStateToProps = store => ({
  user: store.user,
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapDispatchToProps, mapStateToProps)(ButtonBAB)
