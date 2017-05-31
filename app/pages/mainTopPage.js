/**
 * Created by cuilanqing on 2017/5/24.
 */
// 顶部viewPager单项view
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    Dimensions,
    Image,
    TouchableWithoutFeedback
} from 'react-native';
import * as Common from '../constants/constant';

class ViewPagerPage extends Component {

    // onImageSelected(storyId) {
    //     // const {navigate} = this.props.navigation;
    //     // navigate('StoryDetail', {storyId});
    //     console.log(storyId);
    // }

    render() {
        return (
            <TouchableWithoutFeedback onPress={()=>this.props.onImageSelected()}>
                <Image
                    source={{uri: this.props.imageSource}}
                    style={styles.image}
                >
                    <Text style={styles.title}>
                        {this.props.titleText}
                    </Text>
                </Image>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    image: {
        width: Dimensions.get('window').width,
        height: Common.topImageHeight,
        justifyContent: 'flex-end'
    },
    title: {
        marginBottom: 30,
        marginLeft: 10,
        marginRight: 10,
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        backgroundColor: 'transparent'
    }
});

export default ViewPagerPage;