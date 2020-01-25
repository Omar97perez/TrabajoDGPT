/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Inicio from './Components/Inicio';

import {name as appName} from './app.json';

import {firebase} from '@react-native-firebase/app';
 
firebase.database().setPersistenceEnabled(true);
firebase.database().setPersistenceCacheSizeBytes(2000000);

AppRegistry.registerComponent(appName, () => Inicio);
