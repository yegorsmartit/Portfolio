import React, { Fragment } from 'react';
import { useEffect, useContext, useState } from 'react';
import { useLocation } from "react-router-dom";
import './projectStyle.css';
import { ThemesStatus } from "../../contexts/themes";
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectCoverflow, Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { get_project } from '../../actions/project';
import { useDispatch, useSelector } from "react-redux";
import {useTranslation} from "react-i18next";

SwiperCore.use([EffectCoverflow, Navigation, Pagination, Scrollbar, A11y, Autoplay]);

const Project = props => {
  const [citeDarkTheme, setCiteDarkTheme] = useContext(ThemesStatus);
  const [citeLightTheme, setCiteLightTheme] = useContext(ThemesStatus);
  const project = useSelector((state) => state.projectReducer.project);
  const [project2, setProject2] = useState(project);
  const [projectImgArray, setProjectImgArray] = useState(project2.projectImg);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  // const location = useLocation();
  const root = document.documentElement;

  useEffect(() => {
    if (citeDarkTheme.citeDarkTheme || !citeLightTheme.citeLightTheme) {
      root.style.setProperty('--fontBorderColor', "orange");
      root.style.setProperty('--fontSimpleColor', "white");
      root.style.setProperty('--BABWIAButtonBackgroundColor', "-webkit-linear-gradient(top, #494B4E, #27292C)");
      root.style.setProperty('--BABWIAButtonBackgroundColorOnHover', "#272727");
      root.style.setProperty('--BABWIAButtonBackgroundColorBoxShadow', "0 20px 50px slategrey");
      root.style.setProperty('--MenuBackgroundColor', `-webkit-linear-gradient(top, #494B4E, #27292C)`);
      root.style.setProperty('--ParalaxCardBackgroundColor', `-webkit-linear-gradient(top, #494B4E, #27292C)`);
      root.style.setProperty('--ParalaxCardFontColor', "white");

    } else {
      root.style.setProperty('--fontSimpleColor', "black");
      root.style.setProperty('--fontBorderColor', "white");
      root.style.setProperty('--BABWIAButtonBackgroundColor', "slategrey");
      root.style.setProperty('--BABWIAButtonBackgroundColorOnHover', "#8D8F92");
      root.style.setProperty('--BABWIAButtonBackgroundColorBoxShadow', "0 20px 50px black");
      root.style.setProperty('--ParalaxCardBackgroundColor', `-webkit-linear-gradient(top, #494B4E, #8D8F92)`);
      root.style.setProperty('--ParalaxCardFontColor', "black");

      root.style.setProperty('--MenuBackgroundColor', "-webkit-linear-gradient(top, #8D8F92, #cccccc)");

    }
  }, [citeDarkTheme.citeDarkTheme, citeLightTheme.citeLightTheme]);

  useEffect(() => {
    //load data for current project
    try {
      const title = props.match.params.title.toString().slice(1);
      const project = dispatch(get_project(title ));
      setProject2(project);
    } catch (err) {
      console.log('this is from project page', err);
    }
  }, []);

  useEffect(()=>{
    setProject2(project);
    setProjectImgArray(project.projectImg);
    debugger
  },[project]);

  const swiperClick = () =>{
    console.log(';;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;');
  };

  return (
    <Fragment>
      <div className='project_swiper_container'>
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          slideShadows={false}
          centeredSlides={true}
          coverflowEffect={{
            rotate: 40,
            stretch: 0,
            depth: 500,
            modifier: 1,
            slideShadows: false
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false
          }}
          loop={true}
          grabCursor={true}
          effect="coverflow"
          navigation
          pagination={{
            clickable: true,
            // el: ".swiper-pagination"
            // background: "red"
            // type: "progressbar"
          }}
          // onSlideChange={() => console.log('slide change')}
          // onSwiper={(swiper) => console.log(swiper)}
        >
          { projectImgArray && projectImgArray.length && projectImgArray.map((item, index) => (
            <SwiperSlide key={index} style={{ backgroundColor: 'transparent' }} onClick={swiperClick}
                         className={` swiper-slide ${item.orientation === 'landscape' ? 'swiper-slide-landscape' : 'swiper-slide-portrait'}`}>
              <img className={`${item.orientation === 'landscape' ? 'project_img_landscape' : 'project_img_portrait'} `}
                   src={item.image} alt="project image"/>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className='project_info_container'>
        <div className='project_info_inner_container'>
          <div className="project_info_block_info">
            <span className="project_info_titles">{ t("title") } :</span>
            <span>{project2.title}</span>
          </div>
          <div className="project_info_block_info">
            <span className="project_info_titles">{ t("technologies") } :</span>
            <span>{project2.technologies}</span>
          </div>
          <div className="project_info_block_info">
            <span className="project_info_titles">{ t("control") } :</span>
            <span>{project2.control}</span>
          </div>
          <div className="project_info_block_info">
            <span className="project_info_titles">{ t("process") }  :</span>
            <span>{project2.process}</span>
          </div>
          {project2.link && <div className="project_info_block_info">
            <span className="project_info_titles">{ t("link") }  :</span>
            <a href={ project2.link} target="_blank"> <span>{ project2.link} </span> </a>
          </div>}
          <div className="project_info_block_info">
            <span className="project_info_titles">{ t("description") }  :</span>
            <span>{project2.description}</span>
          </div>
        </div>

      </div>

    </Fragment>
  )
};


export default Project;
