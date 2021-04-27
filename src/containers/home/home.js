import React, {useEffect, useContext} from 'react';
import './style.css';
import {useTranslation} from "react-i18next";
import { ThemesStatus } from "../../contexts/themes";

const HomePage = ()=> {

  const { t, i18n } = useTranslation();
  const [ citeEnglishTheme, setCiteEnglishTheme]  = useContext( ThemesStatus);
  const [ citeRussianTheme, setCiteRussianTheme]  = useContext( ThemesStatus);

  useEffect(()=>{
    i18n.changeLanguage("en");
  },[]);

  return (
    citeEnglishTheme.citeEnglishTheme ?
      <div className="homePageContainer" >
        <span className="homePageSpanEng homePageSpanEng1">{ t("mainPageSpanText1") } </span>
        <span className="homePageSpanEng homePageSpanEng2">{ t("mainPageSpanText2") } </span>
        <span className="homePageSpanEng homePageSpanEng3">{ t("mainPageSpanText3") } </span>
        <span className="homePageSpanEng homePageSpanEng4">{ t("mainPageSpanText4") } </span>
        <span className="homePageSpanEng homePageSpanEng5">{ t("mainPageSpanText5") } </span>
        <span className="homePageSpanEng homePageSpanEng6">{ t("mainPageSpanText6") } </span>
        <span className="homePageSpanEng homePageSpanEng7">{ t("mainPageSpanText7") } </span>
        <span className="homePageSpanEng homePageSpanEng8">{ t("mainPageSpanText8") } </span>
        <span className="homePageSpanEng homePageSpanEng9">{ t("mainPageSpanText9") } </span>
      </div>
    : <div className="homePageContainer" >
        <span className="homePageSpanRus homePageSpanRus1">{ t("mainPageSpanText1") } </span>
        <span className="homePageSpanRus homePageSpanRus2">{ t("mainPageSpanText2") } </span>
        <span className="homePageSpanRus homePageSpanRus3">{ t("mainPageSpanText3") } </span>
        <span className="homePageSpanRus homePageSpanRus4">{ t("mainPageSpanText4") } </span>
        <span className="homePageSpanRus homePageSpanRus5">{ t("mainPageSpanText5") } </span>
        <span className="homePageSpanRus homePageSpanRus6">{ t("mainPageSpanText6") } </span>
        <span className="homePageSpanRus homePageSpanRus7">{ t("mainPageSpanText7") } </span>
        <span className="homePageSpanRus homePageSpanRus8">{ t("mainPageSpanText8") } </span>
        <span className="homePageSpanRus homePageSpanRus9">{ t("mainPageSpanText9") } </span>
      </div>
  )
};

export default HomePage;
