import React, {Component} from 'react';
import {ListItem} from 'react-native-elements';

import SaveButton from '../Header/SaveButton';
import {withNavigation} from 'react-navigation';
import {View} from 'react-native';

class SelectAccionVista extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedAction: '',
    };
  }

  static navigationOptions = {
    title: 'Seleccionar Accion',
    headerStyle: {
      backgroundColor: 'dodgerblue',
    },
    headerRight: () => {
      return <SaveButton text="Seleccionar" />;
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  componentWillUnmount() {
    this.props.navigation.state.params.changed(null, this.state.selectedAction);
  }

  customPress = (event, element) => {
    let selection = element;
    this.setState({
      selectedAction: selection,
    });
    this.props.navigation.state.params.changed(event, element);
    console.log(element);
  };

  render() {
    return (
      <View>
        {this.props.navigation.state.params.actions.map((element, idx) => (
          <ListItem
            key={idx}
            title={element}
            leftIcon={{name: 'call-to-action'}}
            onPress={event => this.customPress(event, element)}
            bottomDivider
          />
        ))}
      </View>
    );
  }
}

export default withNavigation(SelectAccionVista);
