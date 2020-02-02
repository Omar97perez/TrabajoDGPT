import React, {useState} from 'react';
import MapView, {Marker} from 'react-native-maps';

import {View, StyleSheet} from 'react-native';

const MapVista = props => {
  const [marker, setMarker] = useState(false);
  const [coord, setCoordinate] = useState(null);

  const myMarker = event => {
    console.log(event.nativeEvent.coordinate);
    setCoordinate(event.nativeEvent.coordinate);
    setMarker(true);
  };

  return (
    <MapView
      style={StyleSheet.absoluteFillObject}
      onPress={coordinate => myMarker(coordinate)}
      initialRegion={{
        latitude: 28.288718720767292,
        longitude: -16.49008141699221,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}>
      {marker ? (
        <Marker coordinate={coord} title="Test" description="Okey" />
      ) : null}
    </MapView>
  );
};

export default MapVista;
