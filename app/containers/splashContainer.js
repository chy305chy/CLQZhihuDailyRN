/**
 * Created by cuilanqing on 2017/5/23.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as startImageCreators from '../actions/startImage';
import Splash from '../pages/splash';

class SplashContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <Splash {...this.props} />;
    }
}

const mapStateToProps = (state) => {
    const {splash} = state;
    return {
        splash
    };
};

const mapDispatchToProps = (dispatch) => {
    const splashActions = bindActionCreators(startImageCreators, dispatch);
    return {
        splashActions
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SplashContainer);

