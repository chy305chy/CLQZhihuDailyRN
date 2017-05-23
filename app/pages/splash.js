/**
 * Created by cuilanqing on 2017/5/23.
 */
import React, { Component, PropTypes } from 'react';
import {
    View,
    StyleSheet,
    Image,
    Dimensions,
    Animated
} from 'react-native';
import store from 'react-native-simple-store';
import NavigationUtil from '../utils/navigationUtil';

const logoImage = require('../images/launch_logo.png');

const propTypes = {
    splashActions: PropTypes.object,
    splash: PropTypes.object.isRequired
};

class Splash extends Component {

    constructor(props) {
        super(props);
        this.state = {
            originalOpacity: new Animated.Value(0)
        }
    }

    componentWillMount() {
        const { splashActions } = this.props;
        splashActions.requestStartImageUrl();
    }

    componentDidMount () {
        Animated.timing(this.state.originalOpacity, {
            toValue: 1,
            duration: 2000
        }).start(() => {
            // 动画完成时的回调
            this.timer = setTimeout(() => {
                // 延迟1.5s后进入主界面
                NavigationUtil.reset(this.props.navigation, 'Main');
            }, 1500)
        });
    }

    componentWillUnmount() {
        // 记得移除timer
        clearTimeout(this.timer);
    }

    render() {
        const { splash } = this.props;

        if (splash.startImageUrl === '') {
            return (
                <View style={styles.container} />
            )
        }
        return (
            <Animated.View style={[styles.container, {opacity: this.state.originalOpacity}]}>
                <Image style={styles.backgroundImage} source={{uri: splash.startImageUrl}}>
                    <Image style={styles.logoImage} source={logoImage}/>
                </Image>
            </Animated.View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    backgroundImage: {
        margin: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
    logoImage: {
        width: 125,
        height: 45,
        marginBottom: 30
    }
});

Splash.propTypes = propTypes;
export default Splash;