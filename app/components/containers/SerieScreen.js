import React, { Component } from 'react'
import { Platform, Text, View, ActivityIndicator,TouchableOpacity,Image,StyleSheet, SafeAreaView, ScrollView, } from 'react-native'
import {createStackNavigator} from 'react-navigation'
import axios from 'axios';

import SingleProduct from '../product/SingleProduct';

class SerieScreen extends Component {
    static navigationOptions = {
        header: null
      };
    state={
        loading:true,
        products:[]
    }

    componentDidMount = () => {
        axios.get(`https://enmon-server.herokuapp.com/products/${this.props.navigation.state.params.text}`)
          .then(res => {
            const products = res.data;
            console.log(res.data)
            this.setState({products, loading:false})
          })
    }
  render() {
    console.log(this.state.products)
      const productsMap = this.state.products.map(product => {return(
        <TouchableOpacity
        style={styles.singleCat}
        onPress={() => this.props.navigation.navigate('product',{itemId:product.id})}
        key={product.id}
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
      )});
      if(this.state.loading === true){
        return(<View>
        <ActivityIndicator
            color="#333"
            size="large"
        />
      </View>)
      }else{
        return (
            <ScrollView
          style={{ flex: 1 }}
          scrollEventThrottle={16}
          style={{ backgroundColor: '#f1f1f1' }}
        >
          <SafeAreaView style={styles.screenStyle}>
          <View style={styles.render}>
          <Image
            style={{ width: '100%', height: 300 ,resizeMode: 'cover' }}
            source={{
              uri: `${this.props.navigation.state.params.mainImg}`
            }}
          />
          </View>
            <View style={styles.catalogue}>{productsMap}</View>
          </SafeAreaView>
        </ScrollView>
          )
      }
    
  }
}

export default createStackNavigator({
    main: SerieScreen,
    product: SingleProduct
  });
  
  const styles = StyleSheet.create({
    render:{
      flex:1,
      paddingBottom:20
    },
    btnLoad:{
      width:150,
    },
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
      paddingTop: 0,
      paddingBottom: 100
    }
  });