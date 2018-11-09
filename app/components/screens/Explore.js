import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  ActivityIndicator
} from 'react-native';
import { Font } from 'expo';

import HeadingText from '../common/HeadingText';
import ImageCardMd from '../common/ImageCardMd';
import CircleIcon from '../common/CircleIcon';
import SeriesCardMd from '../common/SeriesCardMd';

export default class Explore extends Component {
  state = {
    fontLoading: true
  };
  async componentWillMount() {
    await Font.loadAsync({
      Righteous: require('../../../assets/fonts/Righteous-Regular.ttf')
    });
    this.setState({ fontLoading: false });
  }
  render() {
    if (this.state.fontLoading) {
      return (
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <ActivityIndicator size="large" color="#333" />
        </View>
      );
    } else {
      return (
        <ScrollView style={{ flex: 1 }} scrollEventThrottle={16}>
          <SafeAreaView style={styles.screenStyle}>
            <HeadingText title="OTKRIJ" />
            <View style={styles.verticalScroll}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <ImageCardMd
                  color="#333"
                  image="https://d7rh5s3nxmpy4.cloudfront.net/CMP524/CT8928BI2213_POLARIS30X90_POLARIS_SZ1_1.jpg"
                  title="Kupatila"
                />
                <ImageCardMd
                  color="white"
                  image="http://cms.enmongroup.com/images/items/RBMyppRWI1.jpg"
                  title="Tuš Kabine"
                />
                <ImageCardMd
                  color="#333"
                  image="https://www.lemit.rs/wp-content/uploads/2015/12/31806000-2.jpg"
                  title="Slavine"
                />
              </ScrollView>
            </View>
            <View style={styles.iconsView}>
              <CircleIcon title="Loyalty" ico="credit-card" />
              <CircleIcon title="Akcije" ico="tag" />
              <CircleIcon title="Saloni" ico="handbag" />
              <CircleIcon title="Uputstva" ico="notebook" />
            </View>
            <View style={{ marginLeft: 20 }}>
              <HeadingText title="IZDVAJAMO" />
            </View>
            <View style={styles.verticalScroll}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <SeriesCardMd
                  color="white"
                  title="CAPANNA"
                  subtitle="30x60"
                  image="https://www.zorka-keramika.rs/images/ideje/dnevne_sobe_i_trpezarije/Accademia_Mix_30x60.jpg"
                />
                <SeriesCardMd
                  color="#333"
                  title="CALACATA"
                  subtitle="60x60 / 120x60"
                  image="http://www.ru.enmongroup.com/assets/bg2.jpg"
                />
                <SeriesCardMd
                  color="#333"
                  title="EUROSTYLE"
                  subtitle="slavine"
                  image="http://townandcountrybathrooms.ie/wp-content/uploads/2018/03/Eurostyle-Moon-White.Grohe_.jpg"
                />
              </ScrollView>
            </View>
            <View style={{ marginLeft: -10, paddingTop: 20 }}>
              <HeadingText title="VODIČ" />
            </View>
            <View style={styles.blogHero}>
              <ImageBackground
                source={{
                  uri: 'http://www.enmongroup.com/data/Sr/blog/blog1/img-1.jpg'
                }}
                style={{
                  flex: 1,
                  width: null,
                  height: null,
                  resizeMode: 'cover',
                  justifyContent: 'flex-end',
                  alignItems: 'flex-start'
                }}
              >
                <View
                  style={{
                    width: '100%',
                    backgroundColor: 'rgba(51,51,51,0.5)',
                    padding: 10
                  }}
                >
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 16,
                      fontFamily: 'Righteous'
                    }}
                  >
                    PLANIRANJE KUPATILA I.deo
                  </Text>
                  <Text style={{ color: 'white', fontSize: 12 }}>
                    Dizajn savršenog kupatilskog prostora je uzbudljiv ali i
                    veoma izazovan i iscrpljujući proces, bilo da se radi o
                    renoviranju ili.....
                  </Text>
                </View>
              </ImageBackground>
            </View>
            <View style={styles.blog}>
              <View style={{ flex: 1, marginRight: 10 }}>
                <ImageBackground
                  source={{
                    uri:
                      'http://www.enmongroup.com/data/Sr/blog/blog1/img-1.jpg'
                  }}
                  style={{
                    flex: 1,
                    width: null,
                    height: null,
                    resizeMode: 'cover'
                  }}
                />
                <Text>Minimalizam u kupatilu</Text>
              </View>
              <View style={{ flex: 1, marginLeft: 10 }}>
                <ImageBackground
                  source={{
                    uri:
                      'http://www.enmongroup.com/data/Sr/blog/blog1/img-1.jpg'
                  }}
                  style={{
                    flex: 1,
                    width: null,
                    height: null,
                    resizeMode: 'cover'
                  }}
                />
                <Text>Minimalizam u kupatilu</Text>
              </View>
            </View>
            <View style={{ marginTop: 20 }}>
              <HeadingText title="NOVO" />
            </View>
            <View style={styles.verticalScroll}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <SeriesCardMd
                  color="white"
                  title="CAPANNA"
                  subtitle="30x60"
                  image="https://www.zorka-keramika.rs/images/ideje/dnevne_sobe_i_trpezarije/Accademia_Mix_30x60.jpg"
                />
                <SeriesCardMd
                  color="#333"
                  title="CALACATA"
                  subtitle="60x60 / 120x60"
                  image="http://www.ru.enmongroup.com/assets/bg2.jpg"
                />
                <SeriesCardMd
                  color="#333"
                  title="EUROSTYLE"
                  subtitle="slavine"
                  image="http://townandcountrybathrooms.ie/wp-content/uploads/2018/03/Eurostyle-Moon-White.Grohe_.jpg"
                />
              </ScrollView>
            </View>
          </SafeAreaView>
        </ScrollView>
      );
    }
  }
}

const styles = {
  blog: {
    height: 100,
    marginTop: 10,
    flexDirection: 'row',
    paddingRight: 20,
    paddingLeft: 20
  },
  blogHero: {
    height: 250,
    marginTop: 20,
    paddingRight: 20,
    paddingLeft: 20
  },
  iconsView: {
    height: 100,
    backgroundColor: 0,
    flexDirection: 'row',
    paddingHorizontal: 40,
    justifyContent: 'space-between'
  },
  screenStyle: {
    flex: 1,
    width: '100%',
    backgroundColor: '#F1F1F1',
    paddingTop: 40,
    paddingBottom: 100
  },
  verticalScroll: {
    height: 140,
    marginTop: 20
  }
};
