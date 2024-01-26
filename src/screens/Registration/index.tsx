/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {MuseumKuyImage} from '../../assets/images';
import {color} from '../../assets/style/colors';
import Textinput from '../../components/Textinput';
import Button from '../../components/Button';

const Registration = ({navigation}: any) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordConfirm, setPasswordConfirm] = useState<string>('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={{flex: 0.5, alignItems: 'center'}}>
          <Image source={MuseumKuyImage} style={styles.image} />
        </View>
        <View style={{justifyContent: 'space-around', flex: 1}}>
          <Textinput
            placeholder="Email"
            value={email}
            onChangeText={value => setEmail(value)}
            keyboardType="email-address"
            secureTextEntry={false}
          />
          <Textinput
            placeholder="Password"
            value={password}
            onChangeText={value => setPassword(value)}
            secureTextEntry={true}
          />
          <Textinput
            placeholder="Confirm Password"
            value={passwordConfirm}
            onChangeText={value => setPasswordConfirm(value)}
            secureTextEntry={true}
          />
        </View>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Button type="primary" size="large" title="SIGN UP" />
          <TouchableOpacity onPress={() => navigation.replace('Login')}>
            <Text
              style={{
                fontSize: 12,
                textAlign: 'center',
                marginTop: 5,
                color: color.black,
              }}>
              You Have Account? SIGN IN HERE
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Registration;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.primary,
    justifyContent: 'center',
  },
  contentContainer: {
    flex: 1,
    backgroundColor: color.white,
    marginVertical: 20,
    marginHorizontal: 20,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  image: {
    width: 100,
    height: 100,
  },
});
