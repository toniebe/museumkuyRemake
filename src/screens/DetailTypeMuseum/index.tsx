/* eslint-disable react-hooks/exhaustive-deps */
import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {navigationProps} from '../../router/navigationTypes';
import {BASE_URL} from '@env';

const DetailTypeMuseum = ({navigation, route}: navigationProps) => {
  const {museumName}: any = route?.params;

  useEffect(() => {
    navigation.setOptions({title: museumName});
  }, []);
  return (
    <View>
      <Text>DetailTypeMuseum</Text>
      <Text>{BASE_URL}</Text>
    </View>
  );
};

export default DetailTypeMuseum;

const styles = StyleSheet.create({});
