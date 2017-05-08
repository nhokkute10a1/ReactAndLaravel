import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

import App from './src/components/App';

export default class ReactAndLaravel extends Component {
  render() {
    return (
      <App />
    );
  }
}
AppRegistry.registerComponent('ReactAndLaravel', () => ReactAndLaravel);
