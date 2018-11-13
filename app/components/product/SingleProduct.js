import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Image,
  StyleSheet,
  ActivityIndicator
} from 'react-native';

class SingleProduct extends Component {
  state={
    details:null,
    isLoading:true
  }
  static navigationOptions = {
    header: null
  };
  componentDidMount = () => {
    console.log(this.props.navigation.state.params.itemId)
    const itemId = Number(this.props.navigation.state.params.itemId);
    fetch('https://enmon-server.herokuapp.com/details/'+itemId)
    .then(res => res.json())
    .then(data => this.setState({details:{data}}))
    .then(() => this.setState({isLoading:false}))
  }
  render() {
    if(this.state.isLoading ===true){
      return (<ScrollView
        style={{ flex: 1 }}
        scrollEventThrottle={16}
        style={{ backgroundColor: '#f1f1f1' }}
      >
        <SafeAreaView style={styles.screenStyle}>
          <View style={styles.catalogue}>
            <ActivityIndicator size="large" color="#333333" />
          </View>
        </SafeAreaView>
      </ScrollView>)
    }else{
      return (
        <ScrollView
          style={{ flex: 1 }}
          scrollEventThrottle={16}
          style={{ backgroundColor: '#f1f1f1' }}
        >
          <SafeAreaView style={styles.screenStyle}>
            <View style={styles.catalogue}>
              <View style={styles.card}>
                <Image
                  style={{ width: 350, height: 350, resizeMode: 'contain' }}
                  source={{
                    uri: 'http://cms.enmongroup.com/'+this.state.details.data[0].image
                  }}
                />
              </View>
              <View
                style={{
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Text style={styles.productName}>{this.state.details.data[0].title}</Text>
                <Text style={styles.dimension}>22.5x60</Text>
              </View>
            </View>
            <View style={styles.table}>
              <View style={styles.row}>
                <Text
                  style={{
                    fontWeight: '700',
                    flex: 1,
                    borderRightColor: '#ccc',
                    borderRightWidth: 0.5,
  
                    fontSize: 12
                  }}
                >
                  Brand
                </Text>
                <Text style={{ flex: 3, fontSize: 12, paddingLeft: 10 }}>
                  ARGENTA CERAMICA SL
                </Text>
              </View>
              <View style={styles.row}>
                <Text
                  style={{
                    fontWeight: '700',
                    flex: 1,
                    borderRightColor: '#ccc',
                    borderRightWidth: 0.5,
  
                    fontSize: 12
                  }}
                >
                  Brand
                </Text>
                <Text style={{ flex: 3, fontSize: 12, paddingLeft: 10 }}>
                  ARGENTA CERAMICA SL
                </Text>
              </View>
              <View style={styles.row}>
                <Text
                  style={{
                    fontWeight: '700',
                    flex: 1,
                    borderRightColor: '#ccc',
                    borderRightWidth: 0.5,
  
                    fontSize: 12
                  }}
                >
                  Brand
                </Text>
                <Text style={{ flex: 3, fontSize: 12, paddingLeft: 10 }}>
                  ARGENTA CERAMICA SL
                </Text>
              </View>
              <View style={styles.row}>
                <Text
                  style={{
                    fontWeight: '700',
                    flex: 1,
                    borderRightColor: '#ccc',
                    borderRightWidth: 0.5,
  
                    fontSize: 12
                  }}
                >
                  Brand
                </Text>
                <Text style={{ flex: 3, fontSize: 12, paddingLeft: 10 }}>
                  ARGENTA CERAMICA SL
                </Text>
              </View>
              <View style={styles.row}>
                <Text
                  style={{
                    fontWeight: '700',
                    flex: 1,
                    borderRightColor: '#ccc',
                    borderRightWidth: 0.5,
  
                    fontSize: 12
                  }}
                >
                  Brand
                </Text>
                <Text style={{ flex: 3, fontSize: 12, paddingLeft: 10 }}>
                  ARGENTA CERAMICA SL
                </Text>
              </View>
            </View>
          </SafeAreaView>
        </ScrollView>
      );
    }
    }
    
}

const styles = StyleSheet.create({
  table: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    borderTopColor: '#ccc',
    borderTopWidth: 1,
    width: '80%',
    padding: 5
  },
  productName: {
    fontSize: 25,
    fontFamily: 'Righteous',
    color: '#00499B',
    paddingTop: 5
  },
  dimension: {
    fontSize: 18,
    color: '#333'
  },
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

export default SingleProduct;
