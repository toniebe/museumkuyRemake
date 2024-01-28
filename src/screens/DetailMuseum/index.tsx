/* eslint-disable react-hooks/exhaustive-deps */
import {
  FlatList,
  Image,
  ImageBackground,
  Linking,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {navigationProps} from '../../router/navigationTypes';
import {color} from '../../assets/style/colors';
import TopTab from './components/TopTab';
import {
  refreshRemoteConfig,
  remoteConfigGetValue,
} from '../../utils/remoteConfig';

const DetailMuseum = ({navigation, route}: navigationProps) => {
  const {museumKey, museumPlace, museumImage, museumName}: any = route?.params;
  const [dataMuseum, setDataMuseum] = useState<any>({});
  const [currentTab, setCurrentTab] = useState<string>('description');

  const getDataMuseum = async () => {
    const result = await remoteConfigGetValue(museumKey).asString();
    const data = JSON.parse(result);
    console.log('data ', data);
    setDataMuseum(data);
  };

  useEffect(() => {
    refreshRemoteConfig();
    getDataMuseum();
  }, []);

  const RenderItem = useCallback(() => {
    if (currentTab == 'description') {
      return (
        <View style={{flex: 1, marginTop: 15}}>
          <Text>{dataMuseum.description}</Text>
        </View>
      );
    } else if (currentTab == 'gallery') {
      return (
        <View style={{flex: 1, marginTop: 15}}>
          <FlatList
            data={dataMuseum.image}
            numColumns={2}
            renderItem={({item}) => (
              <Image
                source={{uri: item}}
                style={{
                  width: 150,
                  height: 150,
                  marginHorizontal: 10,
                  marginVertical: 10,
                }}
              />
            )}
            style={{flex: 1}}
          />
        </View>
      );
    } else if (currentTab == 'location') {
      return (
        <View style={{flex: 1, marginTop: 15}}>
          <TouchableOpacity onPress={() => Linking.openURL(dataMuseum.maps)}>
            <Text style={{color: '#0000EE', textAlign: 'center'}}>
              {dataMuseum.address}
            </Text>
          </TouchableOpacity>
        </View>
      );
    }
  }, [currentTab, dataMuseum]);

  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground
        source={{uri: museumImage}}
        style={styles.imageContainer}>
        <TouchableOpacity
          style={styles.backContainer}
          onPress={() => navigation.goBack()}>
          <Image
            source={require('../../assets/icons/left-arrows.png')}
            style={styles.backImage}
          />
        </TouchableOpacity>
        <View style={styles.museumTitleContainer}>
          <View style={styles.textContainer}>
            <Text style={[styles.text, {fontWeight: '600'}]}>{museumName}</Text>
            <Text style={styles.text}>{museumPlace}</Text>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.contentContainer}>
        <TopTab
          onPressDescription={() => setCurrentTab('description')}
          onPressGalery={() => setCurrentTab('gallery')}
          onPressLocation={() => setCurrentTab('location')}
        />
        <ScrollView style={{flex: 1}}>
          <RenderItem />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default DetailMuseum;

const styles = StyleSheet.create({
  imageContainer: {
    flex: 0.5,
    width: '100%',
    height: '100%',
  },
  backImage: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
  backContainer: {
    width: 25,
    marginVertical: 10,
    marginHorizontal: 10,
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: 50,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: color.white,
    marginTop: -20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  museumTitleContainer: {
    flex: 0.8,
    justifyContent: 'flex-end',
  },
  textContainer: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    marginHorizontal: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  text: {
    color: color.white,
    fontSize: 16,
  },
});
