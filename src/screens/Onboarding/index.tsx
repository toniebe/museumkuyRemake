import {Image, SafeAreaView, StyleSheet, Text} from 'react-native';
import React from 'react';
import {color} from '../../assets/style/colors';
import {OnboardingImage} from '../../assets/images';
import Button from '../../components/Button';
import {navigationProps} from '../../router/navigationTypes';

const Onboarding = ({navigation}: navigationProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={OnboardingImage} style={styles.image} />
      <Text style={styles.text}>Grow Your Knowledge</Text>

      <Button
        title="SIGN UP"
        type="secondary"
        size="medium"
        onPress={() => navigation.navigate('Registration')}
      />
      <Button
        title="SIGN IN"
        type="primary"
        size="medium"
        onPress={() => navigation.navigate('Login')}
      />
    </SafeAreaView>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 200,
    width: 200,
    resizeMode: 'contain',
    marginVertical: 20,
  },
  text: {
    fontSize: 20,
    color: color.black,
    lineHeight: 20,
    marginVertical: 15,
  },
});
