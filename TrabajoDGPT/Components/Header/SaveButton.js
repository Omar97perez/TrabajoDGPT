import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Icon} from 'react-native-elements';

const SaveButton = props => {
  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingRight: 10,
      }}>
      <TouchableOpacity>
        <Text style={{fontSize: 15, textAlign: 'center', color: 'white'}}>
          Guardar
        </Text>
        {/* <Icon name="save" color="white" /> */}
      </TouchableOpacity>
    </View>
  );
};

export default SaveButton;
