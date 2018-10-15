import React,{Component} from 'react';
import {ScrollView} from 'react-native';
import axios from 'axios';
import AlbumsDetails from './AlbumsDetails';

class AlbumList extends Component{
	state = {
		albums : []
	}
	componentWillMount(){
		axios.get('https://rallycoding.herokuapp.com/api/music_albums')
		.then((res)=>{
			this.setState({albums:res.data})
		})
	}
	renderAlbums(){
			return this.state.albums.map(album=> <AlbumsDetails key={album.title} album={album}/>
		); 
	}
	render(){
	   	return (
	   		<ScrollView>
	   			{this.renderAlbums()}
	   		</ScrollView>
	   	);
    }
};

export default AlbumList;