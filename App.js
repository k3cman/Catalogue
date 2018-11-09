import React, { Fragment } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import {
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation';

import Explore from './app/components/screens/Explore';
import Calculator from './app/components/screens/Calculator';
import Saved from './app/components/screens/Saved';
import Catalogue from './app/components/screens/Catalogue';
import SingleProduct from './app/components/product/SingleProduct';

export default createBottomTabNavigator(
  {
    Explore: {
      screen: Explore,
      navigationOptions: {
        tabBarLabel: 'POČETNA',
        tabBarIcon: ({ tintColor }) => (
          <SimpleLineIcons name="home" color={tintColor} size={24} />
        )
      }
    },
    Catalogue: {
      screen: Catalogue,
      navigationOptions: {
        tabBarLabel: 'KATALOG',
        tabBarIcon: ({ tintColor }) => (
          <SimpleLineIcons name="book-open" color={tintColor} size={24} />
        )
      }
    },
    Saved: {
      screen: Saved,
      navigationOptions: {
        tabBarLabel: 'SAČUVANO',
        tabBarIcon: ({ tintColor }) => (
          <SimpleLineIcons name="heart" color={tintColor} size={24} />
        )
      }
    },
    Calculator: {
      screen: Calculator,
      navigationOptions: {
        tabBarLabel: 'KALKULATOR',
        tabBarIcon: ({ tintColor }) => (
          <SimpleLineIcons name="calculator" color={tintColor} size={24} />
        )
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: '#0C4DA2',
      inactiveTintColor: 'grey',
      style: {
        backgroundColor: '#FAFAFA',
        borderTopWidth: 0,
        shadowOffset: { width: 5, height: 3 },
        shadowColor: 'black',
        shadowOpacity: 0.5,
        elevation: 5,
        paddingLeft: 10,
        paddingRight: 10
      }
    }
  }
);
