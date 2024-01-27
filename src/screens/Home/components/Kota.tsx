import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';

interface KotaProps {
  image: string;
  name: string;
}

const Kota = ({image, name, onPress}: KotaProps & TouchableOpacityProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.imageContainer}>
        <View style={styles.image}>
          <Image source={{uri: image}} style={styles.imageKota} />
        </View>
        <View style={styles.fontContainer}>
          <Text style={{}}>{name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Kota;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    marginRight: 10,
    marginTop: 10,
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  image: {
    flex: 1.2,
  },
  imageKota: {
    width: 70,
    height: 70,
  },
  fontContainer: {
    flex: 2,
    alignItems: 'center',
    marginHorizontal: 5,
  },
});
