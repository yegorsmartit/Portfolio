import React, { useContext} from 'react';
import './styleONMMSkills.css';
import { connect } from "react-redux";
import RoundProgressBar from "../RoundProgressBar";
import { ThemesStatus } from "../../contexts/themes";

const CardONMMSkills = (props)=> {

  const [citeDarkTheme, setCiteDarkTheme] = useContext(ThemesStatus);
  const { percents, skill, index } =props;
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
    <div className="common_skills_card_container">
      <div className={citeDarkTheme.citeDarkTheme ?`skills_card_container darkColorClass` :`skills_card_container lightColorClass`} >
        <RoundProgressBar percents={percents} skill={skill} index={index}/>
        <div className="skills_card_container_transparent" onMouseMove={ (event)=> OnMouseEnterListener( event ) }
             onMouseOut={ event => OnMouseLeaveListener(event) } />
      </div>
    </div>
  )

};

CardONMMSkills.defaulProps = {

};

CardONMMSkills.propsTypes = {

};

const mapDispatchToProps = dispatch => ({});

const mapStateToProps = store => ({});

export default connect( mapStateToProps, mapDispatchToProps)(CardONMMSkills)
