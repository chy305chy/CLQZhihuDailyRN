/**
 * Created by cuilanqing on 2017/5/27.
 */
import React, {Component, PropTypes} from 'react';
import {
    StyleSheet,
    View,
    Text,
    WebView
} from 'react-native';

const propTypes = {
    storyDetailActions: PropTypes.object,
    storyDetail: PropTypes.object.isRequired
};

class StoryDetail extends Component {

    componentWillMount() {
        const {params} = this.props.navigation.state;
        const {storyDetailActions} = this.props;

        storyDetailActions.requestStoryDetail(params.storyId);
    }

    render(){
        const {storyDetail} = this.props;

        if (storyDetail.storyDetail.id) {
            // let stylesContent = {...styles.content, backgroundColor: 'white'};
            let body = storyDetail.storyDetail.body;
            let image = '<div class="img-place-holder" style="overflow: hidden;position: relative"><img src="'+storyDetail.storyDetail.image+'" style="margin-top:-80px">'
                +'<div style="position:absolute;bottom:5px;right: 10px;color: white">'
                +storyDetail.storyDetail.image_source
                +'</div><div style="position:absolute;bottom:0;color: white;background-color: rgba(0,0,0,0.3);padding: 10px 10px 25px;width: 100%;font-size: 22px;word-break:break-all;">'
                +storyDetail.storyDetail.title
                +'</div></div>';
            body = body.replace('<div class="img-place-holder"></div>',image);
            let html = '<!DOCTYPE html><html><head><link rel="stylesheet" type="text/css" href="'
                + storyDetail.storyDetail.css[0]
                + '" />' + '</head><body>' + body
                + '</body></html>';

            return (
                <View style={{flex: 1}}>
                    <WebView
                        source={{html: html}}
                    />
                </View>
            )
        }
        return (
            <View style={{flex: 1}}>

            </View>
        )
    }
}

StoryDetail.propTypes = propTypes;
export default StoryDetail;