import React from 'react';
import {StyleSheet} from 'react-native';
import {ListItem} from 'react-native-elements';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
  },
  title: {
    paddingLeft: 10,
  },
});

const SelectLugar = props => {
  return (
    <ListItem
      key="lugar"
      containerStyle={styles.container}
      titleStyle={styles.title}
      title="Lugar"
      leftIcon={{name: 'location-on'}}
      bottomDivider
      chevron
      onPress={props.navigation}
    />
  );
};

export default SelectLugar;
