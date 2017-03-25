
import React, { Component, PropTypes } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

export default class ControlPanel extends Component {
  static propTypes = {
    closeDrawer: PropTypes.func.isRequired
  };

  render() {
    let {closeDrawer} = this.props
    return (
      <ScrollView style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={closeDrawer}>
          <Text>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={closeDrawer}>
          <Text>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={closeDrawer}>
          <Text>Back</Text>
        </TouchableOpacity>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'black',
  },
  controlText: {
    color: 'white',
  },
  button: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
  }
})
