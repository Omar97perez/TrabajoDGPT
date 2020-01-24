import React from 'react';
import {Icon} from 'react-native-elements'
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { Table, Row, Rows } from 'react-native-table-component';
import firebase from 'firebase';


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

        const [Quadrille, onChangeQuadrille] = React.useState('');
        const [PlaceSighting, onChangePlaceSighting] = React.useState('');
        const [Image, onChangeImage] = React.useState('');

        function EnviarRegistro(){
          var config = {
            apiKey: "AIzaSyAb8b7clfYFCk_J_uLm0K1P1xBpcp8N67w",
            authDomain: "agei-699fd.firebaseapp.com",
            databaseURL: "https://agei-699fd.firebaseio.com",
            projectId: "agei-699fd",
            storageBucket: "agei-699fd.appspot.com",
            messagingSenderId: "610317697724",
            appId: "1:610317697724:web:1e4766cea11751984346b9",
            measurementId: "G-VW8R06DJRZ"
          };
          firebase.initializeApp(config);
          
          var id = "Animal" + Math.floor(Math.random() * (99 - 0 + 1) + 0) + Math.floor(Math.random() * (99 - 0 + 1) + 0) + Math.floor(Math.random() * (99 - 0 + 1) + 0);
            firebase.database().ref('NewAnimal/' + id ).set(
                {
                    NombreCuadrilla: Quadrille,
                    Lugar: PlaceSighting,
                    Imagen: Image
                }
            );
        }

        //Actualizar registro 
        function ActualizarRegistro(){
          var config = {
            apiKey: "AIzaSyAb8b7clfYFCk_J_uLm0K1P1xBpcp8N67w",
            authDomain: "agei-699fd.firebaseapp.com",
            databaseURL: "https://agei-699fd.firebaseio.com",
            projectId: "agei-699fd",
            storageBucket: "agei-699fd.appspot.com",
            messagingSenderId: "610317697724",
            appId: "1:610317697724:web:1e4766cea11751984346b9",
            measurementId: "G-VW8R06DJRZ"
          };
          firebase.initializeApp(config);
          
          // To Update a user
          firebase.database().ref('NewAnimal/Animal515241').update({
              name: 'Pheng Sengvuthy'
          });
        }

        //Recoger elementos 
        function RecogerElementos(){
          var config = {
            apiKey: "AIzaSyAb8b7clfYFCk_J_uLm0K1P1xBpcp8N67w",
            authDomain: "agei-699fd.firebaseapp.com",
            databaseURL: "https://agei-699fd.firebaseio.com",
            projectId: "agei-699fd",
            storageBucket: "agei-699fd.appspot.com",
            messagingSenderId: "610317697724",
            appId: "1:610317697724:web:1e4766cea11751984346b9",
            measurementId: "G-VW8R06DJRZ"
          };

          firebase.database().ref('NewAnimal').on('value', (data) => {
              console.log(data.toJSON());
          })
        }

        //Eliminar registro 
        function EliminarRegistro(){
          var config = {
            apiKey: "AIzaSyAb8b7clfYFCk_J_uLm0K1P1xBpcp8N67w",
            authDomain: "agei-699fd.firebaseapp.com",
            databaseURL: "https://agei-699fd.firebaseio.com",
            projectId: "agei-699fd",
            storageBucket: "agei-699fd.appspot.com",
            messagingSenderId: "610317697724",
            appId: "1:610317697724:web:1e4766cea11751984346b9",
            measurementId: "G-VW8R06DJRZ"
          };
          firebase.initializeApp(config);
          
          // To Remove a user
          firebase.database().ref('NewAnimal/Animal515241').remove();
        }
        

    return (
        <View style={styles.body}>
          <Text style={styles.Titulo}>Nueva Especie</Text>
          <Text style={styles.Titulo}>(Omar)</Text>
          <Text style={styles.Titulo3}>Nombre Cuadrilla</Text>
          <Text style={styles.margenTopMenos8}></Text>
          <TextInput
              style={{ width:350, height: 40, borderColor: 'gray', borderWidth: 1}}
              onChangeText={text => onChangeQuadrille(text)}
              value={Quadrille}
            />
          <Text style={styles.Titulo3}>Lugar Avistamiento</Text>
          <Text style={styles.margenTopMenos8}></Text>
          <TextInput
              style={{ width:350, height: 40, borderColor: 'gray', borderWidth: 1}}
              onChangeText={text => onChangePlaceSighting(text)}
              value={PlaceSighting}
            />

          <Text style={styles.Titulo3}>Imagen</Text>
          <Text style={styles.margenTopMenos8}></Text>
          <TextInput
              style={{ width:350, height: 150, borderColor: 'gray', borderWidth: 1}}
              onChangeText={text => onChangeImage(text)}
              value={Image}
            />

          <Text  style={styles.margenTop10}></Text>
          <Button
            title="Guardar"
            onPress={() => EnviarRegistro()}
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