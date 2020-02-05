import React, {Component} from 'react';
import {Icon, CheckBox, Card, Input} from 'react-native-elements';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Table, Row, Rows} from 'react-native-table-component';
import firebase from 'firebase';
import SelectFecha from './components/SelectFecha';
import Moment from 'moment/min/moment-with-locales';

import {
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
  Alert,
  ScrollView,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

class Task_Completed extends Component {
  static navigationOptions = ({navigation}) => {
    const {params = {}} = navigation.state;
    return {
      headerTitle: 'AppVistamientos',
      headerRight: () => (
        <Text
          style={{
            fontSize: 15,
            textAlign: 'center',
            color: 'white',
            paddingRight: 10,
          }}
          onPress={() => params.SendRegister()}>
          Guardar
        </Text>
      ),
      headerStyle: {
        backgroundColor: 'dodgerblue',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    };
  };

  componentDidMount() {
    this.props.navigation.setParams({
      SendRegister: this.EnviarRegistro,
    });
    if (this.props.navigation.getParam('task')) {
      let task = this.props.navigation.getParam('task');
      console.log(task);
      this.setState({
        Plot: `lat: ${task.location.lat}\nlon: ${task.location.lon}`,
      });
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      done: false,
      show: false,
      ready: '',
      Observation: '',
      Plot: '',
      Date: '',
      Incidence: '',
      date: new Date(),
    };
  }

  EnviarRegistro = () => {
    var config = {
      apiKey: 'AIzaSyAb8b7clfYFCk_J_uLm0K1P1xBpcp8N67w',
      authDomain: 'agei-699fd.firebaseapp.com',
      databaseURL: 'https://agei-699fd.firebaseio.com',
      projectId: 'agei-699fd',
      storageBucket: 'agei-699fd.appspot.com',
      messagingSenderId: '610317697724',
      appId: '1:610317697724:web:1e4766cea11751984346b9',
      measurementId: 'G-VW8R06DJRZ',
    };
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }
    let task = this.props.navigation.getParam('task');
    var id = task.id;
    firebase
      .database()
      .ref('records/' + id)
      .set({
        TrabajoCompletado: this.state.done,
        uuid: id,
        Date: Moment(this.state.date).format('DD/MM/YYYY'),
        Plot: this.state.Plot,
        Observation: this.state.Observation,
        Incidence: this.state.Incidence,
      });
    Alert.alert(
      'Información',
      'Los datos se han introducido correctamente.',
      [{text: 'Cerrar'}],
      {cancelable: false},
    );
    this.props.navigation.goBack();
  };

  handleCheck() {
    if (this.state.done == false) {
      this.setState({done: true, ready: '1'});
      Alert.alert(
        'Información',
        'El trabajo de hoy se ha completado.',
        [{text: 'Cerrar'}],
        {cancelable: false},
      );
    } else {
      this.setState({done: false, ready: '0'});
    }
  }

  onChangeObservation = Observation => {
    this.setState({
      Observation: Observation,
    });
  };

  onChangeIncidence = Incidence => {
    this.setState({
      Incidence: Incidence,
    });
  };

  onChangePlot = Plot => {
    this.setState({
      Plot: Plot,
    });
  };

  onChangeDate = Date => {
    this.setState({
      Date: Date,
    });
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

  render() {
    const {show, date, Observation, Plot, Incidence, Date} = this.state;
    return (
      <ScrollView>
        <View style={styles.body}>
          <Card>
            <Text style={styles.Titulo}>Trabajo Completado</Text>
            <CheckBox
              checked={this.state.done}
              checkedColor="green"
              size={50}
              center
              onPress={() => this.handleCheck(this)}
              ref={check => (this.inputName = check)}
              id="check"
              title="Marque solo si el trabajo se ha completado"
            />
          </Card>
          <Text style={styles.Titulo3}>Fecha</Text>
          <Text style={styles.margenTopMenos8}></Text>
        </View>
        <View>
          <SelectFecha
            date={date}
            onTouch={this.showDatePicker}
            doesShow={show}
            changed={this.setDate}
          />
        </View>
        <View style={styles.body}>
          <Text style={styles.Titulo3}>Parcela trabajada</Text>
          <Text style={styles.margenTopMenos8}></Text>
          <TextInput
            type="text"
            style={{
              width: 350,
              height: 100,
              borderColor: 'gray',
              borderWidth: 1,
            }}
            id="worked_plot"
            placeholder="Escriba la parcela que proceda"
            onChangeText={Plot => this.onChangePlot(Plot)}
            value={Plot}
          />
          <Text style={styles.Titulo3}>Observaciones</Text>
          <Text style={styles.margenTopMenos8}></Text>
          <TextInput
            type="text"
            style={{
              width: 350,
              height: 100,
              borderColor: 'gray',
              borderWidth: 1,
            }}
            id="Observation"
            placeholder="Escriba las observaciones que procedan"
            onChangeText={Observation => this.onChangeObservation(Observation)}
            value={Observation}
          />
          <Text style={styles.Titulo3}>Incidencias</Text>
          <Text style={styles.margenTop3}></Text>
          <TextInput
            type="text"
            style={{
              width: 350,
              height: 100,
              borderColor: 'gray',
              borderWidth: 1,
            }}
            id="incidents"
            placeholder="Escriba las inicidencias ocacionadas"
            onChangeText={Incidence => this.onChangeIncidence(Incidence)}
            value={Incidence}
          />
          <Text style={styles.margenTop10}></Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.white,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Titulo: {
    color: '#343a40',
    fontWeight: 'bold',
    fontSize: 35,
    alignItems: 'flex-start',
  },
  Titulo2: {
    color: '#343a40',
    fontWeight: 'bold',
    fontSize: 30,
    marginTop: 20,
  },
  Titulo3: {
    color: '#343a40',
    fontWeight: 'bold',
    fontSize: 25,
    marginTop: 20,
  },
});

export default Task_Completed;
