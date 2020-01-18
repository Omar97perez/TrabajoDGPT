/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Inicio from './Components/Inicio';

import {name as appName} from './app.json';

import database, {firebase} from '@react-native-firebase/database';
 
firebase.database().setPersistenceEnabled(true);
firebase.database().setPersistenceCacheSizeBytes(2000000);

AppRegistry.registerComponent(appName, () => Inicio);
