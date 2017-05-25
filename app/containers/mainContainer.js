/**
 * Created by cuilanqing on 2017/5/23.
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as mainCreators from '../actions/main';
import Main from '../pages/main';

class MainContainer extends Component {
    static navigationOptions = {

    };

    render() {
        return (
            <Main {...this.props}/>
        );
    }
}

const mapStateToProps = (state) => {
    const {main} = state;
    return {
        main
    }
};

const mapDispatchToProps = (dispatch) => {
    const mainActions = bindActionCreators(mainCreators, dispatch);
    return {
        mainActions
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);