import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';

import { createStackNavigator } from 'react-navigation';

import SingleProduct from './SingleProduct';

class SingleCategory extends Component {
  state = {
    products: [],
    isLoading:true
  };
  componentDidMount = () => {
    fetch('https://enmon-server.herokuapp.com/products/14/0')
    .then(res => res.json())
    .then(data => this.setState({products:data,isLoading:false}))
    .catch(err => alert(err));
  }
  static navigationOptions = {
    header: null
  };
  _onPressCard = (id) => {
    return this.props.navigation.navigate('product',{itemId:`${id}`});
  };
  render() {
    const productsMap = this.state.products.map(product => {
      return (
        <TouchableOpacity
          style={styles.singleCat}
          onPress={() => this.props.navigation.navigate('product',{itemId:product.id})}
          key={product.ident}
        >
          <View style={styles.card}>
            <Image
              style={{ width: 140, height: 140, padding:2 ,resizeMode: 'contain' }}
              source={{
                uri: `http://cms.enmongroup.com/${product.image}`
              }}
            />
            
          </View>
          <Text
              style={{
                textAlign: 'center',
                textTransform: 'uppercase',
                fontWeight: '600',
                padding: 6,
                width:140
              }}
            >
              {product.title}
            </Text>
        </TouchableOpacity>
      );
    });
    if(this.state.isLoading){
      return (
        <ScrollView
        style={{ flex: 1 }}
        scrollEventThrottle={16}
        style={{ backgroundColor: '#f1f1f1' }}
      >
        <SafeAreaView style={styles.screenStyle}>
          <View style={styles.catalogue}>
            <ActivityIndicator size="large" color="#333333" />
          </View>
        </SafeAreaView>
      </ScrollView>
      )
    }else{

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
    width:140,
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
