import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header from './src/Component/Header';

export default class App extends Component{
  render() {
    return (
    	<View>
        <Header></Header>
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
