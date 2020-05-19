import React from 'react';
import './BOCstyle.css';
import { connect } from "react-redux";
let switchActiveClass = false;
let activeClass = '';


function ButtonBOC(props) {
  const { onClick, title, icon } = props;


  const onMouseClickHandler = () =>{
    onClick();
    console.log('this is from boc button');
    // setActive(!switchActiveClass);
    switchActiveClass = !switchActiveClass;

    if(switchActiveClass) {
      activeClass = 'activeClass';
    }else{
      activeClass = '';
    }

  };

  return (
    <div style={{ display: 'flex'}}>
      <a href="#" className= {`button_BOC_a ${activeClass}`} onClick={ onMouseClickHandler }>
        <span className="button_BOC_span"/>
        <span className="button_BOC_span"/>
        <span className="button_BOC_span"/>
        <span className="button_BOC_span"/>
        <span className="button_BOC_span"/>
        <span className="button_BOC_span"/>
        <span className="button_BOC_span"/>
        <span className="button_BOC_span"/>
        <i className={`${icon} icon_buttonBOC`}/>
        { title }
      </a>
    </div>
  )
}

const mapStateToProps = store => ({
  user: store.user,
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapDispatchToProps, mapStateToProps)(ButtonBOC)
