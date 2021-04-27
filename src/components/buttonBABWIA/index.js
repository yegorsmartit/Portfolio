import React from 'react';
import './BABWIAstyle.css';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

function ButtonBABWIA(props) {
  const {  title, icon, path, titleButton } = props;

  const clickHandler = () =>{
    console.log('this is from babwia button', path);
    // onClick();
  };

  return (
    <div style={{ display: 'flex'}}>
      <Link to={ `${path}` } className="button_BABWIA_a" id={`button_BABWIA_a${title}`} onClick={clickHandler()}>
        <span className="button_BABWIA_span"/>
        <span className="button_BABWIA_span"/>
        <span className="button_BABWIA_span"/>
        <span className="button_BABWIA_span"/>
        <i className={`${icon} icon_buttonBABWIA`}/>
        {titleButton}
      </Link>
    </div>
  )
}

const mapStateToProps = store => ({
  user: store.user,
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapDispatchToProps, mapStateToProps)(ButtonBABWIA)
