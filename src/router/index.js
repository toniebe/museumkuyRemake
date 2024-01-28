import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splashscreen from '../screens/Splashscreen';
import Onboarding from '../screens/Onboarding';
import Login from '../screens/Login';
import Registration from '../screens/Registration';
import Home from '../screens/Home';
import TypeMuseum from '../screens/TypeMuseum';
import DetailTypeMuseum from '../screens/DetailTypeMuseum';
import Province from '../screens/DetailRegion/Province';
import City from '../screens/DetailRegion/City';
import DetailMuseum from '../screens/DetailMuseum';

const Stack = createNativeStackNavigator();
const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splashscreen"
          component={Splashscreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Registration"
          component={Registration}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TypeMuseum"
          component={TypeMuseum}
          options={{
            title: 'Kategori Museum',
          }}
        />
        <Stack.Screen
          name="DetailTypeMuseum"
          component={DetailTypeMuseum}
          options={{
            title: 'Kategori Museum',
            headerStyle: {
              backgroundColor: '#A01F1F',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="AllProvince"
          component={Province}
          options={{
            title: 'Jelajahi Provinsi',
            headerStyle: {
              backgroundColor: '#A01F1F',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="AllCity"
          component={City}
          options={{
            title: 'Jelajahi Kota',
            headerStyle: {
              backgroundColor: '#A01F1F',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="DetailMuseum"
          component={DetailMuseum}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
