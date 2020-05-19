import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './style.css';
import { setUser } from '../../actions/user';
import SocialIconsBlock from "../socialIconsBlock";


function StableHeader() {

    return (
        <header className="">
          <SocialIconsBlock/>
        </header>
    )
}

StableHeader.defaultProps = {
    user: null,
}

StableHeader.propTypes = {
    setUserData: PropTypes.func.isRequired,
}

const mapStateToProps = store => ({
    user: store.user,
});

const mapDispatchToProps = dispatch => ({
    setUserData: data => dispatch(setUser(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(StableHeader);
