import { Navigation } from 'react-native-navigation';

import Onboarding from '../screens/Onboarding';
import CreateAccount from '../screens/CreateAccount';
import SignIn from '../screens/SignIn';
import Home from '../screens/Home';

export function registerScreens(store, Provider) {
	Navigation.registerComponent('RoundBook.Onboarding', () => Onboarding, store, Provider);
	Navigation.registerComponent('RoundBook.CreateAccount', () => CreateAccount, store, Provider);
	Navigation.registerComponent('RoundBook.SignIn', () => SignIn, store, Provider);
	Navigation.registerComponent('RoundBook.Home', () => Home, store, Provider);
}