import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Slider from '../../components/Slider';
import {color} from '../../assets/style/colors';
import {
  refreshRemoteConfig,
  remoteConfigGetValue,
} from '../../utils/remoteConfig';
import DividerTitle from '../../components/DividerTitle';
import Kota from './components/Kota';
import JenisMuseum from './components/JenisMuseum';
import MuseumHome from './components/MuseumHome';

const Home = ({navigation}: any) => {
  const [dataSlider, setDataSlider] = useState<any>([]);
  const [dataCity, setDataCity] = useState<any>([]);
  const [dataMuseum, setDataMuseum] = useState<any>([]);

  const getDataCity = async () => {
    const result = remoteConfigGetValue('city_home').asString();
    const data = JSON.parse(result);
    setDataCity(data);
  };

  const getDataSlider = async () => {
    const result = remoteConfigGetValue('slider_home').asString();
    const data = JSON.parse(result);
    setDataSlider(data);
  };

  const getTypeDataMesuem = async () => {
    const result = remoteConfigGetValue('category_home').asString();
    const data = JSON.parse(result);
    setDataMuseum(data);
  };

  useEffect(() => {
    refreshRemoteConfig();

    getTypeDataMesuem();
    getDataCity();
    getDataSlider();
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={{flex: 1}}>
        <View style={styles.sliderContainer}>
          <Text style={styles.titleSlider}>Museum Terpopuler</Text>
          <Slider data={dataSlider} navigation={navigation} />
        </View>
        <View style={styles.jelajahiContainer}>
          <DividerTitle
            title="Jelajahi Kota"
            onPress={() => navigation.navigate('AllProvince')}
          />
          <FlatList
            data={dataCity}
            renderItem={({item}) => (
              <Kota
                name={item.nama}
                image={item.image_url}
                onPress={() =>
                  navigation.navigate('DetailTypeMuseum', {
                    museumName: item.nama,
                  })
                }
              />
            )}
            ListEmptyComponent={<View />}
            contentContainerStyle={{flexGrow: 1}}
            style={{flex: 1}}
            numColumns={2}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
        <View style={styles.jenisMuseumContainer}>
          <DividerTitle
            title="Jenis Museum"
            onPress={() => navigation.navigate('TypeMuseum')}
          />
          <FlatList
            data={dataMuseum}
            renderItem={({item}) => (
              <JenisMuseum
                image={item.image_url}
                jenis={item.name}
                color={item.color}
                onPress={() =>
                  navigation.navigate('DetailTypeMuseum', {
                    museumName: item.name,
                  })
                }
              />
            )}
            horizontal
            contentContainerStyle={{marginTop: 10}}
            keyExtractor={(item, index) => index.toString()}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={styles.jenisMuseumContainer}>
          <DividerTitle
            title="Rekomendasi Museum"
            onPress={() => navigation.navigate('ListMuseum')}
          />
          <FlatList
            data={dataSlider}
            renderItem={({item}) => (
              <MuseumHome
                image={item.image_url}
                kota={item.title}
                nama={item.desc}
                rate={item.rate}
                onPress={() => navigation.navigate('DetailMuseum')}
              />
            )}
            contentContainerStyle={{
              paddingVertical: 10,
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  titleSlider: {
    fontSize: 16,
    color: color.primary,
    fontWeight: '700',
    marginBottom: 10,
    marginHorizontal: 5,
  },
  sliderContainer: {
    flex: 1,
    backgroundColor: color.white,
    paddingTop: 20,
  },
  jelajahiContainer: {
    flex: 1,
    backgroundColor: color.white,
    marginTop: 10,
    paddingVertical: 15,
    paddingHorizontal: 5,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  jenisMuseumContainer: {
    flex: 1,
    backgroundColor: color.white,
    paddingVertical: 15,
    paddingHorizontal: 5,
  },
});
