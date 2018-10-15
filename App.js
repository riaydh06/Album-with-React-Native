import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header from './src/Component/Header';
import AlbumList from './src/Component/AlbumList';

export default class App extends Component{
  render() {
    return (
    	<View style={{flex:1}}>
        <Header headerText={'Albums'}></Header>
        <AlbumList></AlbumList>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textcolor:{
  	color:'red',
  	justifyContent: 'center',
  	alignItems:'center',
    height:300,
    fontSize:30,
  }
});
