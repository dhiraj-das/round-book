import { Navigation } from 'react-native-navigation';

import Onboarding from '../screens/Onboarding';
import CreateAccount from '../screens/CreateAccount';
import CreateAccountEmail from '../screens/CreateAccountEmail';
import CreateAccountPassword from '../screens/CreateAccountPassword';
import SignIn from '../screens/SignIn';
import Home from '../screens/Home';
import Splash from '../screens/Splash';
import Profile from '../screens/Profile';
import SelectWard from '../screens/SelectWard';
import JoinWard from '../screens/JoinWard';

export function registerScreens(store, Provider) {
	Navigation.registerComponent('RoundBook.Onboarding', () => Onboarding, store, Provider);
	Navigation.registerComponent('RoundBook.CreateAccount', () => CreateAccount, store, Provider);
	Navigation.registerComponent('RoundBook.CreateAccountEmail', () => CreateAccountEmail, store, Provider);
	Navigation.registerComponent('RoundBook.CreateAccountPassword', () => CreateAccountPassword, store, Provider);
	Navigation.registerComponent('RoundBook.SignIn', () => SignIn, store, Provider);
	Navigation.registerComponent('RoundBook.Home', () => Home, store, Provider);
	Navigation.registerComponent('RoundBook.Splash', () => Splash, store, Provider);
	Navigation.registerComponent('RoundBook.Profile', () => Profile, store, Provider);
	Navigation.registerComponent('RoundBook.SelectWard', () => SelectWard, store, Provider);
	Navigation.registerComponent('RoundBook.JoinWard', () => JoinWard, store, Provider);
}