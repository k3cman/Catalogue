import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity
} from 'react-native';
import HeadingTextCenter from '../common/HeadingTextCenter';

import { createStackNavigator } from 'react-navigation';
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
        id: 14
      },
      {
        title: 'LEPAK',
        imgUri: 'http://cms.enmongroup.com/images/categories/0F6E3z0AxW.jpg',
        color: '#333',
        id: 17
      },
      {
        title: 'SANITARIJA',
        imgUri: 'http://cms.enmongroup.com/images/categories/i4cpAvLniP.jpg',
        color: '#333',
        id: 22
      },
      {
        title: 'KABINE',
        imgUri: 'http://cms.enmongroup.com/images/categories/RZm3bPl5Cl.jpg',
        color: 'white',
        id: 11
      },
      {
        title: 'SLAVINE',
        imgUri: 'http://cms.enmongroup.com/images/categories/uAKJeYlndI.jpg',
        color: '#333',
        id: 5
      },

      {
        title: 'KADE',
        imgUri: 'http://cms.enmongroup.com/images/categories/eIPeq42b4e.jpg',
        color: '#333',
        id: 12
      }
    ]
  };
  static navigationOptions = {
    header: null
  };

  _onPressCard = () => {
    return ;
  };
  render() {
    const catMap = this.state.categories.map(cat => {
      return (
        <TouchableOpacity
          style={styles.singleCat}
          onPress={()=>this.props.navigation.navigate('category',{catId:cat.id})}
          key={cat.id}
        >
          <View style={styles.card}>
            <Image
              style={{ width: 140, height: 140, resizeMode: 'cover' }}
              source={{
                uri: cat.imgUri
              }}
            />
            <Text
              style={{
                textAlign: 'center',
                textTransform: 'uppercase',
                fontWeight: '600',
                padding: 6
              }}
            >
              {cat.title}
            </Text>
          </View>
        </TouchableOpacity>
      );
    });
    return (
      <ScrollView
        style={{ flex: 1 }}
        scrollEventThrottle={16}
        style={{ backgroundColor: '#f1f1f1' }}
      >
        <SafeAreaView style={styles.screenStyle}>
          <View>
            <HeadingTextCenter title="KATEGORIJE PROIZVODA" />
          </View>
          <View style={styles.catalogue}>{catMap}</View>
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
  singleCat: {
    marginTop: 10
  },
  card: {
    borderColor: '#ccc',
    borderWidth: 0.5,
    borderRadius: 3,
    backgroundColor: 'white'
  },
  catalogue: {
    flex: 1,
    width: '100%',
    backgroundColor: '#f1f1f1',
    justifyContent: 'space-around',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 10
  },
  screenStyle: {
    flex: 1,
    width: '100%',
    backgroundColor: '#F1F1F1',
    paddingTop: 40,
    paddingBottom: 100
  }
});
