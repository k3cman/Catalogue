import React, { Component } from 'react';
import { Text, View } from 'react-native';

const HeadingText = props => {
  return (
    <View style={styles.h1}>
      <Text textAlign="left" style={styles.text}>
        {props.title}
      </Text>
      <View style={styles.line} />
    </View>
  );
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
  line: {
    borderBottomColor: '#00499B',
    borderBottomWidth: 3,
    height: 1,
    width: '100%',
    zIndex: 5,
    marginLeft: -30
  },
  text: {
    textAlign: 'left',
    fontFamily: 'Righteous',
    paddingRight: 10,
    color: '#00499B',
    backgroundColor: '#F1F1F1',
    fontSize: 20,
    zIndex: 100,
    marginLeft: 30
  }
};

export default HeadingText;
