import React, {useState, useContext, useEffect} from 'react';
import './mainCss.css';
import { MenuStatusContext } from "../../contexts/context";
import StableHeader from '../../components/header';
import Project from "../project";
import Projects from "../projects";
import HomePage from "../home/home";
import Skills from "../skills";
import { Route, Switch } from 'react-router-dom';
import Particles from 'react-particles-js';

import particlesParams  from '../../resources/particles/react-particles.json';
let menuStatusContent = '';

const Main = props =>{
  const [menuStatus, setMenuStatus] = useContext(MenuStatusContext);
  const [windowLoaded, setWindowLoaded] = useState(false);

  window.addEventListener('load', function () {
    setWindowLoaded(true);
  });

  if(menuStatus.menuStatus){
    menuStatusContent = 'moveContentContainerRight15'
  }else{menuStatusContent = ''}

  return (
    <div className="main_container" id={`particles-js`}>
      {windowLoaded && <Particles  params={ particlesParams } className="particles_container" />}
      <div className={`${menuStatusContent} contextContainer`}>
        <StableHeader/>
        <Switch>
          <Route path="/"               component = { HomePage }  exact />
          <Route path="/skills"         component = { Skills }    exact />
          <Route path="/projects"       component = { Projects }  exact />
          <Route path="/project/:title" component = { Project }   exact />
        </Switch>
      </div>
    </div>
  )
};

export default Main;
