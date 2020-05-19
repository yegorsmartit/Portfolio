import React, { Fragment, useState} from 'react';
import './skillsStyle.css';
import CardONNMSkills from "../../components/cardONMMSkills";

const Skills = props =>{
  // const [cardType, setCardType] = useState(0);

  return (
    <Fragment>
      <div className="card_ONNM_skills_container">
        <CardONNMSkills skill={"javascript"} percents={80} index={1}/>
        <CardONNMSkills skill={"react"} percents={90} index={2}/>
        <CardONNMSkills skill={"typescript"} percents={70} index={3}/>
        <CardONNMSkills skill={"html"} percents={80} index={4}/>
        <CardONNMSkills skill={"css"} percents={70} index={5}/>
        <CardONNMSkills skill={"react native"} percents={80} index={6}/>
        <CardONNMSkills skill={"node js express"} percents={70} index={7}/>
        <CardONNMSkills skill={"mongo db"} percents={70} index={8}/>
        <CardONNMSkills skill={"mysql"} percents={60} index={9}/>
        <CardONNMSkills skill={"postgresql"} percents={60} index={10}/>
      </div>
    </Fragment>
  )
};

export default Skills;
