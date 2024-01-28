import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {color} from '../../assets/style/colors';

interface DividerTitleProps {
  title: string;
  onPress: any;
}

const DividerTitle = ({title = 'Jelajahi', onPress}: DividerTitleProps) => {
  return (
    <View style={styles.seeAllContainer}>
      <Text style={styles.textTitle}>{title}</Text>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.textSeeMore}>Lihat Semua</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DividerTitle;

const styles = StyleSheet.create({
  seeAllContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
  },
  textTitle: {
    color: color.black,
    fontWeight: '700',
  },
  textSeeMore: {
    color: color.primary,
  },
});
