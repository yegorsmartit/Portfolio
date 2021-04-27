import React, {useState, useContext, Fragment, useEffect} from 'react';
import './verticalMenuStyle.css';
import {MenuStatusContext } from '../../contexts/context';
import ButtonBABWIA from '../../components/buttonBABWIA';
import { Link, useLocation } from 'react-router-dom'
import { ThemesStatus } from "../../contexts/themes";
import { useTranslation } from 'react-i18next';
import { withTranslation } from 'react-i18next';

const VerticalMenu = () =>{

  const { t, i18n } = useTranslation();
  const [menuStatusCounter, setMenuStatusCounter] = useContext(MenuStatusContext);
  const [menuStatus, setMenuStatus] = useState('');
  let location = useLocation();
  const [ cardThemeParalax, setCardThemeParalax ] = useContext( ThemesStatus);
  const [ cardThemePostal,  setCardThemePostal ]  = useContext( ThemesStatus);
  const [ citeDarkTheme,    setCiteDarkTheme ]    = useContext( ThemesStatus);
  const [ citeLightTheme,   setCiteLightTheme ]   = useContext( ThemesStatus);
  const [ citeEnglishTheme, setCiteEnglishTheme]  = useContext( ThemesStatus);
  const [ citeRussianTheme, setCiteRussianTheme]  = useContext( ThemesStatus);


  const root = document.documentElement;
  // menu closed or opened, indicating icon page and buttons insight menu

  useEffect(()=>{
    i18n.changeLanguage("en");
  },[]);

  useEffect(()=>{
    if(!menuStatusCounter.menuStatus) {
      switch (location.pathname) {
        case '/': {
          let homeButtonElement = document.querySelector(`#home_icon`).style;
          let homeButtonElementFont = document.querySelector(`#home_icon_font_id`).style;
          homeButtonElement.borderColor = 'orange';
          homeButtonElementFont.color = 'orange';
          homeButtonElement.boxShadow = '0px 0px 15px orange';
          break;
        }
        case '/skills': {
          let skillsButtonElement = document.querySelector(`#skills_icon`).style;
          let skillsButtonElementFont = document.querySelector(`#skills_icon_font_id`).style;
          skillsButtonElement.borderColor = 'orange';
          skillsButtonElementFont.color = 'orange';
          skillsButtonElement.boxShadow = '0px 0px 15px orange';
          break;
        }
        case '/projects': {
          let projectsButtonElement = document.querySelector(`#projects_icon`).style;
          let projectsButtonElementFont = document.querySelector(`#projects_icon_font_id`).style;
          projectsButtonElement.borderColor = 'orange';
          projectsButtonElementFont.color = 'orange';
          projectsButtonElement.boxShadow = '0px 0px 15px orange';
          break;
        }
      }
    }else{
      switch(location.pathname){
        case '/':{
          let elem = document.querySelector(`#button_BABWIA_amain`);
          elem.focus();
          break;
        }
        case '/skills':{
          let elem = document.querySelector(`#button_BABWIA_askills`);
          elem.focus();
          break;
        }
        case '/projects':{
          let elem = document.querySelector(`#button_BABWIA_aprojects`);
          elem.focus();
          break;
        }
      }
    }
  },[location, menuStatusCounter.menuStatus]);

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


      // root.style.setProperty('--backgroundImageCommon', "url(../../resources/images/backgroundDark2.jpg)");
    }else{
      root.style.setProperty('--fontSimpleColor', "black");
      root.style.setProperty('--fontBorderColor', "white");
      root.style.setProperty('--BABWIAButtonBackgroundColor', "slategrey");
      root.style.setProperty('--BABWIAButtonBackgroundColorOnHover', "#8D8F92");
      root.style.setProperty('--BABWIAButtonBackgroundColorBoxShadow', "0 20px 50px black");
      root.style.setProperty('--ParalaxCardBackgroundColor', `-webkit-linear-gradient(top, #494B4E, #8D8F92)`);
      root.style.setProperty('--ParalaxCardFontColor', "black");

      root.style.setProperty('--MenuBackgroundColor', "-webkit-linear-gradient(top, #8D8F92, #cccccc)");


      // root.style.setProperty('--backgroundImageCommon', "url(../../resources/images/background_light.jpg)");
    }
  },[citeDarkTheme.citeDarkTheme, citeLightTheme.citeLightTheme]);

  const onClickButtonHandler = title =>{
    if(!menuStatusCounter.menuStatus){
      changeButtonsStyleOpeMenu(title);
    }
  };

  const onChangeLanguege = lang =>{
    i18n.changeLanguage(lang);
  };

  const changeButtonsStyleOpeMenu = (title) =>{
    let homeButtonElement = document.querySelector(`#home_icon`).style;
    let homeButtonElementFont = document.querySelector(`#home_icon_font_id`).style;
    let skillsButtonElement = document.querySelector(`#skills_icon`).style;
    let skillsButtonElementFont = document.querySelector(`#skills_icon_font_id`).style;
    let projectsButtonElement = document.querySelector(`#projects_icon`).style;
    let projectsButtonElementFont = document.querySelector(`#projects_icon_font_id`).style;
    switch (title) {
      case 'main': {
        if(menuStatusCounter.menuStatus === false){
          homeButtonElement.borderColor = 'orange';
          homeButtonElementFont.color = 'orange';
          homeButtonElement.boxShadow = '0px 0px 15px orange';

          skillsButtonElement.borderColor = '';
          skillsButtonElementFont.color = 'white';
          skillsButtonElement.boxShadow = '';

          projectsButtonElement.borderColor = '';
          projectsButtonElementFont.color = 'white';
          projectsButtonElement.boxShadow = '';
        }
        break;
      }
      case 'skills': {
        if(menuStatusCounter.menuStatus === false){
          homeButtonElement.borderColor = '';
          homeButtonElementFont.color = 'white';
          homeButtonElement.boxShadow = '';

          skillsButtonElement.borderColor = 'orange';
          skillsButtonElementFont.color = 'orange';
          skillsButtonElement.boxShadow = '0px 0px 15px orange';

          projectsButtonElement.borderColor = '';
          projectsButtonElementFont.color = 'white';
          projectsButtonElement.boxShadow = '';
        }
        break;
      }
      case 'projects': {
        if(menuStatusCounter.menuStatus === false){
          homeButtonElement.borderColor = '';
          homeButtonElementFont.color = 'white';
          homeButtonElement.boxShadow = '';

          skillsButtonElement.borderColor = '';
          skillsButtonElementFont.color = 'white';
          skillsButtonElement.boxShadow = '';

          projectsButtonElement.borderColor = 'orange';
          projectsButtonElementFont.color = 'orange';
          projectsButtonElement.boxShadow = '0px 0px 15px orange';
        }
        break;
      }
      default:{
        if(menuStatusCounter.menuStatus === false){
          homeButtonElement.borderColor = 'orange';
          homeButtonElementFont.color = 'orange';
          homeButtonElement.boxShadow = '0px 0px 15px orange';

          skillsButtonElement.borderColor = '';
          skillsButtonElementFont.color = 'white';
          skillsButtonElement.boxShadow = '';

          projectsButtonElement.borderColor = '';
          projectsButtonElementFont.color = 'white';
          projectsButtonElement.boxShadow = '';
        }
      }break;
    }
  };

  const openMenuHandler = ()=>{
    setMenuStatusCounter( {menuStatus: !menuStatusCounter.menuStatus});
    if(!menuStatusCounter.menuStatus){
      setMenuStatus('menu_main_container_open')}
    else{setMenuStatus('')
    }
  };

  const onChangeHandle = (event, title) => {
    switch(title){
      case 'paralax':{
        if(!event.target.checked) {
          setCardThemeParalax(state => ({
            ...state,
            cardThemeParalax: false,
            cardThemePostal: true
          }));
        }else {
          setCardThemePostal( state => ({
            ...state,
            cardThemeParalax: true,
            cardThemePostal: false
          } ));
        }
        break;
      }
      case 'postal':{
        if(!event.target.checked){
          setCardThemeParalax( state => ({
            ...state,
            cardThemeParalax: true,
            cardThemePostal: false
          } ));
          event.persist();
        } else{
          setCardThemeParalax( state => ({
            ...state,
            cardThemeParalax: false,
            cardThemePostal: true
          } ));
        }
        event.persist();
        break;
      }
      case 'light':
      {
        if(!event.target.checked){
          setCiteLightTheme( state => ({
            ...state,
            citeDarkTheme: true,
            citeLightTheme: false
          } ));
          event.persist();
        } else{
          setCiteLightTheme( state => ({
            ...state,
            citeDarkTheme: false,
            citeLightTheme: true
          } ));
        }
        event.persist();
        break;
      }
      case 'dark':
      {
        if(!event.target.checked){
          setCiteDarkTheme( state => ({
            ...state,
            citeDarkTheme: false,
            citeLightTheme: true
          } ));
          event.persist();
        } else{
          setCiteDarkTheme( state => ({
            ...state,
            citeDarkTheme: true,
            citeLightTheme: false
          } ));
        }
        event.persist();
        break;
      }
      case 'english':
      {
        if(event.target.checked){
          setCiteRussianTheme( state => ({
            ...state,
            citeEnglishTheme: true ,
            citeRussianTheme: false
          } ));
          onChangeLanguege('en');
          event.persist();
        } else{
          setCiteRussianTheme( state => ({
            ...state,
            citeEnglishTheme: false,
            citeRussianTheme: true
          } ));
          onChangeLanguege('ru');
        }
        event.persist();
        break;
      }
      case 'russian':
      {
        if(event.target.checked){
          setCiteEnglishTheme( state => ({
            ...state,
            citeEnglishTheme: false,
            citeRussianTheme: true
          } ));
          onChangeLanguege('ru');
          event.persist();
        } else{
          setCiteEnglishTheme( state => ({
            ...state,
            citeEnglishTheme: true,
            citeRussianTheme: false
          } ));
          onChangeLanguege('en');
          event.persist();
        }
        break;
      }
    }

  };

  return (
    <div className={`menu_main_container ${menuStatus}`}>
      <div className="menu_main_inner_container">
        {!menuStatusCounter.menuStatus &&
          <Fragment>
            <div className="menu_btn_container openMenuIcon menu_btn_hamburger" onClick={ ()=> openMenuHandler() }>
              <i className="fa fa-bars common_header_social_net_icon_font openMenuIcon"/>
            </div>
            <div className={`menu_arrow_banner`} >
              <i className="fa fa-chevron-left arrowIcon arrowIcon1 arrowAnimation"/>
              <i className="fa fa-chevron-left arrowIcon arrowIcon2 arrowAnimation"/>
              <i className="fa fa-chevron-left arrowIcon arrowIcon3 arrowAnimation"/>
            </div>
          </Fragment>
        }
        {menuStatusCounter.menuStatus &&
          <div className="menu_btn_container closeIcon menu_btn_close" onClick={ ()=> openMenuHandler() }>
            <i className="fa fa-times common_header_social_net_icon_font closeIcon"/>
          </div>
        }
        {menuStatusCounter.menuStatus &&
          <div className={`menu_btn_items_container`} >
            <ButtonBABWIA onClick={ ()=>onClickButtonHandler ('main')}       title={ "main" }
                          icon={'fa fa-home'} path={'/'} titleButton = { t("main") }/>
            <ButtonBABWIA onClick={ ()=>onClickButtonHandler ('skills')}     title={ "skills" }
                          icon={'fa fa-sitemap'} path={'/skills'}  titleButton = { t("skills") }/>
            <ButtonBABWIA onClick={ ()=>onClickButtonHandler ('projects')}   title={ 'projects' }
                          icon={'fa fa-folder'} path={'/projects'}  titleButton = { t("projects") }/>
          </div>
        }
        {!menuStatusCounter.menuStatus &&
          <Fragment>
            <Link to={`/`}>
              <div className="menu_btn_container homeIcon home_icon_location on" id="home_icon"
                   onClick={ ()=> onClickButtonHandler('main') }>
                <i className="fa fa-home common_header_social_net_icon_font homeIcon" id="home_icon_font_id" />
              </div>
            </Link>
            <Link to={`/skills`}>
              <div className="menu_btn_container skillsIcon skills_icon_location" id="skills_icon"
                   onClick={ ()=> onClickButtonHandler('skills') }>
                <i className="fa fa-sitemap common_header_social_net_icon_font skillsIcon" id="skills_icon_font_id"/>
              </div>
            </Link>
            <Link to={`/projects`}>
              <div className="menu_btn_container projectsIcon projects_icon_location" id="projects_icon"
                   onClick={ ()=> onClickButtonHandler('projects') }>
                <i className="fa fa-folder common_header_social_net_icon_font projectsIcon" id="projects_icon_font_id"/>
              </div>
            </Link>

            <a href="https://www.linkedin.com/in/yegor-okoshkin-473310b1/"
               className="menu_btn_container projectsIcon linkedInIcon" target="_blank" >
              <i className="fa fa-linkedin common_header_social_net_icon_font projectsIcon" />
            </a>

          </Fragment>
        }
      </div>
      {menuStatusCounter.menuStatus &&
      <div className="menu_toggle_theme_container">
        <fieldset className="menu_toggle_theme_fieldset">
          <legend className="menu_toggle_theme_legend"> { t("themes") } </legend>
          <div className="menu_toggle_theme_checkbox_container">
            <input type="checkbox" name="paralaxTheme" className={"input-toggle"}
                   checked={citeDarkTheme.citeDarkTheme} onChange={(event) => onChangeHandle(event, 'dark')}/>
            <label htmlFor="paralaxTheme" className="menu_toggle_theme_checkbox_label"> { t("dark") } </label>
          </div>
          <div className="menu_toggle_theme_checkbox_container">
            <input type="checkbox" name="postalTheme" className={"input-toggle"}
                   checked={citeLightTheme.citeLightTheme} onChange={(event) => onChangeHandle(event, 'light')}/>
            <label htmlFor="postalTheme" className="menu_toggle_theme_checkbox_label"> { t("light") } </label>
          </div>
        </fieldset>
      </div>
      }
      {menuStatusCounter.menuStatus &&
      <div className="menu_toggle_theme_container">
        <fieldset className="menu_toggle_theme_fieldset">
          <legend className="menu_toggle_theme_legend"> { t("languages") } </legend>
          <div className="menu_toggle_theme_checkbox_container">
            <input type="checkbox" name="paralaxTheme" className={"input-toggle"}
                   checked={citeRussianTheme.citeRussianTheme} onChange={(event) => onChangeHandle(event, 'russian')}/>
            <label htmlFor="paralaxTheme" className="menu_toggle_theme_checkbox_label"> { t("russian") } </label>
          </div>
          <div className="menu_toggle_theme_checkbox_container">
            <input type="checkbox" name="postalTheme" className={"input-toggle"}
                   checked={citeEnglishTheme.citeEnglishTheme} onChange={(event) => onChangeHandle(event, 'english')}/>
            <label htmlFor="postalTheme" className="menu_toggle_theme_checkbox_label">{ t("english") }</label>
          </div>
        </fieldset>
      </div>
      }
      {menuStatusCounter.menuStatus && location.pathname === "/projects" &&
      <div className="menu_toggle_theme_container" >
        <fieldset className="menu_toggle_theme_fieldset" >
          <legend className="menu_toggle_theme_legend" > { t("themes") } </legend>
          <div className="menu_toggle_theme_checkbox_container" >
            <input type="checkbox" name="paralaxTheme" className={"input-toggle"}
                   checked={cardThemeParalax.cardThemeParalax} onChange={(event) => onChangeHandle(event, 'paralax')}/>
            <label htmlFor="paralaxTheme" className="menu_toggle_theme_checkbox_label"> { t("postal") } </label>
          </div>
          <div className="menu_toggle_theme_checkbox_container" >
            <input type="checkbox" name="postalTheme" className={"input-toggle"}
                   checked={cardThemePostal.cardThemePostal} onChange={(event) => onChangeHandle(event, 'postal')}/>
            <label htmlFor="postalTheme" className="menu_toggle_theme_checkbox_label" > { t("parallax") } </label>
          </div>
        </fieldset>
      </div>
      }

    </div>
  )
};

export default VerticalMenu;
