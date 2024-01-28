import {FlatList, SafeAreaView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  refreshRemoteConfig,
  remoteConfigGetValue,
} from '../../utils/remoteConfig';
import JenisMuseum from '../../components/JenisMuseum';
import {navigationProps} from '../../router/navigationTypes';

const TypeMuseum = ({navigation}: navigationProps) => {
  const [dataMuseum, setDataMuseum] = useState<any>([]);

  const getTypeDataMesuem = async () => {
    const result = remoteConfigGetValue('category_museum').asString();
    const data = JSON.parse(result);
    setDataMuseum(data);
  };

  useEffect(() => {
    refreshRemoteConfig();
    getTypeDataMesuem();
  }, []);

  return (
    <SafeAreaView>
      <FlatList
        data={dataMuseum}
        renderItem={({item}) => (
          <JenisMuseum
            image={item.image_url}
            jenis={item.name}
            onPress={() =>
              navigation.navigate('DetailTypeMuseum', {
                museumName: item.name,
              })
            }
          />
        )}
        numColumns={2}
      />
    </SafeAreaView>
  );
};

export default TypeMuseum;
