import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  SafeAreaView,
  ImageBackground,
  StyleSheet
} from 'react-native';

export default class SingleCategory extends Component {
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
  render() {
    return (
      <ScrollView style={{ flex: 1 }} scrollEventThrottle={16}>
        <SafeAreaView style={styles.screenStyle}>
          <View style={styles.catalogue}>
            {this.state.products.map(product => (
              <View style={styles.category} key={product.id}>
                <ImageBackground
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                  source={{
                    uri: product.image
                  }}
                >
                  <Text
                    style={{
                      fontFamily: 'Righteous',
                      fontSize: 20,
                      textDecorationLine: 'underline',
                      textDecorationStyle: 'solid',
                      color: 'white'
                    }}
                  >
                    {product.name}
                  </Text>
                </ImageBackground>
              </View>
            ))}
          </View>
        </SafeAreaView>
      </ScrollView>
    );
  }
}

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
  },
  category: {
    width: '45%',
    height: 150,
    marginTop: 20,
    elevation: 1,
    borderRadius: 6
  }
});
