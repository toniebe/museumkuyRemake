import {View, Text, Image} from 'react-native';
import React from 'react';
import {color} from '../../assets/style/colors';

interface StarRateProps {
  rate: string;
}

const StarRate = ({rate}: StarRateProps) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <Image
        source={require('../../assets/icons/star-active.png')}
        style={{width: 20, height: 20}}
      />
      <Text
        style={{
          color: color.black,
          fontWeight: '600',

          fontSize: 16,
          paddingHorizontal: 10,
        }}>
        {rate}
      </Text>
    </View>
  );
};

export default StarRate;
