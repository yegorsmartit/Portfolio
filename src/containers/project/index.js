import React from 'react';
import { connect } from 'react-redux';
import {useEffect, useContext } from 'react';
import './projectStyle.css';
import { ThemesStatus } from "../../contexts/themes";
import test from "../../resources/images/wLingua/wLingua1.png";
import test2 from "../../resources/images/wLingua/wLingua2.png";
import test3 from "../../resources/images/wLingua/wLingua3.png";
import test4 from "../../resources/images/wLingua/wLingua4.png";
import test5 from "../../resources/images/wLingua/wLingua5.png";
import Swiper from "swiper";


const Project = props => {
  const [ citeDarkTheme,    setCiteDarkTheme ]    = useContext( ThemesStatus);
  const [ citeLightTheme,   setCiteLightTheme ]   = useContext( ThemesStatus);
  const root = document.documentElement;

  const imgArray = [{image: test}, {image: test2}, {image: test3}, {image: test4}, {image: test5}];

  let swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 10,
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

  useEffect(()=>{
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

  useEffect(()=>{
    let imgObj = new Image();
    for(let i =0; i < imgArray.length; i++){
      imgObj.src= imgArray[i].image;
      if(imgObj.height < imgObj.width) {
        imgArray[i].orientation = 'landscape'
      }else{
        imgArray[i].orientation = 'portrait'
      }
      console.log('hhhhhhhhhhhhhhhhhhhh', imgArray[i].orientation)
    }
  },[]);


  return(
    <div className="project_container">
      <div className="project_container_inner">

        <div className="swiper-container">
          <div className="swiper-wrapper">
            {
              imgArray.map( (item, index)=> (
                <div key={index} className={` swiper-slide ${item.orientation === 'portrait' ? 'swiper-slide-portrait' : 'swiper-slide-landscape'}`}>
                  <img className={`${item.orientation === 'portrait' ? 'project_img_landscape' : 'project_img_portrait'} `}
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
