
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet,Image } from 'react-native';

export default class App extends Component{
  render(){
    return (
      <View style={{flex:1,marginTop:40,backgroundColor:'cyan'}}>
        <Image source={require('./picture/0.jpg')}
        style={{marginTop:50,alignItems:'center',justifyContent:'center'}}/>
        <Text style={{fontSize:15,textAlign:'center'}}>Welcome</Text>
        </View>
    )

  }
  

}
