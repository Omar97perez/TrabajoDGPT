import * as React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {Table, TableWrapper, Row, Cell} from 'react-native-table-component';
import Constants from 'expo-constants';
import {Icon} from 'react-native-elements';
import {StackActions, withNavigation} from 'react-navigation';
import Query from './Query/Query';

class InicioTabla extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    results: [],
    tableHead: ['Tarea', 'Fecha', 'Lugar', 'Finalizar'],
    tableData: [],
  };

  handleResults = results => {
    this.setState({results});
  };

  goToMapView = (latitud, longitud) => {
    const goToMap = StackActions.push({
      routeName: 'MapView',
      params: {
        location: {
          lat: latitud,
          lon: longitud,
        },
        markerHandler: () => {},
        setMarker: true,
      },
    });
    this.props.navigation.dispatch(goToMap);
  };

  goToFinalView = index => {
    const goToMap = StackActions.push({
      routeName: 'FormComplTrabajo',
      params: {
        task: {
          location: {
            lat: this.state.results[index][2].lat,
            lon: this.state.results[index][2].lon,
          },
        },
      },
    });
    this.props.navigation.dispatch(goToMap);
  };

  button = (cellData, cellIndex, index) => {
    return cellIndex === 2 ? (
      <TouchableOpacity
        onPress={() => this.goToMapView(cellData.lat, cellData.lon)}>
        <Text style={{color: '#6fc0ff', fontSize: 18, textAlign: 'center'}}>
          Ir
        </Text>
      </TouchableOpacity>
    ) : (
      <TouchableOpacity onPress={() => this.goToFinalView(index)}>
        <Icon name="arrow-forward" color="#6fc0ff" />
      </TouchableOpacity>
    );
  };

  renderResults = () => {
    let results = this.state.results;
    this.state.tableData = [...results];

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
                          ? this.button(cellData, cellIndex, index)
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
          <Text style={styles.textHeader}>Sin resultados</Text>
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

export default withNavigation(InicioTabla);
