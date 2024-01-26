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
import {color} from '../../assets/style/colors';
import {MuseumKuyImage} from '../../assets/images';
import Textinput from '../../components/Textinput';
import Button from '../../components/Button';

const Login = ({navigation}: any) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={{flex: 0.5, alignItems: 'center'}}>
          <Image source={MuseumKuyImage} style={styles.image} />
        </View>
        <View style={{justifyContent: 'center', flex: 0.5}}>
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
        </View>
        <View style={{flex: 0.5, marginTop: 20}}>
          <Button type="primary" size="large" title="SIGN IN" />
          <TouchableOpacity onPress={() => navigation.replace('Registration')}>
            <Text
              style={{
                fontSize: 12,
                textAlign: 'center',
                marginTop: 5,
                color: color.black,
              }}>
              Don't Have Account? SIGN UP Here
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;

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
    width: 200,
    height: 200,
  },
});
