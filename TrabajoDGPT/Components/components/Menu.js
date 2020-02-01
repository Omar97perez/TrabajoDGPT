import React from 'react';
import PropTypes from 'prop-types';
import {
  Dimensions,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
} from 'react-native';
import {Icon} from 'react-native-elements';

const window = Dimensions.get('window');

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    height: window.height,
    backgroundColor: '#343a40',
    padding: 20,
  },
  avatarContainer: {
    marginBottom: 20,
    marginTop: 20,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    flex: 1,
  },
  name: {
    position: 'absolute',
    color: 'white',
    left: 70,
    top: 20,
  },
  item: {
    fontSize: 14,
    fontWeight: '300',
    color: 'white',
    paddingTop: 5,
  },
});

export default function Menu({ onItemSelected, email }) {
  return (
    <ScrollView scrollsToTop={false} style={styles.menu}>
      <View style={styles.avatarContainer}>
        <Image
          style={styles.avatar}
          source={require('./img/User.png')}
        />
        <Text style={styles.name}>{email}</Text>
      </View>
      <Text
        onPress={() => onItemSelected('FormEspecie')}
        style={styles.item}
      >
        Nueva Especie
      </Text>

      <Text
        onPress={() => onItemSelected('FormRegistro')}
        style={styles.item}
      >
        Nuevo Registro
      </Text>

      <Text
        onPress={() => onItemSelected('FormComplTrabajo')}
        style={styles.item}
      >
        Trabajo Completado
      </Text>
    </ScrollView>
  );
}

Menu.propTypes = {
  onItemSelected: PropTypes.func.isRequired,
};
