import * as React from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import Query from './Query/Query';

import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
  Cols,
  Cell,
} from 'react-native-table-component';

export default class InicioTabla extends React.Component {
  state = {results: [], tableHead: ['Fecha', 'Tarea', 'Lugar'], tableData: []};

  handleResults = results => {
    this.setState({results});
  };

  renderResults = () => {
    let results = this.state.results;
    results.forEach(result => {
      this.state.tableData.push(result);
    });

    return (
      <View style={styles.container}>
        <View style={styles.center}>
          <Text style={styles.margenTopMenos8} />
          <Text style={styles.Titulo}>Inicio</Text>
        </View>
        <Text style={styles.margenTopMenos8} />
        <Text style={styles.margenTop10} />
        <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
          <Row
            data={this.state.tableHead}
            style={styles.head}
            textStyle={styles.text}
          />
          <Rows data={this.state.tableData} textStyle={styles.text} />
        </Table>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph} />
        <Query onResults={this.handleResults} />
        {this.state.results.length === 0 ? (
          <Text>Sin resultados</Text>
        ) : (
          this.renderResults()
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
