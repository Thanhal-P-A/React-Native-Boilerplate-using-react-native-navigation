import {Navigation} from 'react-native-navigation';
import {Splash, Login, Home, Profile} from '../Screens';
import {Provider} from 'react-redux';

import configureStore from '../Store';
const {persistor, store} = configureStore();

Navigation.registerComponentWithRedux(
  'app.Splash',
  () => Splash,
  Provider,
  store,
);

Navigation.registerComponentWithRedux(
  'app.Login',
  () => Login,
  Provider,
  store,
);

Navigation.registerComponentWithRedux('app.Home', () => Home, Provider, store);

Navigation.registerComponentWithRedux(
  'app.Profile',
  () => Profile,
  Provider,
  store,
);

export const setSplash = () => {
  Navigation.setRoot({
    root: {
      stack: {
        id: 'Splash',
        children: [
          {
            component: {
              name: 'app.Splash',
            },
          },
        ],
        options: {
          topBar: {visible: false},
        },
      },
    },
  });
};

export const setLoginNav = () => {
  Navigation.setRoot({
    root: {
      stack: {
        id: 'LoginStack',
        children: [
          {
            component: {
              name: 'app.Login',
            },
          },
        ],
        options: {
          topBar: {visible: false},
        },
      },
    },
  });
};

export const setAppNav = () => {
  Navigation.setRoot({
    root: {
      stack: {
        id: 'AppStack',
        children: [
          {
            component: {
              name: 'app.Home',
              options: {
                topBar: {visible: false},
                statusBar: {
                  visible: false,
                },
              },
            },
          },
        ],
      },
    },
  });
};
