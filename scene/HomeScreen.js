import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet,Image } from 'react-native';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
  }
  

  render() {
    return (
		<View style={{flex:1,backgroundColor:'lightgray',alignItems:'center'}}>
				
		<Text style={{fontSize:25,marginTop:100,fontWeight:'bold'}}>欢迎来到铁憨憨的世界</Text>

		 <Image 
			source={require('./picture/7.jpg')}
			style={[styles.picture]}/>
        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Login')}>
          <Text style={styles.buttonText}>返回上一页</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
	button: {
		position:'absolute',
		bottom:20,
		right:20,
		width: 150,
		paddingHorizontal: 15,
		paddingVertical: 6,
		borderStyle: 'solid',
		borderWidth: 1,
		borderRadius: 8,
		borderColor: '#ae9373',
		backgroundColor: '#f5f5f5',
		textAlign: 'center'
	},
	buttonText: {
		color: '#ae9373',
		fontSize: 20,
		lineHeight: 30,
		textAlign: 'center',

	},
	picture:{
		marginTop:80,
		width:200,
		height:200,
		borderRadius:100,
		alignItems:"center",
		
		
	}
})
