import React, {Component} from 'react';

import SaveButton from './Header/SaveButton';

import SelectAccion from './components/SelectAccion';
import SelectLugar from './components/SelectLugar';
import SelectFecha from './components/SelectFecha';

import Moment from 'moment/min/moment-with-locales';

import {Alert, StyleSheet, ScrollView, View} from 'react-native';

import {StackActions} from 'react-navigation';

import UUIDGenerator from 'react-native-uuid-generator';
import database, {firebase} from '@react-native-firebase/database';

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
  },
});

class FormRegistro extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Nuevo Registro',
      headerStyle: {
        backgroundColor: 'dodgerblue',
      },
      headerRight: (
        <SaveButton
          text="Guardar"
          callback={navigation.getParam('saveRegister')}
        />
      ),
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      show: false,
      actions: [],
      loadingActions: true,
      selectedAction: 'Seleccione una acción',
      location: {
        lat: 28.288718720767292,
        lon: -16.49008141699221,
      },
    };
  }

  componentDidMount() {
    this.props.navigation.setParams({
      saveRegister: this.saveRegister,
    });

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

  saveRegister = async () => {
    try {
      const uuid = await UUIDGenerator.getRandomUUID();
      const ref = database().ref(`/tasks/${uuid}`);

      const dateText = Moment(this.state.date).format('DD/MM/YYYY');
      await ref.set({
        uuid: uuid,
        action: this.state.selectedAction,
        date: dateText,
        location: this.state.location,
      });
      Alert.alert(
        'Información',
        'Guardado satisfactoriamente',
        [{text: 'Cerrar'}],
        {cancelable: false},
      );
      this.props.navigation.goBack();
    } catch (err) {
      console.log(err);
    }
  };

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

  setLocation = coordinate => {
    let newLocation = {
      lat: coordinate.latitude,
      lon: coordinate.longitude,
    };

    this.setState({
      location: newLocation,
    });
    console.log('Location Changed');
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

  goToMapView = () => {
    const goToMap = StackActions.push({
      routeName: 'MapView',
      params: {
        location: this.state.location,
        markerHandler: this.setLocation,
      },
    });
    this.props.navigation.dispatch(goToMap);
  };

  render() {
    const {show, date, loadingActions} = this.state;

    return (
      <ScrollView style={styles.mainContainer}>
        <SelectAccion
          list={this.state.actions}
          selected={this.state.selectedAction}
          loading={loadingActions}
          changed={this.setAction}
          navigation={this.goToActionView}
        />
        <SelectLugar navigation={this.goToMapView} />
        <SelectFecha
          date={date}
          onTouch={this.showDatePicker}
          doesShow={show}
          changed={this.setDate}
        />
      </ScrollView>
    );
  }
}

export default FormRegistro;
