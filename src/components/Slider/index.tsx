import {StyleSheet, View, FlatList, Animated} from 'react-native';
import React, {useRef} from 'react';
import {dataTypes} from './type';
import SliderItem from './SliderItem';
import Pagination from './pagination';

const Slider = ({data}: dataTypes) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);

  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;
  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <FlatList
          data={data}
          renderItem={({item}) => <SliderItem data={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {
              useNativeDriver: false,
            },
          )}
          scrollEventThrottle={32}
          viewabilityConfig={viewConfig}
          ref={slidesRef}
        />
      </View>
      <Pagination data={data} scrollX={scrollX} />
    </View>
  );
};

export default Slider;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
