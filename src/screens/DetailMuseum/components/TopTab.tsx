import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import React from 'react';

type ItemTopTabProps = {
  title: string;
  image: any;
};

type TopTabProps = {
  onPressDescription: any;
  onPressGalery: any;
  onPressLocation: any;
};

const TopTab = ({
  onPressDescription,
  onPressGalery,
  onPressLocation,
}: TopTabProps) => {
  const ItemTopTab = ({
    title,
    image,
    ...nativeProps
  }: ItemTopTabProps & TouchableOpacityProps) => {
    return (
      <TouchableOpacity style={styles.containerTopTab} {...nativeProps}>
        <View style={styles.coverIcon}>
          <Image source={image} style={styles.icon} />
        </View>
        <Text style={styles.textTopTab}>{title}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <ItemTopTab
        image={require('../../../assets/icons/description.png')}
        title="Description"
        onPress={onPressDescription}
      />
      <ItemTopTab
        image={require('../../../assets/icons/gallery.png')}
        title="Gallery"
        onPress={onPressGalery}
      />
      <ItemTopTab
        image={require('../../../assets/icons/location.png')}
        title="Location"
        onPress={onPressLocation}
      />
    </View>
  );
};

export default TopTab;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  coverIcon: {
    backgroundColor: '#EDEDED',
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  icon: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
  textTopTab: {
    fontSize: 12,
    color: '#C4C4C4',
  },
  containerTopTab: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
});
