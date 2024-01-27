import {FlatList, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {navigationProps} from '../../router/navigationTypes';
import SearchInput from '../../components/SearchInput';
import getDataFromApi from '../../utils/api';
import CardRegion from '../../components/CardRegion';
import {color} from '../../assets/style/colors';

const City = ({navigation, route}: navigationProps) => {
  const {idProvince, nameProvince}: any = route?.params;
  const [search, setSearch] = useState<string>('');
  const [dataCity, setdataCity] = useState<any>([]);
  const [filteredData, setFilteredData] = useState([]);

  const getAllCity = async () => {
    let response = await getDataFromApi('kota', `provinsi_id=${idProvince}`);
    console.log('response', response);
    setdataCity(response.data);
  };
  useEffect(() => {
    getAllCity();
    navigation.setOptions({
      title: nameProvince,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // Filter the data based on the search input
    const filtered = dataCity.filter((item: any) =>
      item.name.toLowerCase().includes(search.toLowerCase()),
    );
    setFilteredData(filtered);
  }, [search, dataCity]);

  const Separator = () => {
    return <View style={styles.separator} />;
  };
  return (
    <View style={{flex: 1, backgroundColor: color.white}}>
      <SearchInput onChangeText={value => setSearch(value)} value={search} />
      <FlatList
        style={{flex: 1}}
        data={filteredData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}: any) => (
          <CardRegion
            name={item.name}
            onPress={() =>
              navigation.navigate('AllCity', {
                idProvince: item.id,
                nameProvince: item.name,
              })
            }
          />
        )}
        ItemSeparatorComponent={Separator}
      />
    </View>
  );
};

export default City;

const styles = StyleSheet.create({
  separator: {
    borderBottomWidth: 3,
    borderBottomColor: '#AAA2A2',
  },
});
