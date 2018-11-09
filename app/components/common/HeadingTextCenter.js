import React, { Component } from 'react';
import { Text, View } from 'react-native';

const HeadingTextCenter = props => {
  return <Text style={styles.text}>{props.title}</Text>;
};

const styles = {
  h1: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    position: 'relative',
    marginLeft: 20,
    textAlign: 'left'
  },
  text: {
    textAlign: 'center',
    fontFamily: 'Righteous',
    paddingRight: 10,
    color: '#00499B',
    backgroundColor: '#F1F1F1',
    fontSize: 20,
    zIndex: 100,
    marginLeft: 30
  }
};

export default HeadingTextCenter;
