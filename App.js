import React from 'react';
import { Text } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/albumList';

const App = () => (
  <View>
    <Header headerText={'Albums'}/>
    <AlbumList/>
  </View>
);

export default App;
