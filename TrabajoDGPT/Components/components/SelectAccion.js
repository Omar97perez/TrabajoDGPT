import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {ListItem} from 'react-native-elements';

import database, {firebase} from '@react-native-firebase/database';


const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
  },
  textStyle: {
    paddingVertical: 0,
    paddingLeft: 10,
  },
});

const SelectAccion = props => {
  
  return (
    <ListItem
      key="accion"
      containerStyle={styles.container}
      title={props.selected}
      titleStyle={styles.textStyle}
      leftIcon={{name: 'call-to-action'}}
      onPress={props.navigation}
      bottomDivider
      chevron
    />
  );
};

export default SelectAccion;
