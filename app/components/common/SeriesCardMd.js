import React from 'react';
import { View, Text, ImageBackground } from 'react-native';

const SeriesCardMd = ({ color, image, title, subtitle }) => {
  return (
    <View
      style={{
        height: 140,
        width: 140,
        marginLeft: 20,
        borderWidth: 0.5,
        borderColor: '#ddd',
        borderRadius: 20
      }}
    >
      <ImageBackground
        source={{ uri: image }}
        style={{
          flex: 1,
          width: null,
          height: null,
          resizeMode: 'cover',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text
          style={{
            fontFamily: 'Righteous',
            fontSize: 20,
            color: `${color}`,
            textDecorationLine: 'underline'
          }}
        >
          {title}
        </Text>
        <Text style={{ fontSize: 16, color: `${color}` }}>{subtitle}</Text>
      </ImageBackground>
    </View>
  );
};

const styles = {
  textStyle: {
    fontFamily: 'Righteous',
    fontSize: 20
  }
};

export default SeriesCardMd;
