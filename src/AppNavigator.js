import { Navigation } from 'react-native-navigation';
import { registerScreens } from './screens';
 
registerScreens();

const initializeApp = Navigation.startSingleScreenApp({
    screen: {
        screen: 'RoundBook.Onboarding',
        navigatorStyle: {},
        navigatorButtons: {}
    }  
});

export { initializeApp } ;