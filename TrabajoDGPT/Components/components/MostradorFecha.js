import React, {Component} from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import Moment from 'moment/min/moment-with-locales';

import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
  },
});

const MostradorFecha = props => {
  const dateText = Moment(props.date).format('dddd D MMMM YYYY');

  return (
    <View>
      <TouchableOpacity style={styles.container} onPress={props.onTouch}>
        <Text style={{fontSize: 15}}>{dateText}</Text>
      </TouchableOpacity>

      {props.doesShow && (
        <DateTimePicker
          value={props.date}
          mode="date"
          display="default"
          onChange={props.changed}
        />
      )}
    </View>
  );
};

export default MostradorFecha;
