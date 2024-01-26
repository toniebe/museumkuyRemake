import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {color} from '../../assets/style/colors';

interface ButtonProps {
  type: 'primary' | 'secondary';
  title: string;
  size?: 'small' | 'medium' | 'large';
  fontWeight?: 'regular' | 'semibold' | 'bold';
}

const Button = ({
  type,
  title,
  size,
  fontWeight,
  onPress,
}: ButtonProps & TouchableOpacityProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{...styles({size, type}).buttonContainer, ...styles}}>
      <Text style={styles({type, fontWeight}).buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

interface StylesProps {
  size?: string;
  type?: string;
  fontWeight?: string;
}

interface StyleSheetType {
  buttonContainer: ViewStyle;
  buttonText: TextStyle;
}

type StylesFunctionProps = (props: StylesProps) => StyleSheetType;

const styles: StylesFunctionProps = ({size, type, fontWeight}) =>
  StyleSheet.create<StyleSheetType>({
    buttonContainer: {
      borderWidth: 0.5,
      borderColor: color.primary,
      paddingHorizontal: 30,
      paddingVertical: 10,
      borderRadius: 50,
      backgroundColor: type === 'primary' ? color.primary : color.white,
      width: size === 'small' ? '30%' : size === 'medium' ? '50%' : '100%',
      alignItems: 'center',
      marginVertical: 5,
      marginHorizontal: 5,
    },
    buttonText: {
      fontSize: 18,
      color: type === 'primary' ? color.white : color.primary,
      fontWeight:
        fontWeight === 'regular'
          ? '400'
          : fontWeight === 'semibold'
          ? '500'
          : '700',
    },
  });
