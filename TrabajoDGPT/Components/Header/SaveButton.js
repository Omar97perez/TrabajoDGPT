import React from 'react';
import {Text, TouchableHighlight, View} from 'react-native';
import {Icon} from 'react-native-elements';

const SaveButton = props => {
  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingRight: 15,
      }}>
      <TouchableHighlight>
        <Icon name="save" color="white" />
      </TouchableHighlight>
    </View>
  );
};

export default SaveButton;
