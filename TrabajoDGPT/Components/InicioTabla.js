import * as React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Constants from 'expo-constants';

import {Icon} from 'react-native-elements';

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
  state = {
    results: [],
    tableHead: ['Tarea', 'Fecha', 'Lugar', 'Finalizar'],
    tableData: [],
  };

  handleResults = results => {
    this.setState({results});
  };

  renderResults = () => {
    let results = this.state.results;
    this.state.tableData = [...results];

    const botonUbicacion = (cellData, cellIndex) => {
      return cellIndex === 2 ? (
        <TouchableOpacity>
          <Text style={{color: '#6fc0ff', fontSize: 18, textAlign: 'center'}}>
            Ir
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity>
          <Icon name="arrow-forward" color="#6fc0ff" />
        </TouchableOpacity>
      );
    };

    return (
      <View style={{height: '100%'}}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 42,
          }}>
          Inicio
        </Text>
        <ScrollView>
          <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
            <Row
              data={this.state.tableHead}
              style={styles.head}
              textStyle={styles.textHeader}
            />
            {this.state.tableData.map((rowData, index) => {
              return (
                <TableWrapper style={styles.row}>
                  {rowData.map((cellData, cellIndex) => (
                    <Cell
                      key={cellIndex}
                      data={
                        cellIndex === 2 || cellIndex === 3
                          ? botonUbicacion(cellData, cellIndex)
                          : cellData
                      }
                      textStyle={styles.text}
                    />
                  ))}
                </TableWrapper>
              );
            })}
          </Table>
        </ScrollView>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
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
  textHeader: {
    textAlign: 'center',
  },
  text: {
    textAlign: 'center',
    paddingVertical: 20,
  },
  btn: {
    width: 58,
    height: 18,
    backgroundColor: '#78B7BB',
    borderRadius: 2,
    alignSelf: 'center',
  },
  btnText: {
    textAlign: 'center',
  },
  row: {flexDirection: 'row'},
});
