import React from 'react';
import { View, Text } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';

const CircleIcon = ({ title, ico }) => {
  return (
    <View style={styles.iconView}>
      <View style={styles.circle}>
        <SimpleLineIcons
          name={ico}
          size={24}
          color="#333"
          backgroundColor={null}
        />
      </View>
      <Text style={{ fontSize: 13 }}>{title}</Text>
    </View>
  );
};

const styles = {
  circle: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    backgroundColor: null,
    borderColor: '#333',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconView: {
    flexDirection: 'column',
    fontSize: 6,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  }
};
export default CircleIcon;
