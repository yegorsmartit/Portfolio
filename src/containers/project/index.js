import React from 'react';
import { connect } from 'react-redux';
import {useEffect, useContext } from 'react';
import  { useLocation }  from "react-router-dom";
import './projectStyle.css';
import { ThemesStatus } from "../../contexts/themes";
import test from "../../resources/images/wLingua/wLingua1.png";
import test2 from "../../resources/images/wLingua/wLingua2.png";
import test3 from "../../resources/images/wLingua/wLingua3.png";
import test4 from "../../resources/images/wLingua/wLingua4.png";
import test5 from "../../resources/images/wLingua/wLingua5.png";
import Swiper from "swiper";
import { get_project } from '../../actions/project';
import {projects} from "../../constants/project";
import { useDispatch } from "react-redux";

const imgArray = [{image: test}, {image: test2}, {image: test3}, {image: test4}, {image: test5}];

const Project = props => {
  console.log('ssssssssssssssssssssssssssssssss');

  const [ citeDarkTheme,    setCiteDarkTheme ]    = useContext( ThemesStatus);
  const [ citeLightTheme,   setCiteLightTheme ]   = useContext( ThemesStatus);
  const dispatch = useDispatch();
  const location = useLocation();
  const root = document.documentElement;

  let swiper ={};

  useEffect(()=>{
    console.log('ssssssssssssssssssssssssssssssss');

    if(citeDarkTheme.citeDarkTheme || !citeLightTheme.citeLightTheme){
      root.style.setProperty('--fontBorderColor', "orange");
      root.style.setProperty('--fontSimpleColor', "white");
      root.style.setProperty('--BABWIAButtonBackgroundColor', "-webkit-linear-gradient(top, #494B4E, #27292C)");
      root.style.setProperty('--BABWIAButtonBackgroundColorOnHover', "#272727");
      root.style.setProperty('--BABWIAButtonBackgroundColorBoxShadow', "0 20px 50px slategrey");
      root.style.setProperty('--MenuBackgroundColor', `-webkit-linear-gradient(top, #494B4E, #27292C)`);
      root.style.setProperty('--ParalaxCardBackgroundColor', `-webkit-linear-gradient(top, #494B4E, #27292C)`);
      root.style.setProperty('--ParalaxCardFontColor', "white");

    }else{
      root.style.setProperty('--fontSimpleColor', "black");
      root.style.setProperty('--fontBorderColor', "white");
      root.style.setProperty('--BABWIAButtonBackgroundColor', "slategrey");
      root.style.setProperty('--BABWIAButtonBackgroundColorOnHover', "#8D8F92");
      root.style.setProperty('--BABWIAButtonBackgroundColorBoxShadow', "0 20px 50px black");
      root.style.setProperty('--ParalaxCardBackgroundColor', `-webkit-linear-gradient(top, #494B4E, #8D8F92)`);
      root.style.setProperty('--ParalaxCardFontColor', "black");

      root.style.setProperty('--MenuBackgroundColor', "-webkit-linear-gradient(top, #8D8F92, #cccccc)");

    }
  },[citeDarkTheme.citeDarkTheme, citeLightTheme.citeLightTheme]);
  console.log('dddddddddddddddddddddddddddddddddd');

  useEffect(()=>{
    //load data for current project

    debugger
    try{
      let title2 = location.pathname;
      const title = "wLingua";
      const data = {
        type: projects.get_project,
        payload: title
      };
      debugger
      dispatch(data);
      debugger
      console.log('dddddddddddddddddddddddddddddddddd', data, 'kkkkkkkkkkkkkkkkkkkkkkkkk', title2);

    }catch (e) {
      debugger

      console.log('lllllllllllll', e);
    }

    //load swiper before render
    swiper = new Swiper('.swiper-container', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 5,
        stretch: 0,
        depth: 150,
        modifier: 1,
        slideShadows : true,
      },
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      loop: true,
      pagination: {
        el: '.swiper-pagination',
      },
    });

    //add orientation flag for img
    let imgObj = new Image();
    for(let i =0; i < imgArray.length; i++){
      imgObj.src= imgArray[i].image;
      if(imgObj.height < imgObj.width) {
        imgArray[i].orientation = 'landscape'
      }else{
        imgArray[i].orientation = 'portrait'
      }
    }
  },[]);

  return(
    <div className="project_container">
      <div className="project_container_inner">

        <div className="swiper-container">
          <div className="swiper-wrapper">
            {
              imgArray.map( (item, index)=> (
                <div key={index} className={` swiper-slide ${item.orientation === 'landscape' ? 'swiper-slide-landscape' : 'swiper-slide-portrait'}`}>
                  <img className={`${item.orientation === 'landscape' ? 'project_img_landscape' : 'project_img_portrait'} `}
                       src={item.image} alt="project image"/>
                </div>
              ) )
            }
          </div>
          <div className="swiper-pagination"/>
        </div>

      </div>
    </div>
  )
};



export default Project;
