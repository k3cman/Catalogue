import React, { Component } from 'react';
import { Text, View, ImageBackground, TouchableOpacity } from 'react-native';

const CategoryCard = props => {
  return (
    <View
      style={{
        width: 150,
        height: 150,
        flex: 1
      }}
    >
      <ImageBackground
        source={{
          uri: props.imgUrl
        }}
        style={{
          width: '100%',
          height: '100%',
          resizeMode: 'contain',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: '700',
            color: 'white'
          }}
        >
          {props.text}
        </Text>
      </ImageBackground>
    </View>
  );
};

const styles = {
  category: {
    width: '45%',
    height: 150,
    marginTop: 20,
    elevation: 1,
    borderRadius: 6
  }
};

export default CategoryCard;
