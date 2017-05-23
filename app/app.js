/**
 * Created by cuilanqing on 2017/5/23.
 */
import { StackNavigator } from 'react-navigation';
import  SplashContainer from './containers/splashContainer';
import MainContainer from './containers/mainContainer';

const App = StackNavigator (
    {
        Splash: {
            screen: SplashContainer,
            navigationOptions: {
                header: null
            }
        },
        Main: {
            screen: MainContainer,
            navigationOptions: {
                headerLeft: null
            }
        }
    },
    {
        headerMode: 'float',
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#3e9ce9'
            },
            headerTitleStyle: {
                color: '#fff',
                fontSize: 20
            },
            headerTintColor: '#fff'
        }
    }
);

export default App;