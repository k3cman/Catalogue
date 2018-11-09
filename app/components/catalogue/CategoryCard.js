import React, { Component } from 'react';
import { Text, View, ImageBackground, TouchableOpacity } from 'react-native';

const CategoryCard = ({ imgUri, title, textColor, navigation }) => {
  return (
    <View style={styles.category}>
      <TouchableOpacity
        style={{ flex: 1, width: '40%', height: 150 }}
        onPress={() => navigation.navigate('singleProduct')}
      >
        <ImageBackground
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
          }}
          source={{
            uri: imgUri
          }}
        >
          <Text
            style={{
              fontFamily: 'Righteous',
              fontSize: 20,
              textDecorationLine: 'underline',
              color: textColor
            }}
          >
            {title}
          </Text>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  category: {
    width: '45%',
    height: 150,
    paddingTop: 20
  }
};

export default CategoryCard;
