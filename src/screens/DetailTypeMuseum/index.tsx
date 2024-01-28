/* eslint-disable react-hooks/exhaustive-deps */
import {FlatList, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {navigationProps} from '../../router/navigationTypes';
import SearchInput from '../../components/SearchInput';
import MuseumItem from './components/MuseumItem';
import {
  refreshRemoteConfig,
  remoteConfigGetValue,
} from '../../utils/remoteConfig';

const DetailTypeMuseum = ({navigation, route}: navigationProps) => {
  const {museumName}: any = route?.params;
  const [dataMuseum, setDataMuseum] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [search, setSearch] = useState<string>('');

  const getDataMesuem = async () => {
    const result = remoteConfigGetValue('list_museum').asString();
    const data = JSON.parse(result);
    setDataMuseum(data);
  };

  useEffect(() => {
    refreshRemoteConfig();
    getDataMesuem();
    navigation.setOptions({title: museumName});
  }, []);

  useEffect(() => {
    // Filter the data based on the search input
    const filtered = dataMuseum.filter((item: any) =>
      item.name.toLowerCase().includes(search.toLowerCase()),
    );
    setFilteredData(filtered);
  }, [search, dataMuseum]);
  return (
    <View style={styles.container}>
      <View style={styles.up}>
        <SearchInput value={search} onChangeText={value => setSearch(value)} />
      </View>
      <View style={styles.down}>
        <FlatList
          data={filteredData}
          renderItem={({item}: any) => (
            <MuseumItem
              title={item.name}
              place={item.place}
              image_url={item.image_url}
              onPress={() =>
                navigation.navigate('DetailMuseum', {
                  museumKey: item.key,
                  museumPlace: item.place,
                  museumImage: item.image_url,
                  museumName: item.name,
                })
              }
            />
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default DetailTypeMuseum;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A01F1F',
  },
  up: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  down: {
    flex: 5,
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 10,
    alignItems: 'center',
  },
});
