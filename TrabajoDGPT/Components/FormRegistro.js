import React, {Component} from 'react';

import SaveButton from './Header/SaveButton';

import SelectAccion from './components/SelectAccion';
import SelectLugar from './components/SelectLugar';
import SelectFecha from './components/SelectFecha';

import {StyleSheet, ScrollView, View} from 'react-native';

import database, {firebase} from '@react-native-firebase/database';

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
      actions: [],
      loadingActions: true,
      selectedAction: 0,
    };

    this.setDate = this.setDate.bind(this);
    this.showDatePicker = this.showDatePicker.bind(this);
  }

  componentDidMount() {
    const ref = database().ref('/actions');
    let list = [];
    ref.once('value').then(
      snapshot => {
        list = snapshot.val().slice();
        this.setState({
          actions: list,
          loadingActions: false,
        });
      },
      err => {
        console.log(err);
      },
    );
  }

  setAction = (event, action) => {
    let aAction = action;
    this.setState({
      selectedAction: aAction,
    });
  };

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
    const {show, date, loadingActions, actions, selectedAction} = this.state;

    if (!loadingActions) console.log(actions);

    return (
      <ScrollView style={styles.mainContainer}>
        <View>
          <SelectAccion
            list={this.state.actions}
            loading={loadingActions}
            changed={this.setAction}
            selected={selectedAction}
          />
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
