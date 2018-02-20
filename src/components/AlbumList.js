import React from 'react';
import { Component } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';

class AlbumList extends Component {

    state = {albums :[]}
    componentWillMount(){
        axios.get('here goes the url')
            // this for one line 
            //.then(response => console.log(response));
            .then(response => {
                this.setState({albums : response.data});
            });
    }

    renderAlbums(){
        return this.state.albums.map(album => <Text>{album.title}</Text>);
    }

    render() {
        return (
            <View>
                <Text>Album List</Text>
            </View>
        );
    };
}

export default AlbumList;