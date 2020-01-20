import React from 'react';
import {Picker, StyleSheet} from 'react-native';
import {ListItem} from 'react-native-elements';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingRight: 0,
  },
});

const SelectAccion = props => {
  let myPicker = (
    <Picker
      enabled={!props.loading}
      selectedValue={props.selected}
      onValueChange={props.changed}>
      {!props.loading ? (
        props.list.map((element, idx) => {
          return <Picker.Item key={idx} label={element} value={idx} />;
        })
      ) : (
        <Picker.Item label="Seleccione una acción" value="default" />
      )}
    </Picker>
  );

  return (
    <ListItem
      key="accion"
      containerStyle={styles.container}
      title={myPicker}
      leftIcon={{name: 'call-to-action'}}
      bottomDivider
    />
  );
};

export default SelectAccion;
