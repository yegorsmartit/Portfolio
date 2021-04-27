import React from 'react';
import { connect } from 'react-redux';
import './style.css';
import history from '../../utils/history';

function SocialIconsBlock() {

  const loaderCheck = ()=>{
    history.push('/loader')
  };

  return (
    <div >
      <div className="common_header">

        {/*<div className="common_header_left_block">*/}

          {/*<div className="common_header_social_net_container mail">*/}
            {/*<i className="fa fa-envelope-square common_header_social_net_icon_font mail"/>*/}
          {/*</div>*/}
          {/*<div className="common_header_social_net_container mail">*/}
            {/*<i className="fa fa-phone-square common_header_social_net_icon_font mail"/>*/}
          {/*</div>*/}
        {/*</div>*/}
        {/*<div className="common_header_right_block">*/}
          {/*<div className="common_header_social_net_container facebook">*/}
            {/*/!*<span className="tooltip_text">Tooltip text</span>*!/*/}
            {/*<i className="fa fa-facebook facebook common_header_social_net_icon_font"/>*/}
          {/*</div>*/}
          {/*<a className="tooltip" href="#">Tooltip<span>Вот такая подсказочка получилась :).</span></a>.*/}

          {/*<div className="common_header_social_net_container instagram">*/}
          {/*<i className="fa fa-instagram instagram common_header_social_net_icon_font" />*/}
          {/*</div>*/}
          {/*<a href="https://www.linkedin.com/in/yegor-okoshkin-473310b1/"*/}
             {/*className="common_header_social_net_container linkedin"*/}
             {/*target="_blank">*/}
            {/*<i className="fa fa-linkedin common_header_social_net_icon_font linkedin"/>*/}
          {/*</a>*/}
          {/*<div className="common_header_social_net_container vk">*/}
          {/*<i className="fa fa-vk vk common_header_social_net_icon_font" />*/}
          {/*</div>*/}
          {/*<div className="common_header_social_net_container twitter">*/}
          {/*<i className="fa fa-twitter twitter common_header_social_net_icon_font" />*/}
          {/*</div>*/}
          {/*<div className="common_header_social_net_container google">*/}
          {/*<i className="fa fa-google google common_header_social_net_icon_font" />*/}
          {/*</div>*/}
          {/*<div className="common_header_social_net_container telegram" onClick={ ()=>loaderCheck()}>*/}
            {/*<i className="fa fa-telegram telegram common_header_social_net_icon_font"/>*/}
          {/*</div>*/}
          {/*<div className="common_header_social_net_container skype">*/}
            {/*<i className="fa fa-skype skype common_header_social_net_icon_font"/>*/}
          {/*</div>*/}
        {/*</div>*/}

      </div>
    </div>
  )
}


const mapStateToProps = store => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapDispatchToProps, mapStateToProps)(SocialIconsBlock)
