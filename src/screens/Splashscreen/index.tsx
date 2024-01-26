import {Image, StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';

const Splashscreen = ({navigation}: any) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Onboarding');
    }, 3000);
  });
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
