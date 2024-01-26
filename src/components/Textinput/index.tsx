import {StyleSheet, TextInput, TextInputProps, View} from 'react-native';
import React from 'react';
import {color} from '../../assets/style/colors';

interface TextinputProps {
  placeholder?: string;
  value: string;
}

const Textinput = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
}: TextinputProps & TextInputProps) => {
  return (
    <View>
      <TextInput
        placeholder={placeholder}
        style={styles.TextinputContainer}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default Textinput;

const styles = StyleSheet.create({
  TextinputContainer: {
    borderWidth: 1,
    borderColor: color.grey,
    paddingLeft: 20,
    marginBottom: 20,
    borderRadius: 10,
    paddingVertical: 10,
  },
});
