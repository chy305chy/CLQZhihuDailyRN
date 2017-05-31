/**
 * Created by cuilanqing on 2017/5/27.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as detailCreators from '../actions/storyDetail';
import StoryDetail from '../pages/storyDetail';

class StoryDetailContainer extends Component {
    render() {
        return (
            <StoryDetail {...this.props}/>
        );
    }
}


const mapStateToProps = (state) => {
    const {storyDetail} = state;
    return {
        storyDetail
    }
};

const mapDispatchToProps = (dispatch) => {
    const storyDetailActions = bindActionCreators(detailCreators, dispatch);
    return {
        storyDetailActions
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(StoryDetailContainer);