import React, {Component} from 'react';

import SaveButton from './Header/SaveButton';

import SelectAccion from './components/SelectAccion';
import SelectLugar from './components/SelectLugar';
import SelectFecha from './components/SelectFecha';

import {StyleSheet, ScrollView, View} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
  },
});

class FormRegistro extends Component {
  static navigationOptions = {
    title: 'Nuevo Registro',
    headerStyle: {
      backgroundColor: 'dodgerblue',
    },
    headerRight: <SaveButton />,
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
      <ScrollView style={styles.mainContainer}>
        <View>
          <SelectAccion />
          <SelectLugar />
          <SelectFecha
            date={date}
            onTouch={this.showDatePicker}
            doesShow={show}
            changed={this.setDate}
          />
        </View>
      </ScrollView>
    );
  }
}

export default FormRegistro;
