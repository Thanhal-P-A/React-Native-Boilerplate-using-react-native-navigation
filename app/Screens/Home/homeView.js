import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import {Navigation} from 'react-native-navigation';

import netInfo from '../../Components/netInfo';
import styles from './styles';
import images from '../../Assets/Images';
import icons from '../../Assets/Icons';
import AppStyles from '../../AppStyles';

function HomeView(props) {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground style={styles.imageBG} source={images.loginBG}>
        {!props.Global.isNetworkAvailable && netInfo()}
        <View style={styles.main}>
          <Text style={styles.textHome}>HOME SCREEN</Text>
          <Image style={styles.iconHome} source={icons.home} />
          <TouchableOpacity
            style={styles.buttonClick}
            onPress={() =>
              Navigation.push('AppStack', {
                component: {
                  name: 'app.Profile',
                },
              })
            }>
            <Text>Go to profile</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

export default HomeView;
