/**
 * Created by cuilanqing on 2017/5/23.
 */
import { NavigationActions } from 'react-navigation';

const reset = (navigation, routeName) => {
    const resetAction = NavigationActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({routeName})]
    });
    navigation.dispatch(resetAction);
};

export default {
    reset
};