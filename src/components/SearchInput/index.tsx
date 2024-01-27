import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {TextInput, TextInputProps} from 'react-native-paper';
import {color} from '../../assets/style/colors';

const SearchInput = ({onChangeText, value, placeholder}: TextInputProps) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textinput}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
      />
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/icons/loupe.png')}
          style={styles.image}
        />
      </View>
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  textinput: {
    height: 30,
    width: '80%',
    borderColor: color.grey,
    borderWidth: 1,
    marginVertical: 10,
    marginLeft: 10,
    padding: 5,
    backgroundColor: color.white,
  },
  image: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
  imageContainer: {
    backgroundColor: color.grey,
    padding: 8,
  },
});
