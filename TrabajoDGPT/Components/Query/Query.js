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

  componentDidMount() {
    let ref = firebase.database().ref('records');
    var tasks = [];
    var unfinishedTasks = [];
    ref.once('value', snapshot => {
      let data = Object.values(snapshot.val());
      data.forEach(item => {
        const {uuid} = item;
        tasks.push(uuid);
      });
      console.log(tasks);
      let uref = firebase.database().ref('tasks');
      uref
        .once('value', snapshot => {
          let udata = Object.values(snapshot.val());
          udata.forEach(item => {
            if (!tasks.includes(item.uuid)) {
              let task = [];
              const {action, date, location, uuid} = item;
              task.push(action, date, location, null);
              unfinishedTasks.push(task);
            }
          });
        })
        .then(result => {
          unfinishedTasks.sort(function (o1,o2) {
            if (o1[1] > o2[1]) { 
              return 1;
            } else {
              return -1;
            } 
          });
          this.props.onResults(unfinishedTasks);
        });
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph} />
      </View>
    );
  }
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
