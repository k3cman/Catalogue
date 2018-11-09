import React, { Component } from 'react';
import { Text, View, ImageBackground, TouchableOpacity } from 'react-native';

const CategoryCard = props => {
  return (
    <View style={styles.category}>
      <ImageBackground
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}
        source={{
          uri: props.imgUri
        }}
      >
        <Text
          style={{
            fontFamily: 'Righteous',
            fontSize: 20,
            textDecorationLine: 'underline',
            textDecorationStyle: 'solid',
            color: props.textColor
          }}
        >
          {props.title}
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
