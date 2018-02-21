import React from 'react';
import { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {

    state = { albums: [] }
    componentWillMount() {
        axios.get('here goes the url')
            // this for one line 
            //.then(response => console.log(response));
            .then(response => {
                this.setState({ albums: response.data });
            });
    }

    renderAlbums() {
        return this.state.albums.map(album =>
            <AlbumDetail key={album.title}  album={album}/>);
    }

    render() {
        return (
            <View>
                {this.renderAlbums()}
            </View>
        );
    };
}

export default AlbumList;