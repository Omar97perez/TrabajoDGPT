import React from 'react';
import {View, Picker} from 'react-native';
import {ListItem} from 'react-native-elements';

const SelectAccion = props => {
  const myPicker = (
    <Picker selectedValue="default">
      <Picker.Item label="Seleccione una Acción" value="default" />
      <Picker.Item label="This is a label" value="test1" />
      <Picker.Item label="This is another label" value="test2" />
    </Picker>
  );

  return (
    <ListItem
      key="accion"
      containerStyle={{paddingVertical: 10, paddingRight: 0}}
      title={myPicker}
      leftIcon={{name: 'call-to-action'}}
      bottomDivider
    />
  );
};

export default SelectAccion;