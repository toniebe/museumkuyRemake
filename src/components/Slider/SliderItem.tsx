import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  ImageBackground,
} from 'react-native';
import React from 'react';
import {color} from '../../assets/style/colors';
import {SliderItemProps} from './type';
import StarRate from '../StarRate';

export default function SliderItem({data}: SliderItemProps) {
  const {width} = useWindowDimensions();
  return (
    <View style={[styles.container, {width: width}]}>
      <ImageBackground source={{uri: data.image_url}} style={[styles.image]}>
        <View style={[styles.content, {flexDirection: 'row'}]}>
          <View>
            <Text style={[styles.title]}>{data.title}</Text>
            <Text style={[styles.description]}>{data.desc}</Text>
          </View>
          <StarRate rate={data.rate} />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    backgroundColor: 'rgba(255, 255, 255, 0.69)',
    paddingVertical: 15,
    paddingHorizontal: 10,
    marginVertical: 15,
    marginHorizontal: 20,
  },
  image: {
    width: '100%',
    justifyContent: 'flex-end',
    borderRadius: 10,
    height: 200,
    marginHorizontal: 20,
  },
  title: {
    fontWeight: '400',
    marginBottom: 2,
    fontSize: 14,
    color: color.black,
    flexWrap: 'wrap',
    paddingHorizontal: 10,
  },
  description: {
    color: color.black,
    fontWeight: '600',

    fontSize: 16,
    paddingHorizontal: 10,
  },
});
