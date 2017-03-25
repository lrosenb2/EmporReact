/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Platform,
} from 'react-native';

import Drawer from 'react-native-drawer'
import Header from './header';
import SwipeCards from './swipecards';
import ControlPanel from './ControlPanel'

const windowMarginTop = (Platform.OS === 'ios') ? 24 : 0;
export default class Empor extends Component {
  state={
    drawerOpen: true,
    drawerDisabled: false,
  };
  closeDrawer = () => {
    this._drawer.close()
  };
  openDrawer = () => {
    this._drawer.open()
  };
  render() {
    return (
      <Drawer
        ref={(ref) => this._drawer = ref}
        type="static"
        content={
          <ControlPanel closeDrawer={this.closeDrawer} />
        }
        acceptDoubleTap
        styles={{main: {shadowColor: '#000000', shadowOpacity: 0.3, shadowRadius: 15}}}
        onOpen={() => {
          console.log('onopen')
          this.setState({drawerOpen: true})
        }}
        onClose={() => {
          console.log('onclose')
          this.setState({drawerOpen: false})
        }}
        captureGestures={false}
        tweenDuration={100}
        panThreshold={0.08}
        disabled={this.state.drawerDisabled}
        openDrawerOffset={(viewport) => {
          return 100
        }}
        closedDrawerOffset={() => 0}
        panOpenMask={0.2}
        negotiatePan
        >
          <View style={styles.viewPortContainer}>
            <Header/>
            <SwipeCards/>
          </View>
      </Drawer>
      );
  }
}

const drawerStyles = {
  drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
  main: {paddingLeft: 3},
}

const styles = StyleSheet.create({
    viewPortContainer: {
      marginTop: windowMarginTop,
      flex: 1,
    },
  });

AppRegistry.registerComponent('Empor', () => Empor);
