/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  SafeAreaView,
  ScrollView,
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
import ModalCustom from '../../components/Modal';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({navigation}: any) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [titleModal, setTitleModal] = useState<string>('');

  const checkValue = (email: string, password: string) => {
    if (email !== '' && password !== '') {
      return true;
    }
    return false;
  };
  const handleUserLogin = () => {
    if (checkValue(email, password)) {
      auth()
        .signInWithEmailAndPassword(email, password)
        .then(data => {
          let user = JSON.stringify(data.user);
          AsyncStorage.setItem('user', user);
          navigation.replace('Home');
        })
        .catch(err => {
          console.error(err);
          setIsModalVisible(true);
          if (err.code === 'auth/user-not-found') {
            setTitleModal(
              'Anda belum terdaftar silahkan mendaftar terlebih dahulu',
            );
          } else if (err.code === 'auth/wrong-password') {
            setTitleModal('Email dan password tidak sesuai');
          } else {
            setTitleModal('ada kesalahan pada login');
          }
        });
    } else {
      setIsModalVisible(true);
      setTitleModal('Harap isi lengkap email dan password');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.contentContainer}>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Image source={MuseumKuyImage} style={styles.image} />
        </View>
        <View style={{justifyContent: 'center', flex: 1}}>
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
          <Button
            type="primary"
            size="large"
            title="SIGN IN"
            onPress={handleUserLogin}
          />
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
        <ModalCustom
          children={<View />}
          actionOnPress={() => setIsModalVisible(false)}
          isModalVisible={isModalVisible}
          title={titleModal}
          titleButton="OK"
        />
      </ScrollView>
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
