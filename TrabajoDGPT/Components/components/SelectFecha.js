import React from 'react';
import {StyleSheet} from 'react-native';
import {ListItem} from 'react-native-elements';
import MostradorFecha from './MostradorFecha';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
  },
});

const SelectFecha = props => {
  const myPicker = (
    <MostradorFecha
      date={props.date}
      onTouch={props.onTouch}
      doesShow={props.doesShow}
      changed={props.changed}
    />
  );

  return (
    <ListItem
      key="fecha"
      containerStyle={styles.container}
      title={myPicker}
      // rightTitle={} TimePicker para Android para seleccionar hora
      leftIcon={{name: 'access-time'}}
      bottomDivider
    />
  );
};

export default SelectFecha;
