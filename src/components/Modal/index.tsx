/* eslint-disable react-native/no-inline-styles */
import {Text, View} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import {color} from '../../assets/style/colors';
import Button from '../Button';

interface modalCustomProps {
  isModalVisible: boolean;
  children: any;
  title?: string;
  titleButton: string;
  actionOnPress?: any;
}

const ModalCustom = ({
  actionOnPress,
  titleButton = 'OK',
  title,
  isModalVisible,
  children,
}: modalCustomProps) => {
  return (
    <View style={{flex: 1, zIndex: 2}}>
      <Modal isVisible={isModalVisible}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: color.white,
            padding: 10,
            paddingVertical: 20,
            borderRadius: 10,
          }}>
          <Text>{title}</Text>
          {children}
          <Button
            title={titleButton}
            onPress={actionOnPress}
            type="primary"
            size="small"
          />
        </View>
      </Modal>
    </View>
  );
};

export default ModalCustom;
