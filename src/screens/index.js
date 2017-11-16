import { Navigation } from 'react-native-navigation';

import Onboarding from '../screens/Onboarding';

export function registerScreens(store, Provider) {
	Navigation.registerComponent('RoundBook.Onboarding', () => Onboarding, store, Provider);
}