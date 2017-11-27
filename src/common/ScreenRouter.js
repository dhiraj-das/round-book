import { Navigation } from 'react-native-navigation';

function showSelectWard() {
    Navigation.startSingleScreenApp({
        screen: {
            screen: 'RoundBook.SelectWard',
            navigatorStyle: {},
            navigatorButtons: {},
            animationType: 'fade'
        }  
    });
}

function showHome() {
    Navigation.startTabBasedApp({
        tabs: [
          {
            screen: 'RoundBook.Home',
            icon: require('../../assets/img/all_tasks.png'),
            iconInsets: { 
                top: 6, 
                bottom: -6
              }
          },
          {
            screen: 'RoundBook.Profile',
            icon: require('../../assets/img/profile.png'),
            iconInsets: { 
                top: 6,
                bottom: -6
            }
          }
        ],
        tabsStyle: {
            tabBarButtonColor: '#1F1F1F',
            tabBarSelectedButtonColor: '#fa4000',
            tabBarBackgroundColor: '#FFFFFF'
        },
        appStyle: {
            tabBarButtonColor: '#1F1F1F',
            tabBarSelectedButtonColor: '#fa4000',
            tabBarTranslucent: false,
        },
        passProps: {},
        animationType: 'slide-down'
    });
}

export { showSelectWard, showHome };