import {FlatList, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import getDataFromApi from '../../utils/api';
import CardRegion from '../../components/CardRegion';
import {color} from '../../assets/style/colors';
import {navigationProps} from '../../router/navigationTypes';
import SearchInput from '../../components/SearchInput';

const Province = ({navigation}: navigationProps) => {
  const [dataProvince, setDataProvince] = useState<any>([]);
  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  const getAllProvince = async () => {
    let response = await getDataFromApi('provinsi');
    console.log('response', response);
    setDataProvince(response.data);
  };
  useEffect(() => {
    getAllProvince();
  }, []);
  useEffect(() => {
    // Filter the data based on the search input
    const filtered = dataProvince.filter((item: any) =>
      item.name.toLowerCase().includes(search.toLowerCase()),
    );
    setFilteredData(filtered);
  }, [search, dataProvince]);

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

export default Province;

const styles = StyleSheet.create({
  separator: {
    borderBottomWidth: 3,
    borderBottomColor: '#AAA2A2',
  },
});
