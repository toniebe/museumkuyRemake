/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import StarRate from '../../../components/StarRate';

interface MuseumHomeProps {
  image: string;
  nama: string;
  kota: string;
  rate: string;
}

const MuseumHome = ({
  image,
  nama,
  kota,
  rate,
  ...nativeProps
}: MuseumHomeProps & TouchableOpacityProps) => {
  return (
    <TouchableOpacity style={styles.container} {...nativeProps}>
      <View style={styles.imageContainer}>
        <Image
          source={{uri: image}}
          style={{width: 106, height: 69, borderRadius: 20}}
        />
      </View>
      <View style={styles.fontContainer}>
        <Text style={styles.fontMuseumHome}>{nama}</Text>
        <Text style={styles.fontKota}>{kota}</Text>
      </View>
      <View style={styles.ratingContainer}>
        <StarRate rate={rate} />
      </View>
    </TouchableOpacity>
  );
};

export default MuseumHome;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 5,
    marginVertical: 5,
    backgroundColor: 'white',
    borderRadius: 10,
    flex: 1,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  imageContainer: {
    flex: 2,
    paddingVertical: 10,
    paddingLeft: 10,
  },
  fontContainer: {
    flex: 3,
    marginLeft: 20,
    marginTop: 10,
  },
  fontMuseumHome: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  fontKota: {
    fontSize: 10,
    color: '#C4C4C4',
  },
  ratingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingVertical: 20,
    flexDirection: 'row',
    marginRight: 10,
  },
  ratingImage: {
    width: 15,
    height: 15,
  },
  fontRating: {
    height: 18,
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 4,
  },
});
