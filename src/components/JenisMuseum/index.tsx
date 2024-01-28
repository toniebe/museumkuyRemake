import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import {color} from '../../assets/style/colors';

interface JenisMuseumProps {
  image?: string;
  jenis: string;
}

const JenisMuseum = ({
  image,
  jenis,
  onPress,
}: JenisMuseumProps & TouchableOpacityProps) => {
  return (
    <TouchableOpacity style={[styles.container]} onPress={onPress}>
      <View style={styles.content}>
        <View style={styles.imageContainer}>
          <Image source={{uri: image}} style={styles.image} />
        </View>
        <View style={styles.fontContainer}>
          <Text style={styles.font}>{jenis}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default JenisMuseum;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    marginHorizontal: 10,
    borderRadius: 5,
    paddingHorizontal: 5,
    paddingVertical: 10,
    paddingBottom: 20,
    marginVertical: 10,
  },
  content: {
    paddingHorizontal: 2,
    paddingVertical: 15,
  },
  image: {
    width: 100,
    height: 80,
  },
  imageContainer: {
    alignItems: 'center',
  },
  fontContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  font: {
    fontWeight: 'bold',
    color: color.black,
  },
});
