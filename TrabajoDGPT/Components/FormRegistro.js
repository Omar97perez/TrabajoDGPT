import React, {Component} from 'react';
import RNDateTimePicker from '@react-native-community/datetimepicker';

import SaveButton from './Header/SaveButton';

import MostradorFecha from './components/MostradorFecha';
import SelectAccion from './components/SelectAccion';
import SelectLugar from './components/SelectLugar';
import SelectFecha from './components/SelectFecha';

import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import {ListItem, Icon} from 'react-native-elements';

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
  },
  scrollViewContainer: {},
  button: {
    padding: 10,
  },
});

class FormRegistro extends Component {
  static navigationOptions = {
    title: 'Nuevo Registro',
    headerStyle: {
      backgroundColor: 'dodgerblue',
    },
    headerRight: () => <SaveButton />,
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      show: false,
      accion: '',
      lugar: '',
    };

    this.setDate = this.setDate.bind(this);
    this.showDatePicker = this.showDatePicker.bind(this);
  }

  setDate = (event, date) => {
    let aDate = date || this.state.date;

    this.setState({
      date: aDate,
      show: false,
    });
  };

  showDatePicker = () => {
    this.setState({
      show: true,
    });
  };

  render() {
    const {show, date} = this.state;

    return (
      <View>
        <ScrollView
          style={styles.mainContainer}
          // eslint-disable-next-line react-native/no-inline-styles
          contentContainerStyle={{
            flexGrow: 1,
          }}>
          <SelectLugar />
          <SelectFecha
            date={date}
            onTouch={this.showDatePicker}
            doesShow={show}
            changed={this.setDate}
          />
          <SelectAccion />
        </ScrollView>
      </View>
    );
  }
}

export default FormRegistro;
