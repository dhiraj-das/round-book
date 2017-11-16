import { Navigation } from 'react-native-navigation';
import { registerScreens } from './screens';
 
registerScreens();

const initializeApp = Navigation.startSingleScreenApp({
    screen: {
        screen: 'RoundBook.Onboarding', // unique ID registered with Navigation.registerScreen
        navigatorStyle: {}, // override the navigator style for the screen, see "Styling the navigator" below (optional)
        navigatorButtons: {} // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
    }  
});

export { initializeApp } ;