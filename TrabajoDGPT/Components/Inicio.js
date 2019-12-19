/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {Icon} from 'react-native-elements'
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Inicio from './FormRegistro';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

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
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.body}>
        <Text style={styles.Titulo}>Inicio</Text>
        <Text style={styles.Titulo}>(Alex)</Text>
          <Icon
            reverse
            name='g-translate'
            type='ionicon'
            color='dodgerblue'
            onPress={() => navigate('FormComplTrabajo')}
          />
        <Button
          title="Nueva Especie"
          onPress={() => navigate('FormEspecie')}
        />

        <Button
          title="Nuevo Registro"
          onPress={() => navigate('FormRegistro')}
        />

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
    const {navigate} = this.props.navigation;
    return (
        <View style={styles.body}>
          <Text style={styles.Titulo}>Nueva Especie</Text>
          <Text style={styles.Titulo}>(Omar)</Text>
          <Button
          title="Guardar"
          onPress={() => navigate('Inicio')}
        />
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
    const {navigate} = this.props.navigation;
    return (
        <View style={styles.body}>
          <Text style={styles.Titulo}>Trabajo Completado</Text>
          <Text style={styles.Titulo}>(Alberto)</Text>
          <Button
          title="Guardar"
          onPress={() => navigate('Inicio')}
        />
        </View>
    );
  }
}

class FormularioRegistro extends React.Component {
  static navigationOptions = {
    headerTitle: 'Crear/Modificar Trabajo',
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
    return (
        <View style={styles.body}>
          <Text style={styles.Titulo}>Modificar/Crear Trabajo </Text>
          <Text style={styles.Titulo}>(Pierre)</Text>
          <Button
          title="Guardar"
          onPress={() => navigate('Inicio')}
        />
        </View>
    );
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
    justifyContent: "center", 
    alignItems: "center"
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
    marginTop: 20
  },
  Titulo3: {
    color: '#343a40',
    fontWeight: 'bold',
    fontSize: 25,
    marginTop: 20
  }
});

const MainNavigator = createStackNavigator({
  Inicio: {screen: InicioProyecto},
  FormEspecie: {screen: FormularioEspecie},
  FormRegistro: {screen: FormularioRegistro},
  FormComplTrabajo: {screen: FormularioCompletarTrabajo},
});

const App = createAppContainer(MainNavigator);

export default App;
