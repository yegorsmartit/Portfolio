import React, {useState, useContext} from 'react';
import './mainCss.css';
import { MenuStatusContext } from "../../contexts/context";
import ButtonBAB from '../../components/buttonBAB';
import ButtonWBG from "../../components/buttonWBG";
import ButtonBOC from "../../components/buttonBOC";
import StableHeader from '../../components/header';
import Project from "../project";
import Projects from "../projects";
import HomePage from "../home/home";
import Skills from "../skills";
import BubbleLoader from "../../components/loaders";
import { Route, Switch } from 'react-router-dom';
import Particles from 'react-particles-js';
import logo from '../../resources/images/backgroundLight2.jpg';
import particlesParams  from '../../resources/particles/react-particles.json';
let menuStatusContent = '';

const Main = props =>{
  const [cardType, setCardType] = useState(0);
  // const [animationClass, setAnimationClass] = useState('animationHidden');
  const [animationClass, setAnimationClass] = useState('animateAppearance');
  const [menuStatus, setMenuStatus] = useContext(MenuStatusContext);

  // let animationClass = 'animationHidden';
  if(menuStatus.menuStatus){
    menuStatusContent = 'moveContentContainerRight15'
  }else{menuStatusContent = ''}

  // const onClickButtonHandler = () => {
  //   console.log('this is from on click button handler in header');
  //   setAnimationClass('animateAppearance');
  // };
  //
  // const onClickCardONMMHandler = () => {
  //   console.log('this is from home onClickCardONMMHandler');
  // };
  //
  return (
    <div className="main_container" id={`particles-js`}>
      <div className={`${menuStatusContent} contextContainer`}>
        <StableHeader/>
        <Particles  params={ particlesParams } style={{ width: '100%', position: 'fixed' }} />
        <Switch>
          <Route path="/project"  component = { Project } exact />
          <Route path="/projects"  component = { Projects }  exact />
          <Route path="/"  component = { HomePage }  exact />
          <Route path="/skills"  component = { Skills }  exact />
        </Switch>
        {/*<div className="menu_buttons_container">*/}
        {/*<ButtonBOC onClick={ onClickButtonHandler} title={'skills'}    icon={'fas fa-user-cog'}/>*/}


        {/*<ButtonBOC onClick={ onClickButtonHandler} title={'skills'}    icon={'fa fa-sitemap'}/>*/}
        {/*<ButtonBOC onClick={ onClickButtonHandler} title={'projects'}  icon={'fa fa-folder'}/>*/}
        {/*<ButtonBOC onClick={ onClickButtonHandler} title={'main'}      icon={'fa fa-home'}/>*/}
        {/*<ButtonBOC onClick={ onClickButtonHandler} title={'contacts'}  icon={'fa fa-id-card'}/>*/}



        {/*<ButtonBAB onClick={onClickButtonHandler}  title={'BAB button'}/>*/}
        {/*<ButtonWBG onClick={onClickButtonHandler}  title={'BWG button'}/>*/}
        {/*</div>*/}
      </div>
    </div>
  )
};

export default Main;
