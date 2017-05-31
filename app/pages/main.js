/**
 * Created by cuilanqing on 2017/5/23.
 */
import React, {Component, PropTypes} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button,
    Dimensions,
    Image,
    ScrollView,
    ListView,
    TouchableWithoutFeedback
} from 'react-native';
import Drawer from 'react-native-drawer';
import ViewPager from 'react-native-viewpager';
import ViewPagerPage from './mainTopPage';
import MainNavBar from './mainNavBar';
import * as Common from '../constants/constant';
import store from 'react-native-simple-store';

const propTypes = {
    mainActions: PropTypes.object,
    main: PropTypes.object.isRequired
};

const drawerStyles = {
    drawer: {shadowColor: '#000000', shadowOpacity: 0.6, shadowRadius: 3},
    main: {paddingLeft: 0}
};

class Main extends Component {

    constructor(props) {
        super(props);

        this.renderListViewItem = this.renderListViewItem.bind(this);
        this.renderViewPagerPage = this.renderViewPagerPage.bind(this);

        this.state = {
            viewPagerDataSource: new ViewPager.DataSource({
                pageHasChanged: (p1, p2) => p1 !== p2
            }),
            storyListDataSource: new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2,
                sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
                getRowData: (dataBlob, sectionId, rowId) => dataBlob[rowId],
                getSectionHeaderData: (dataBlob, sectionId) => dataBlob[sectionId]
            })
        };
    }

    closeDrawer = () => {
        this._drawer.close()
    };

    openDrawer = () => {
        this._drawer.open()
    };

    // listView滚动监听
    onScroll(event, props) {
        let offsetY = event.nativeEvent.contentOffset.y;
        // console.log(offsetY);
        if (offsetY <= -64) {
            this._scrollView.scrollTo({x: 0, y: -64, animated: false});
        }
        let alphaRatio = offsetY / 150;
        this.setState({
            headerViewBackgroundColor: `rgba(1,131,209,${alphaRatio})`
        });
    }

    // 滚动到底部自动加载更多
    onEndReached() {
        const {mainActions} = this.props;

        store.get('isLoading').then((isLoading) => {
            if (!isLoading) {
                mainActions.requestPreviousStories();
            }
        });
    }

    onCellPressed(storyId) {
        // const {mainActions} = this.props;
        // mainActions.requestStoryDetail(rowData.id);
        const {navigate} = this.props.navigation;
        navigate('StoryDetail', {storyId});
    };

    onTopImageSelected(storyId) {
        const {navigate} = this.props.navigation;
        navigate('StoryDetail', {storyId});
    }

    componentWillMount() {
        const {mainActions} = this.props;
        store.save('isLoading', true);
        mainActions.requestLatestStories();
    }

    // 渲染顶部轮播单页page
    renderViewPagerPage(data) {
        return (
            <ViewPagerPage
                imageSource={data.image}
                titleText={data.title}
                storyId={data.id}
                onImageSelected={()=>this.onTopImageSelected(data.id)}
            />
        )
    }

    // 渲染ListView单个item
    renderListViewItem(rowData) {
        return (
            <TouchableWithoutFeedback onPress={()=>this.onCellPressed(rowData.id)}>
                <View style={styles.listItemContainer}>
                    <Text style={styles.storyTitle}>
                        {rowData.title}
                    </Text>
                    <Image
                        style={styles.storyImage}
                        source={{uri: rowData.images[0]}}
                    />
                </View>
            </TouchableWithoutFeedback>
        )
    };

    // 渲染ListView的头部
    renderListViewHeader() {
        const {main} = this.props;
        return (
            <ViewPager
                style={styles.viewPager}
                dataSource={this.state.viewPagerDataSource.cloneWithPages(main.topStories)}
                renderPage={this.renderViewPagerPage}
                isLoop={true}
                autoPlay={true}
            />
        );
    };

    renderSectionHeader(sectionData, sectionId) {
        return (
            <View style={styles.section}>
                <Text style={styles.sectionText}>
                    {sectionData}
                </Text>
            </View>
        )
    }



    render() {
        const {main} = this.props;
        // story列表
        let storyListView = null;
        if (main.stories) {
            storyListView = (
                <ListView
                    ref={(ref) => this._scrollView = ref}
                    style={styles.container}
                    dataSource={this.state.storyListDataSource.cloneWithRowsAndSections(main.stories, main.storySectionIds, main.storyRowIds)}
                    renderRow={this.renderListViewItem}
                    renderHeader={()=>this.renderListViewHeader()}
                    onScroll={(e) => this.onScroll(e, this.props)}
                    onEndReached={()=>this.onEndReached()}
                    onEndReachedThreshold={1}
                    scrollEventThrottle={12}
                    showsVerticalScrollIndicator={false}
                />
            )
        }

        return (
            <Drawer
                ref={(ref) => this._drawer = ref}
                content={
                    <View style={{backgroundColor: 'red'}} />
                }
                openDrawerOffset={0.3}
                tapToClose={true}
                type="displace"
                closedDrawerOffset={0}
                tweenHandler={(ratio) => ({
                    main: {opacity: (2-ratio)/2}
                })}
                styles={drawerStyles}
                captureGestures={true}
                negotiatePan={true}
                useInteractionManager={true}
                panOpenMask={0.1}
            >
                {storyListView}
                <MainNavBar
                    bgColor={this.state.headerViewBackgroundColor}
                    leftButtonClicked={this.openDrawer}
                />
            </Drawer>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: -Common.pullDistance,
        left: 0,
        bottom: 0,
        right: 0,
        backgroundColor: 'transparent'
    },
    viewPager: {
        width: Dimensions.get('window').width,
        height: Common.topImageHeight,
        marginTop: 0
    },
    listItemContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: '#fcfcfc',
        padding: 0,
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
        height: 100,
    },
    storyTitle: {
        position: 'absolute',
        top: 10,
        left: 10,
        width: Dimensions.get('window').width - 110,
        fontSize: 15,
        color: 'black',
        backgroundColor: 'transparent'
    },
    storyImage: {
        marginRight: 10,
        width: 85,
        height: 85
    },
    section: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: 6,
        backgroundColor: '#2196F3'
    },
    sectionText: {
        color: 'white',
        paddingHorizontal: 8,
        fontSize: 14
    },
});

Main.propTypes = propTypes;
export default Main;