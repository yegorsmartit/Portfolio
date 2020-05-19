import React, { Fragment, useState, useContext } from 'react';
import './projectsStyle.css';
import CardONMM from "../../components/cardONMM";
import inviteMeLogo from "../../resources/images/inviteMe/inviteMe3.png";
import {
  CommunicationsControl,
  DRNKAR,
  inviteMe,
  mixFit,
  privetMir,
  StaffControl,
  TextRecognition, wLingua, workControl
} from "../../resources/projectList";
import DRNKAR_logo from "../../resources/images/DRNK/drnk1.png";
import nda_logo from "../../resources/images/nda/nda5.jpg";
import mixFit_logo from "../../resources/images/mixFit/mixFit1.png";
import privetMir_logo from "../../resources/images/privetMir/privetMir5.png";
import wLingua_logo from "../../resources/images/wLingua/wLingua1.png";
import CardPostal from "../../components/cardPostal";
import { MenuStatusContext } from "../../contexts/context";
import { ThemesStatus } from "../../contexts/themes";
let menuStatusContent = '';

const Projects = props =>{
  const [animationClass, setAnimationClass] = useState('animateAppearance');
  const [menuStatus, setMenuStatus] = useContext(MenuStatusContext);
  const [cardThemePostal, setCardThemePostal] = useContext(ThemesStatus);

  if(menuStatus.menuStatus){
    menuStatusContent = 'moveContentContainerRight15'
  }else{menuStatusContent = ''}

  // const onClickButtonHandler = () => {
  //   console.log('this is from on click button handler in header');
  //   setAnimationClass('animateAppearance');
  // };

  const onClickCardONMMHandler = () => {
    console.log('this is from home onClickCardONMMHandler');
  };

  return (
    <Fragment>
      {cardThemePostal.cardThemePostal &&
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', flexWrap: 'wrap' }}>
        <div className={`${animationClass}`}>
          <CardONMM img={inviteMeLogo}
                    title={inviteMe.title}
                    description={inviteMe.description}
                    technologies={inviteMe.technologies}
                    control={inviteMe.control}
                    link={inviteMe.link}
                    process={inviteMe.process}
                    onClick={() => onClickCardONMMHandler()}
          />
        </div>
        <div className={`${animationClass}`}>
          <CardONMM img={DRNKAR_logo}
                    title={DRNKAR.title}
                    description={DRNKAR.description}
                    technologies={DRNKAR.technologies}
                    control={DRNKAR.control}
                    link={DRNKAR.link}
                    process={DRNKAR.process}
                    onClick={() => onClickCardONMMHandler()}
          />
        </div>
        <div className={`${animationClass}`}>
          <CardONMM img={nda_logo}
                    title={CommunicationsControl.title}
                    description={CommunicationsControl.description}
                    technologies={CommunicationsControl.technologies}
                    control={CommunicationsControl.control}
                    link={CommunicationsControl.link}
                    process={CommunicationsControl.process}
                    onClick={() => onClickCardONMMHandler()}
          />
        </div>
        <div className={`${animationClass}`}>
          <CardONMM img={mixFit_logo}
                    title={mixFit.title}
                    description={mixFit.description}
                    technologies={mixFit.technologies}
                    control={mixFit.control}
                    link={mixFit.link}
                    process={mixFit.process}
                    onClick={() => onClickCardONMMHandler()}
          />
        </div>
        <div className={`${animationClass}`}>
          <CardONMM img={nda_logo}
                    title={StaffControl.title}
                    description={StaffControl.description}
                    technologies={StaffControl.technologies}
                    control={StaffControl.control}
                    link={StaffControl.link}
                    process={StaffControl.process}
                    onClick={() => onClickCardONMMHandler()}
          />
        </div>
        <div className={`${animationClass}`}>
          <CardONMM img={privetMir_logo}
                    title={privetMir.title}
                    description={privetMir.description}
                    technologies={privetMir.technologies}
                    control={privetMir.control}
                    link={privetMir.link}
                    process={privetMir.process}
                    onClick={() => onClickCardONMMHandler()}
          />
        </div>
        <div className={`${animationClass}`}>
          <CardONMM img={nda_logo}
                    title={TextRecognition.title}
                    description={TextRecognition.description}
                    technologies={TextRecognition.technologies}
                    control={TextRecognition.control}
                    link={TextRecognition.link}
                    process={TextRecognition.process}
                    onClick={() => onClickCardONMMHandler()}
          />
        </div>
        <div className={`${animationClass}`}>
          <CardONMM img={wLingua_logo}
                    title={wLingua.title}
                    description={wLingua.description}
                    technologies={wLingua.technologies}
                    control={wLingua.control}
                    link={wLingua.link}
                    process={wLingua.process}
                    onClick={() => onClickCardONMMHandler()}
          />
        </div>
        <div className={`${animationClass}`}>
          <CardONMM img={nda_logo}
                    title={workControl.title}
                    description={workControl.description}
                    technologies={workControl.technologies}
                    control={workControl.control}
                    link={workControl.link}
                    process={workControl.process}
                    onClick={() => onClickCardONMMHandler()}
          />
        </div>
      </div>
      }
      { !cardThemePostal.cardThemePostal &&
        <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap'
      }}>
        <div className={`${animationClass}`}>
          <CardPostal img={inviteMeLogo}
                    title={inviteMe.title}
                    description={inviteMe.description}
                    technologies={inviteMe.technologies}
                    control={inviteMe.control}
                    link={inviteMe.link}
                    process={inviteMe.process}
                    onClick={() => onClickCardONMMHandler()}
          />
        </div>
        <div className={`${animationClass}`}>
          <CardPostal img={DRNKAR_logo}
                    title={DRNKAR.title}
                    description={DRNKAR.description}
                    technologies={DRNKAR.technologies}
                    control={DRNKAR.control}
                    link={DRNKAR.link}
                    process={DRNKAR.process}
                    onClick={() => onClickCardONMMHandler()}
          />
        </div>
        <div className={`${animationClass}`}>
          <CardPostal img={nda_logo}
                    title={CommunicationsControl.title}
                    description={CommunicationsControl.description}
                    technologies={CommunicationsControl.technologies}
                    control={CommunicationsControl.control}
                    link={CommunicationsControl.link}
                    process={CommunicationsControl.process}
                    onClick={() => onClickCardONMMHandler()}
          />
        </div>
        <div className={`${animationClass}`}>
          <CardPostal img={mixFit_logo}
                    title={mixFit.title}
                    description={mixFit.description}
                    technologies={mixFit.technologies}
                    control={mixFit.control}
                    link={mixFit.link}
                    process={mixFit.process}
                    onClick={() => onClickCardONMMHandler()}
          />
        </div>
        <div className={`${animationClass}`}>
          <CardPostal img={nda_logo}
                    title={StaffControl.title}
                    description={StaffControl.description}
                    technologies={StaffControl.technologies}
                    control={StaffControl.control}
                    link={StaffControl.link}
                    process={StaffControl.process}
                    onClick={() => onClickCardONMMHandler()}
          />
        </div>
        <div className={`${animationClass}`}>
          <CardPostal img={privetMir_logo}
                    title={privetMir.title}
                    description={privetMir.description}
                    technologies={privetMir.technologies}
                    control={privetMir.control}
                    link={privetMir.link}
                    process={privetMir.process}
                    onClick={() => onClickCardONMMHandler()}
          />
        </div>
        <div className={`${animationClass}`}>
          <CardPostal img={nda_logo}
                    title={TextRecognition.title}
                    description={TextRecognition.description}
                    technologies={TextRecognition.technologies}
                    control={TextRecognition.control}
                    link={TextRecognition.link}
                    process={TextRecognition.process}
                    onClick={() => onClickCardONMMHandler()}
          />
        </div>
        <div className={`${animationClass}`}>
          <CardPostal img={wLingua_logo}
                    title={wLingua.title}
                    description={wLingua.description}
                    technologies={wLingua.technologies}
                    control={wLingua.control}
                    link={wLingua.link}
                    process={wLingua.process}
                    onClick={() => onClickCardONMMHandler()}
          />
        </div>
        <div className={`${animationClass}`}>
          <CardPostal img={nda_logo}
                    title={workControl.title}
                    description={workControl.description}
                    technologies={workControl.technologies}
                    control={workControl.control}
                    link={workControl.link}
                    process={workControl.process}
                    onClick={() => onClickCardONMMHandler()}
          />
        </div>
      </div>
      }
    </Fragment>
  )
};

export default Projects;
