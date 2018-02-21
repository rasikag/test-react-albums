import React from 'react';
import { Text, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// const App = () => {
//   return (
//     <View>
//       <Header header={'My Album'} />
//       <AlbumList />
//     </View>
//   );
// };

export default class App extends Component{

  render (){
    return (
      <View>
        <Header header='My Album'/>
        {/* <AlbumList /> */}
      </View>
    )
  };
}

