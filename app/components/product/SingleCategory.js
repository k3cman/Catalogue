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

import { createStackNavigator } from 'react-navigation';

import SingleProduct from './SingleProduct';

class SingleCategory extends Component {
  state = {
    products: [
      {
        id: 1,
        name: 'Product',
        image: 'http://cms.enmongroup.com/images/items/TlPNfbXQ6x.jpg'
      },
      {
        id: 2,
        name: 'Product',
        image: 'http://cms.enmongroup.com/images/items/TlPNfbXQ6x.jpg'
      },
      {
        id: 3,
        name: 'Product',
        image: 'http://cms.enmongroup.com/images/items/TlPNfbXQ6x.jpg'
      },
      {
        id: 4,
        name: 'Product',
        image: 'http://cms.enmongroup.com/images/items/TlPNfbXQ6x.jpg'
      },
      {
        id: 5,
        name: 'Product',
        image: 'http://cms.enmongroup.com/images/items/TlPNfbXQ6x.jpg'
      },
      {
        id: 6,
        name: 'Product',
        image: 'http://cms.enmongroup.com/images/items/TlPNfbXQ6x.jpg'
      },
      {
        id: 7,
        name: 'Product',
        image: 'http://cms.enmongroup.com/images/items/TlPNfbXQ6x.jpg'
      }
    ]
  };
  static navigationOptions = {
    header: null
  };
  _onPressCard = () => {
    return this.props.navigation.navigate('product');
  };
  render() {
    const productsMap = this.state.products.map(product => {
      return (
        <TouchableOpacity
          style={styles.singleCat}
          onPress={this._onPressCard}
          key={product.id}
        >
          <View style={styles.card}>
            <Image
              style={{ width: 150, height: 150, resizeMode: 'contain' }}
              source={{
                uri: product.image
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
              {product.name}
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
          <View style={styles.catalogue}>{productsMap}</View>
        </SafeAreaView>
      </ScrollView>
    );
  }
}

export default createStackNavigator({
  main: SingleCategory,
  product: SingleProduct
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
