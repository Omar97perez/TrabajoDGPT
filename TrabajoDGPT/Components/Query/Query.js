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
    let ref = firebase.database().ref('records');
    var tasks = [];
    ref.once('value', snapshot => {
      let data = Object.values(snapshot.val());
      data.forEach(item => {
        const {uuid} = item;
        tasks.push(uuid);
      });
      console.log('terminadas')
      var unfinishedTasks = [];
      let uref = firebase.database().ref('tasks');
      var utasks = [];
      uref.once('value', snapshot => {
        let udata = Object.values(snapshot.val());
        udata.forEach(item => {
         if (!(tasks.includes(item.uuid)))
          unfinishedTasks.push(item);
        })
      })
      this.props.onResults(unfinishedTasks);
    });
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
