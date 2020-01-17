import React from 'react';
import {View, Picker} from 'react-native';
import {ListItem} from 'react-native-elements';

const SelectLugar = props => {
  return (
    <ListItem
      key="lugar"
      containerStyle={{paddingVertical: 20}}
      titleStyle={{paddingLeft: 10}}
      title="Lugar"
      leftIcon={{name: 'location-on'}}
      bottomDivider
      chevron
    />
  );
};

export default SelectLugar;
