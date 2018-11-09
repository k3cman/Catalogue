import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  Button,
  TouchableNativeFeedback,
  TouchableWithoutFeedback
} from 'react-native';
import HeadingTextCenter from '../common/HeadingTextCenter';

import { createStackNavigator } from 'react-navigation';
import CatalogueCard from '../catalogue/CategoryCard';
import SingleProduct from '../product/SingleProduct';
import SingleCategory from '../product/SingleCategory';

class Catalogue extends Component {
  state = {
    categories: [
      {
        title: 'PLOČICE',
        imgUri:
          'https://www.zorka-keramika.rs/images/ideje/dnevne_sobe_i_trpezarije/Accademia_Mix_30x60.jpg',
        color: 'white',
        id: 1
      },
      {
        title: 'LEPAK',
        imgUri: 'http://cms.enmongroup.com/images/categories/0F6E3z0AxW.jpg',
        color: '#333',
        id: 6
      },
      {
        title: 'SANITARIJA',
        imgUri: 'http://cms.enmongroup.com/images/categories/i4cpAvLniP.jpg',
        color: '#333',
        id: 2
      },
      {
        title: 'KABINE',
        imgUri: 'http://cms.enmongroup.com/images/categories/RZm3bPl5Cl.jpg',
        color: 'white',
        id: 3
      },
      {
        title: 'SLAVINE',
        imgUri: 'http://cms.enmongroup.com/images/categories/uAKJeYlndI.jpg',
        color: '#333',
        id: 4
      },

      {
        title: 'KADE',
        imgUri: 'http://cms.enmongroup.com/images/categories/eIPeq42b4e.jpg',
        color: '#333',
        id: 5
      }
    ]
  };
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <ScrollView style={{ flex: 1 }} scrollEventThrottle={16}>
        <SafeAreaView style={styles.screenStyle}>
          <View>
            <HeadingTextCenter title="KATEGORIJE PROIZVODA" />
          </View>
          <View style={styles.catalogue}>
            {this.state.categories.map(cat => (
              <TouchableWithoutFeedback
                onPress={() => this.props.navigation.navigate('category')}
                key={cat.id}
              >
                <CatalogueCard
                  title={cat.title}
                  imgUri={cat.imgUri}
                  textColor={cat.color}
                  key={cat.id}
                  style={{ width: '100%', height: '100%' }}
                />
              </TouchableWithoutFeedback>
            ))}
            {/* <CatalogueCard
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
            /> */}
            <Button
              title="singleProduct"
              onPress={() => this.props.navigation.navigate('category')}
            />
          </View>
        </SafeAreaView>
      </ScrollView>
    );
  }
}

export default createStackNavigator({
  main: Catalogue,
  product: SingleProduct,
  category: SingleCategory
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
