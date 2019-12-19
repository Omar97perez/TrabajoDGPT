import React from 'react';
import {Icon} from 'react-native-elements'
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { Table, Row, Rows } from 'react-native-table-component';

import {
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
const App = () => {
    return (
      <View style={styles.body}>
      <Text style={styles.Titulo}>Trabajo Completado</Text>
      <Text style={styles.Titulo}>(Alberto)</Text>
      <Text style={styles.Titulo3}>Fecha</Text>
      <Text style={styles.margenTopMenos8}></Text>
      <TextInput
          style={{ width:350, height: 40, borderColor: 'gray', borderWidth: 1}}
          // onChangeText={text => onChangeText(text)}
          // value={value}
        />

      <Text style={styles.Titulo3}>Observaciones</Text>
      <Text style={styles.margenTopMenos8}></Text>
      <TextInput
          style={{ width:350, height: 150, borderColor: 'gray', borderWidth: 1}}
          // onChangeText={text => onChangeText(text)}
          // value={value}
        />
      <Text style={styles.margenTop10}></Text>
      <Button
      title="Guardar"
      onPress={() => navigate('Inicio')}
    />
    </View>
    )
};

const styles = StyleSheet.create({
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
    },
  });

export default App;  