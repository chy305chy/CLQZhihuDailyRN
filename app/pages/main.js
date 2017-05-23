/**
 * Created by cuilanqing on 2017/5/23.
 */
import React, {Component, PropTypes} from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';

const propTypes = {
    mainActions: PropTypes.object,
    main: PropTypes.object.isRequired
}

class Main extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>
                    Main页面
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 16
    }
});

Main.propTypes = propTypes;
export default Main;