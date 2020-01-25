import React, {Component} from 'react';

import SaveButton from './Header/SaveButton';

import SelectAccion from './components/SelectAccion';
import SelectLugar from './components/SelectLugar';
import SelectFecha from './components/SelectFecha';

import {StyleSheet, ScrollView, View} from 'react-native';

import {StackActions} from 'react-navigation';

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
    headerRight: <SaveButton text="Guardar" />,
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
      selectedAction: 'Seleccione una acción',
    };

    this.setDate = this.setDate.bind(this);
    this.showDatePicker = this.showDatePicker.bind(this);

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
    let aAction = action || this.state.selectedAction;
    this.setState({
      selectedAction: aAction,
    });
    console.log('Estado cambiado');
  };

  setDate = date => {
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

  goToActionView = () => {
    const goToAction = StackActions.push({
      routeName: 'SelectAccionView',
      params: {
        changed: (event, element) => this.setAction(event, element),
        actions: this.state.actions,
      },
    });
    this.props.navigation.dispatch(goToAction);
  };

  render() {
    const {show, date, loadingActions} = this.state;

    return (
      <ScrollView style={styles.mainContainer}>
        <View>
          <SelectAccion
            list={this.state.actions}
            selected={this.state.selectedAction}
            loading={loadingActions}
            changed={this.setAction}
            navigation={this.goToActionView}
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
