import {Image, StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import remoteConfig from '@react-native-firebase/remote-config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ActivateConfig, GetAllConfig} from '../../utils/remoteConfig';

const Splashscreen = ({navigation}: any) => {
  const getRemoteConfig = async () => {
    await remoteConfig().setConfigSettings({
      minimumFetchIntervalMillis: 300,
    });
  };

  const handleNavigation = async () => {
    let userProfile = await AsyncStorage.getItem('user');
    if (userProfile) {
      setTimeout(() => navigation.replace('Home'), 3000);
    } else {
      setTimeout(() => navigation.replace('Onboarding'), 3000);
    }
  };
  useEffect(() => {
    getRemoteConfig();
    ActivateConfig(() => {
      GetAllConfig(
        () => {},
        (err: boolean) => {
          if (err) {
            console.log(err);
          } else {
            handleNavigation();
          }
        },
      );
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/splashscreen.png')}
        style={styles.image}
      />
    </View>
  );
};

export default Splashscreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
  },
});
