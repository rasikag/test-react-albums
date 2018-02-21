import React, { Component } from 'react';
import { View } from 'react-native';
import Header from './src/components/Header';

class App extends Component {
  render() {
    return (
      <View>
        <Header header='My Album' />
      </View>
    )
  };
}

export default App;

