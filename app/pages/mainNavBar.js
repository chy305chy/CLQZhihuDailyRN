/**
 * Created by cuilanqing on 2017/5/25.
 */
// 首页顶部的导航view
import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Text,
    Dimensions,
    TouchableOpacity,
    Image
} from 'react-native';

const leftButtonNormalImage = require('../images/nav_left_button@2x.png');

class MainTopView extends Component {

    handleLeftButtonClicked() {
        console.log('hahahahah');
        this.props.leftButtonClicked();
    }

    render() {
        return (
            <View
                style={[styles.container, {backgroundColor: this.props.bgColor}]}
            >
                <Text style={styles.titleText}>
                    今日热闻
                </Text>

                <TouchableOpacity
                    onPress={()=>this.handleLeftButtonClicked()}
                >
                    <Image
                        style={styles.leftButton}
                        source={leftButtonNormalImage}/>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        height: 64,
        marginTop: 0,
        justifyContent: 'flex-start'
    },
    titleText: {
        fontSize: 15,
        color: 'white',
        backgroundColor: 'transparent',
        marginTop: 25,
        marginLeft: Dimensions.get('window').width / 2 - 30
    },
    leftButton: {
        marginTop: -15,
        marginLeft: 10,
        width: 23,
        height: 18
    },
    leftButtonImage: {
        width: 23,
        height: 18,
        backgroundColor: 'transparent'
    }
});

export default MainTopView;