import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import React from 'react';
import {color} from '../../../../assets/style/colors';

interface MuseumItemProps {
  image_url: string;
  title: string;
  place: string;
}

const MuseumItem = ({
  image_url,
  title,
  place,
  onPress,
  ...nativeProps
}: MuseumItemProps & TouchableOpacityProps) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      {...nativeProps}>
      <View style={styles.up}>
        <Image
          source={{
            uri: image_url,
          }}
          style={styles.image}
        />
      </View>
      <View style={styles.down}>
        <View style={styles.text}>
          <Text style={styles.fontMuseum}>{title}</Text>
          <Text style={styles.fontKota}>{place}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MuseumItem;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: color.grey,
    borderRadius: 15,
    marginVertical: 10,
  },
  up: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },

  down: {
    flexDirection: 'row',
  },

  image: {
    width: 302,
    height: 127,
    borderRadius: 20,
  },
  text: {
    paddingLeft: 20,
    paddingBottom: 20,
  },
  fontMuseum: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  fontKota: {
    fontSize: 10,
    color: '#C4C4C4',
  },
});
