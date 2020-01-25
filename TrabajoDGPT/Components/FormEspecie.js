import React, {Component} from 'react';
import firebase from 'firebase';
import {StyleSheet, Text, View, Button, Image, TextInput, ScrollView  } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import SaveButton from './Header/SaveButton';


import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

class FormNewAnimal extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Nueva Especie',
      headerStyle: {
        backgroundColor: 'dodgerblue',
      },
      headerRight: <SaveButton text="Guardar" onPress={() => this.EnviarRegistro()}/>,
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
  };

  constructor(props) {
    super(props);
    this.state = {
      filePath: {},
      Quadrille: '',
      PlaceSighting: ''
    };
  }

  chooseFile = () => {
    var options = {
      title: 'Selecione una acción',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        let source = response;
        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };
        this.setState({
          filePath: source,
        });
      }
    });
  };

  EnviarRegistro = () =>{
    console.log("22222222222");
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
    if(!firebase.apps.length){
      firebase.initializeApp(config);
    }
    
    var id = "Animal" + Math.floor(Math.random() * (99 - 0 + 1) + 0) + Math.floor(Math.random() * (99 - 0 + 1) + 0) + Math.floor(Math.random() * (99 - 0 + 1) + 0);
    
      firebase.database().ref('NewAnimal/' + id ).set(
          {
              NombreCuadrilla: this.state.Quadrille,
              Lugar: this.state.PlaceSighting,
              Imagen: this.state.filePath
          }
      );
  }
  


  //Actualizar registro 
  ActualizarRegistro = () =>{
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
    
    firebase.database().ref('users/004').update({
        name: 'Pheng Sengvuthy'
    });
  }

  //Recoger elementos 
  RecogerElementos = () =>{
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
    if(!firebase.apps.length){
      firebase.initializeApp(config);
    }

    firebase.database().ref('NewAnimal').on('value', (data) => {
        console.log(data.toJSON());
    })
  }

  //Eliminar registro 
  EliminarRegistro = () =>{
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

  onChangeQuadrille = Quadrille => {
    this.setState({
      Quadrille: Quadrille,
    });
  };

  onChangePlaceSighting = PlaceSighting => {
    this.setState({
      PlaceSighting: PlaceSighting,
    });
  };
  
  render() {
    const {Quadrille,PlaceSighting} = this.state;
    return (
      <ScrollView > 
        <View  style={styles.container}>
          <Text style={styles.margenTopMenos8}></Text>
          <Text style={styles.margenTopMenos8}></Text>
          <Text style={styles.Titulo}>Nueva Especie</Text>
          <Text style={styles.Titulo3}>Nombre Cuadrilla</Text>
          <Text style={styles.margenTopMenos8}></Text>
          <TextInput
              style={{ width:350, height: 40, borderColor: 'gray', borderWidth: 1}}
              onChangeText={text => this.onChangeQuadrille(text)}
              value={Quadrille}
            />
          <Text style={styles.Titulo3}>Lugar Avistamiento</Text>
          <Text style={styles.margenTopMenos8}></Text>
          <TextInput
              style={{ width:350, height: 40, borderColor: 'gray', borderWidth: 1}}
              onChangeText={text => this.onChangePlaceSighting(text)}
              value={PlaceSighting}
            />
          <Text style={styles.margenTopMenos8}></Text>
          <Text style={styles.margenTopMenos8}></Text>
          <Button title="Seleccionar Imagen" onPress={this.chooseFile.bind(this)} />
          <Text style={styles.margenTopMenos8}></Text>
          <Text style={styles.margenTopMenos8}></Text>
          <Image
            source={{ uri: this.state.filePath.uri }}
            style={{ width: 200, height: 200 }}
          />
          <Text style={styles.margenTopMenos8}></Text>
          <Text style={styles.margenTopMenos8}></Text>
          <Button
            title="Guardar"
            onPress={() => this.RecogerElementos()}
          />
        </View >
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
  },
});

export default FormNewAnimal;