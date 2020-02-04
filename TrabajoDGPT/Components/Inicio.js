import React from 'react';
import {Icon} from 'react-native-elements';
import {
  createAppContainer,
  StackActions,
  NavigationActions,
} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Table, Row, Rows} from 'react-native-table-component';
import FormularioEspecie from './FormEspecie';
import FormularioCompletarTrabajo from './FormComplTrabajo';
import FormularioRegistro from './FormRegistro';
import SelectAccionVista from './components/SelectAccionVista';
import MapVista from './components/MapVista';
import SideMenu from 'react-native-side-menu';
import Menu from './components/Menu';
import FS from './FormEspecie';
import FCT from './FormComplTrabajo';

import auth, {firebase} from '@react-native-firebase/auth';

import {
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import SelectAccion from './components/SelectAccion';
import InicioTabla from './InicioTabla';

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
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(
        user => {
          Alert.alert(
            'Información',
            'Se ha iniciado sesión correctamente.',
            [{text: 'Cerrar'}],
            {cancelable: false},
          );
          this.setState({
            user: user,
          });
          // const resetAction = StackActions.reset({
          //   index: 0,
          //   actions: [NavigationActions.navigate({routeName: 'Inicio', email: email})],
          // });
          // this.props.navigation.dispatch(resetAction);
          const {navigate} = this.props.navigation;
          navigate('Inicio', {email: email});
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
          <Text style={styles.Titulo}>Iniciar Sesión</Text>
          <Text style={styles.Titulo3}>Usuario</Text>
          <Text style={styles.margenTopMenos8}></Text>
          <TextInput
            style={{
              width: 300,
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
              width: 300,
              height: 40,
              borderColor: 'gray',
              borderWidth: 1,
            }}
            onChangeText={text => this.onChangePassword(text)}
            value={password}
          />
          <Text style={styles.margenTop10}></Text>
          <Button
            title="Iniciar Sesión"
            onPress={() => this.signIn(email, password)}
          />
        </View>
      </View>
    );
  }
}

class InicioProyecto extends React.Component {
  static navigationOptions = ({navigation}) => {
    const {params = {}} = navigation.state;
    return {
      headerLeft: () => (
        <Icon
          reverse
          name="menu"
          color="dodgerblue"
          style={styles.margenTop20}
          onPress={params.Toggle}
        />
      ),
      headerTitle: 'AppVistamientos',
      headerRight: () => (
        <Icon
          reverse
          name="power-settings-new"
          color="dodgerblue"
          style={styles.margenTop20}
          onPress={() => params.CloseSesion()}
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
  };

  componentDidMount() {
    this.props.navigation.setParams({
      CloseSesion: this.CerrarSesion,
      Toggle: this.toggle,
    });
  }
  //Actualizar registro
  CerrarSesion = () => {
    Alert.alert(
      'Información',
      'Se ha cerrado la sesión correctamente.',
      [{text: 'Cerrar'}],
      {cancelable: false},
    );
    const {navigate} = this.props.navigation;
    navigate('Login');
  };

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  updateMenuState(isOpen) {
    this.setState({isOpen});
  }

  onMenuItemSelected = item => {
    const {navigate} = this.props.navigation;
    navigate(item);
  };

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      email: this.props.navigation.state.params.email,
      isOpen: false,
    };
  }

  render() {
    const state = this.state;
    const menu = (
      <Menu onItemSelected={this.onMenuItemSelected} email={this.state.email} />
    );

    return (
      <SideMenu
        menu={menu}
        isOpen={this.state.isOpen}
        onChange={isOpen => this.updateMenuState(isOpen)}>
        <InicioTabla />
      </SideMenu>
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
  center: {
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
  margenTop3: {
    paddingTop: 3,
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
  SelectAccionView: {screen: SelectAccionVista},
  MapView: {screen: MapVista},
  FormComplTrabajo: {screen: FormularioCompletarTrabajo},
});

const App = createAppContainer(MainNavigator);

export default App;
