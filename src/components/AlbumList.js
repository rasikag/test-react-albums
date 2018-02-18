import React from 'react';
import { Text, View } from 'react-native';

class AlbumList extends Component{

    componentWillMount(){
        console.log('component was mounted');
    }
    
    render() {
        <View>
            <Text>Album List</Text>
        </View>
    };
};

const styles = StyleSheet.create({
    textStyles : {
        fontSize: 60
    }
});

export default AlbumList;