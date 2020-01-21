import React, {Component} from 'react';
import DateTimePicker from 'react-native-modal-datetime-picker';
import Moment from 'moment/min/moment-with-locales';

import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
  },
});

const MostradorFecha = props => {
  Moment.locale('es');
  const dateText = Moment(props.date).format('dddd D MMMM YYYY');

  return (
    <View>
      <TouchableOpacity style={styles.container} onPress={props.onTouch}>
        <Text style={{fontSize: 15}}>{dateText}</Text>
      </TouchableOpacity>

      <DateTimePicker
        isVisible={props.doesShow}
        value={props.date}
        mode="date"
        display="default"
        onConfirm={props.changed}
        onCancel={props.changed}
      />
    </View>
  );
};

export default MostradorFecha;
