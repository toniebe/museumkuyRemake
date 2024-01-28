import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import React from 'react';

interface CardRegionProps {
  name: string;
}
const CardRegion = ({
  name,
  onPress,
}: CardRegionProps & TouchableOpacityProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text>{name}</Text>
      <Image
        source={require('../../assets/icons/next.png')}
        style={styles.image}
      />
    </TouchableOpacity>
  );
};

export default CardRegion;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  image: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
});
