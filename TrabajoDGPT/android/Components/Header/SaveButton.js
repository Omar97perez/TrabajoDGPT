import React, {Component} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {withNavigation} from 'react-navigation';
import {Icon} from 'react-native-elements';

class SaveButton extends Component {
  render() {
    return (
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
          paddingRight: 10,
        }}>
        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
          <Text style={{fontSize: 15, textAlign: 'center', color: 'white'}}>
            {this.props.text}
          </Text>
          {/* <Icon name="save" color="white" /> */}
        </TouchableOpacity>
      </View>
    );
  }
}

export default withNavigation(SaveButton);
