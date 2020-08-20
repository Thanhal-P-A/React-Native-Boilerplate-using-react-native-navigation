import {Navigation} from 'react-native-navigation';
import {setSplash} from './app/Navigation';

Navigation.events().registerAppLaunchedListener(() => {
  setSplash();
});
