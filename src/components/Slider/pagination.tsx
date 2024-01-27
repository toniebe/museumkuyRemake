import {StyleSheet, View, Animated, useWindowDimensions} from 'react-native';
import React from 'react';

import {color} from '../../assets/style/colors';
import {PaginatorProps} from './type';

export default function Pagination({data, scrollX}: PaginatorProps) {
  const {width} = useWindowDimensions();
  return (
    <View style={{flexDirection: 'row', height: 34}}>
      {data.map((_: any, i: number) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [10, 30, 10],
          extrapolate: 'clamp',
        });

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: 'clamp',
        });

        return (
          <Animated.View
            style={[styles.dot, {width: dotWidth, opacity}]}
            key={i.toString()}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  dot: {
    height: 10,
    borderRadius: 5,
    backgroundColor: color.primary,
    marginHorizontal: 5,
    marginVertical: 10,
  },
});
