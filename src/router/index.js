import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import history from '../utils/history';
import Main from '../containers/main';
import VerticalMenu from "../containers/verticalMenu";

export default class MainRouter extends Component {

    render() {
        return (
            <Router history={history}>
              <div>
                <VerticalMenu/>
                <Main/>
              </div>
            </Router>
        );
    }
}
