import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  TouchableOpacity
} from 'react-native';
import HeadingTextCenter from '../common/HeadingTextCenter';
import { createStackNavigator } from 'react-navigation';

import CatalogueCard from '../catalogue/CategoryCard';
import SingleProduct from '../product/SingleProduct';

export default class Catalogue extends Component {
  render() {
    return (
      <ScrollView style={{ flex: 1 }} scrollEventThrottle={16}>
        <SafeAreaView style={styles.screenStyle}>
          <View>
            <HeadingTextCenter title="KATEGORIJE PROIZVODA" />
          </View>
          <View style={styles.catalogue}>
            <CatalogueCard
              title="PLOČICE"
              imgUri="https://www.zorka-keramika.rs/images/ideje/dnevne_sobe_i_trpezarije/Accademia_Mix_30x60.jpg"
              textColor="white"
            />

            <CatalogueCard
              title="PLOČICE"
              imgUri="https://www.zorka-keramika.rs/images/ideje/dnevne_sobe_i_trpezarije/Accademia_Mix_30x60.jpg"
              textColor="white"
            />
            <CatalogueCard
              title="PLOČICE"
              imgUri="https://www.zorka-keramika.rs/images/ideje/dnevne_sobe_i_trpezarije/Accademia_Mix_30x60.jpg"
              textColor="white"
            />
            <CatalogueCard
              title="PLOČICE"
              imgUri="https://www.zorka-keramika.rs/images/ideje/dnevne_sobe_i_trpezarije/Accademia_Mix_30x60.jpg"
              textColor="white"
            />
            <CatalogueCard
              title="PLOČICE"
              imgUri="https://www.zorka-keramika.rs/images/ideje/dnevne_sobe_i_trpezarije/Accademia_Mix_30x60.jpg"
              textColor="white"
            />
            <CatalogueCard
              title="PLOČICE"
              imgUri="https://www.zorka-keramika.rs/images/ideje/dnevne_sobe_i_trpezarije/Accademia_Mix_30x60.jpg"
              textColor="white"
            />
          </View>
        </SafeAreaView>
        <AppStack />
      </ScrollView>
    );
  }
}

const AppStack = createStackNavigator({
  singleProduct: SingleProduct
});

const styles = StyleSheet.create({
  catalogue: {
    flex: 1,
    width: '100%',
    backgroundColor: '#f1f1f1',
    justifyContent: 'space-around',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 30
  },
  screenStyle: {
    flex: 1,
    width: '100%',
    backgroundColor: '#F1F1F1',
    paddingTop: 40,
    paddingBottom: 100
  }
});
