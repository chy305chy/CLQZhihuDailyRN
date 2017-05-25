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
                header: null
            }
        }
    },
    {
        headerMode: 'screen',
        navigationOptions: {
            headerStyle: {
                // backgroundColor: '#3e9ce9'
                backgroundColor: 'rgba(255,255,255, 0)'
            },
            headerTitleStyle: {
                color: '#fff',
                fontSize: 16
            },
            headerTintColor: '#fff'
        }
    }
);

export default App;