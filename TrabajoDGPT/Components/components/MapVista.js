import React, {useState, useContext, useEffect} from 'react';
import MapView, {Marker} from 'react-native-maps';
import {NavigationContext} from 'react-navigation';
import {View, StyleSheet} from 'react-native';

const MapVista = props => {
  const navigation = useContext(NavigationContext);
  const [marker, setMarker] = useState(false);
  const [coord, setCoordinate] = useState(null);
  const [viewOnly, setViewOnly] = useState(false);

  const sendCoordinate = event => {
    if (!viewOnly) {
      console.log(event.nativeEvent.coordinate);
      setCoordinate(event.nativeEvent.coordinate);
      navigation.getParam('markerHandler')(event.nativeEvent.coordinate);
      setMarker(true);
    }
  };

  useEffect(() => {
    if (navigation.getParam('setMarker')) {
      setMarker(true);
      let coordinate = {
        latitude: navigation.getParam('location').lat,
        longitude: navigation.getParam('location').lon,
      };
      setCoordinate(coordinate);
      setViewOnly(true);
    }
  }, [navigation]);

  return (
    <MapView
      style={StyleSheet.absoluteFillObject}
      onPress={event => sendCoordinate(event)}
      initialRegion={{
        latitude: navigation.getParam('location').lat,
        longitude: navigation.getParam('location').lon,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}>
      {marker ? <Marker coordinate={coord} /> : null}
    </MapView>
  );
};

export default MapVista;
