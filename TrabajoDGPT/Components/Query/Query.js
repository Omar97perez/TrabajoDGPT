import * as React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

var firebase = require('firebase');

var config = {
  databaseURL: 'https://agei-699fd.firebaseio.com/',
  projectId: 'agei-699fd',
};

if (!firebase.apps.length) firebase.initializeApp(config);

export default class Query extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph} />
      </View>
    );
  }

  componentDidMount = () => {
    let ref = firebase.database().ref('tasks');
    var tasks = [];
    ref.once('value', snapshot => {
      let data = Object.values(snapshot.val());
      data.forEach(item => {
        let task = [];
        const {action, date, location, uuid} = item;
        task.push(action, date, Object.values(location));
        tasks.push(task);
      });
      this.props.onResults(tasks);
    });
  };
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
