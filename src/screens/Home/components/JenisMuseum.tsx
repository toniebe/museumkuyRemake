import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';

interface JenisMuseumProps {
  image?: string;
  jenis: string;
  color: string;
}

const JenisMuseum = ({
  image,
  jenis,
  color,
  onPress,
}: JenisMuseumProps & TouchableOpacityProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, {backgroundColor: color}]}>
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
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    marginHorizontal: 10,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  content: {
    paddingHorizontal: 2,
    paddingVertical: 6,
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
    color: 'white',
  },
});
