import React from 'react';
import PropTypes from 'prop-types';
import style from './style.css';
import { connect } from "react-redux";
import { setUser } from "../../actions/user";

function ButtonWBG( props ) {
  const { title } = props;
  console.log(props, "sdlfkajs;dlfkjsf", title);

  const onClickButton = () =>{
    const { onClick } = props;
    console.log('this is from on click button handler in buttonBWG');
    onClick();
  };

  return (
    <div>
      <a href="#" className="border_container" onClick={ onClickButton }><span> { title } </span></a>
    </div>
  )
}

ButtonWBG.defaultProps = {
  button: null,
  onClick: function () {
    console.log('default console in buttonBWG');
  },
};

ButtonWBG.propTypes = {
  setButton: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

const mapStateToProps = store => ({
  button: store.button,

});

const mapDispatchToProps = dispatch => ({
  setButton: data => dispatch(setUser(data)),

});

export default connect(mapDispatchToProps, mapStateToProps )(ButtonWBG)
