import React, { Fragment, useState, useContext, useEffect } from 'react';
import './projectsStyle.css';
import CardONMM from "../../components/cardONMM";
import { useDispatch, useSelector} from "react-redux";
import { getAllProjectsAction } from "../../actions/project";
import CardPostal from "../../components/cardPostal";
import { MenuStatusContext } from "../../contexts/context";
import { ThemesStatus } from "../../contexts/themes";
let menuStatusContent = '';

const Projects = props =>{
  const [animationClass, setAnimationClass] = useState('animateAppearance');
  const [menuStatus, setMenuStatus] = useContext(MenuStatusContext);
  const [cardThemePostal, setCardThemePostal] = useContext(ThemesStatus);
  const dispatch = useDispatch();
  const projects = useSelector(state => state.projectReducer.projects );

  if(menuStatus.menuStatus){
    menuStatusContent = 'moveContentContainerRight15'
  }else{menuStatusContent = ''}

  useEffect ( () =>{
    dispatch(getAllProjectsAction());
  },[]);

  useEffect(()=>{
  },[projects]);

  const onClickCardONMMHandler = () => {
    console.log('this is from home onClickCardONMMHandler');
  };

  return (
    <Fragment>
      {cardThemePostal.cardThemePostal &&
        <div className={'projects_main_container'}
          // style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', flexWrap: 'wrap' }}
        >
          {projects && projects.map((item,index)=>(
            <div className={`${animationClass}`} key={index}>
              <CardONMM img={item.logo}
                        imgTitle={item.imgTitle}
                        title={item.title}
                        description={item.description}
                        technologies={item.technologies}
                        control={item.control}
                        link={item.link}
                        process={item.process}
                        onClick={() => onClickCardONMMHandler()}
              />
            </div>
          ))}
      </div>
      }
      { !cardThemePostal.cardThemePostal &&
        <div className={'projects_main_container'}
      //     style={{
      //   display: 'flex',
      //   flexDirection: 'row',
      //   justifyContent: 'space-around',
      //   flexWrap: 'wrap'
      // }}
        >
          {projects && projects.map((item,index)=>(
            <div className={`${animationClass}`} key={index}>
              <CardPostal img={item.logo}
                        imgTitle={item.imgTitle}
                        title={item.title}
                        description={item.description}
                        technologies={item.technologies}
                        control={item.control}
                        link={item.link}
                        process={item.process}
                        onClick={() => onClickCardONMMHandler()}
              />
            </div>
          ))}
      </div>
      }
    </Fragment>
  )
};

export default Projects;
