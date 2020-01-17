import React from 'react';
import {Icon} from 'react-native-elements';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Table, Row, Rows} from 'react-native-table-component';

import FormularioRegistro from './FormRegistro';
import FS from './FormEspecie';
import FCT from './FormComplTrabajo';

import auth, {firebase} from '@react-native-firebase/auth';
import analytics from '@react-native-firebase/analytics';

import {
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

class FormularioLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      user: null,
    };
  }

  signIn = (email, password) => {
    const user = auth()
      .signInWithEmailAndPassword(email, password)
      .then(
        () => {
          alert('Succesful login');
          this.setState({
            user: user,
          });
          this.props.navigation.navigate('Inicio');
        },
        err => {
          console.log(err);
        },
      );
  };

  onChangeEmail = email => {
    this.setState({
      email: email,
    });
  };

  onChangePassword = password => {
    this.setState({
      password: password,
    });
  };

  static navigationOptions = {
    headerTitle: 'AppVistamientos',
    headerStyle: {
      backgroundColor: 'dodgerblue',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  render() {
    const {navigate} = this.props.navigation;
    const {email, password} = this.state;

    return (
      <View style={(styles.bodyBlue, styles.body)}>
        <View style={(styles.bodyWhite, styles.body)}>
          <Text style={styles.Titulo}>Login</Text>
          <Text style={styles.Titulo3}>Usuario</Text>
          <Text style={styles.margenTopMenos8}></Text>
          <TextInput
            style={{
              width: 350,
              height: 40,
              borderColor: 'gray',
              borderWidth: 1,
            }}
            onChangeText={text => this.onChangeEmail(text)}
            value={email}
          />
          <Text style={styles.Titulo3}>Contraseña</Text>
          <Text style={styles.margenTopMenos8}></Text>
          <TextInput
            style={{
              width: 350,
              height: 40,
              borderColor: 'gray',
              borderWidth: 1,
            }}
            onChangeText={text => this.onChangePassword(text)}
            value={password}
          />
          <Text style={styles.margenTop10}></Text>
          <Button title="Login" onPress={() => this.signIn(email, password)} />
        </View>
      </View>
    );
  }
}

class InicioProyecto extends React.Component {
  static navigationOptions = {
    headerTitle: 'AppVistamientos',
    headerRight: () => (
      <Button
        onPress={() => alert('This is a button!')}
        title="Info"
        color="#fff"
      />
    ),
    headerStyle: {
      backgroundColor: 'dodgerblue',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['', 'DIA', 'ACCION', 'LUGAR'],
      tableData: [
        ['1', '2', 'Quemar', 'A'],
        ['a', '3', 'Limpiar', 'B'],
        ['1', '4', 'Fumigar', 'C'],
        ['a', '5', 'Desbrozar', 'D'],
      ],
    };
  }

  render() {
    const state = this.state;
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.body}>
          <Text style={styles.Titulo}>Inicio</Text>
          <Text style={styles.Titulo}>(Alex)</Text>
        </View>
        <Text style={styles.margenTop10}></Text>
        <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
          <Row
            data={state.tableHead}
            style={styles.head}
            textStyle={styles.text}
          />
          <Rows data={state.tableData} textStyle={styles.text} />
        </Table>
        <Icon
          reverse
          name="g-translate"
          color="dodgerblue"
          onPress={() => navigate('FormComplTrabajo')}
          style={styles.margenTop20}
        />
        <Text style={styles.margenTop10}></Text>
        <Button title="Nueva Especie" onPress={() => navigate('FormEspecie')} />
        <Text style={styles.margenTop10}></Text>
        <Button
          title="Nuevo Registro"
          onPress={() => navigate('FormRegistro')}
        />
        <Text style={styles.margenTop10}></Text>
        <Button
          title="Trabajo Completado"
          onPress={() => navigate('FormComplTrabajo')}
        />
      </View>
    );
  }
}

class FormularioEspecie extends React.Component {
  static navigationOptions = {
    title: 'Nueva Especie',
    headerStyle: {
      backgroundColor: 'dodgerblue',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  render() {
    return (
      <View style={styles.body}>
        <FS></FS>
      </View>
    );
  }
}

class FormularioCompletarTrabajo extends React.Component {
  static navigationOptions = {
    title: 'Trabajo Completado',
    headerStyle: {
      backgroundColor: 'dodgerblue',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  render() {
    return <FCT></FCT>;
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
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
  margenTopMenos8: {
    marginTop: -8,
  },
  margenTop10: {
    paddingTop: 10,
  },
  margenTop20: {
    paddingTop: 20,
  },
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 30,
    backgroundColor: '#fff',
  },
  head: {
    height: 40,
    backgroundColor: 'dodgerblue',
  },
  text: {
    margin: 6,
  },
  bodyWhite: {
    backgroundColor: 'white',
  },
  bodyBlue: {
    backgroundColor: 'red',
  },
});

const MainNavigator = createStackNavigator({
  Login: {screen: FormularioLogin},
  Inicio: {screen: InicioProyecto},
  FormEspecie: {screen: FormularioEspecie},
  FormRegistro: {screen: FormularioRegistro},
  FormComplTrabajo: {screen: FormularioCompletarTrabajo},
});

const App = createAppContainer(MainNavigator);

export default App;
