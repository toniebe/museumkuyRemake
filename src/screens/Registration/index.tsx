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
import {MuseumKuyImage} from '../../assets/images';
import {color} from '../../assets/style/colors';
import Textinput from '../../components/Textinput';
import Button from '../../components/Button';
import ModalCustom from '../../components/Modal';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Registration = ({navigation}: any) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordConfirm, setPasswordConfirm] = useState<string>('');
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [titleModal, setTitleModal] = useState<string>('');

  const checkValue = (
    email: string,
    password: string,
    confirmPassword: string,
  ) => {
    if (email !== '' && password !== '') {
      if (password === confirmPassword) {
        return true;
      } else {
        return false;
      }
    }
    return false;
  };
  const handleOnSubmit = () => {
    if (checkValue(email, password, passwordConfirm)) {
      auth()
        .createUserWithEmailAndPassword(email, password)
        .then(data => {
          console.log('ini data ->', data);
          setTitleModal('Registrasi Telah Berhasil');
          setIsModalVisible(true);
          let user = JSON.stringify(data.user);
          AsyncStorage.setItem('user', user);
          setEmail('');
          setPassword('');
          navigation.replace('Login');
        })
        .catch(error => {
          console.error(error);
          if (error.code === 'auth/email-already-in-use') {
            setIsModalVisible(true);
            setTitleModal('Email sudah digunakan');
          }

          if (error.code === 'auth/invalid-email') {
            setIsModalVisible(true);
            setTitleModal('Email atau password tidak sesuai');
          }
        });
    } else {
      setIsModalVisible(true);
      setTitleModal('Harap Lengkapi Email dan Password');
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={styles.contentContainer}>
        <View style={{flex: 0.5, alignItems: 'center'}}>
          <Image source={MuseumKuyImage} style={styles.image} />
        </View>
        <View style={{justifyContent: 'space-between', flex: 1}}>
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
        <View style={{flex: 1, justifyContent: 'flex-end'}}>
          <Button
            type="primary"
            size="large"
            title="SIGN UP"
            onPress={handleOnSubmit}
          />
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
        <ModalCustom
          children={<View />}
          titleButton="OK"
          title={titleModal}
          actionOnPress={() => {
            setIsModalVisible(false);
          }}
          isModalVisible={isModalVisible}
        />
      </ScrollView>
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
    flexGrow: 1,
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
