import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet,TextInput ,Image,Dimensions} from 'react-native';

//获取屏幕尺寸
const {width,height} = Dimensions.get('window');

export default class HomeScreen extends Component {
	
	//  super关键字，它指代父类的实例（即父类的this对象）。子类必须在constructor方法中调用super方法，否则新建实例时会报错,
	// 如果你用到了constructor就必须写super(),是用来初始化this的，可以绑定事件到this上;
	constructor(props) {
		super(props);
	this.state ={
		username:'',
		password:''
	}
	}
	handUsername=(userName)=>{
		
		
		this.username=userName;
	}
	handPassword=(passWord)=>{
	
		this.password=passWord;
	}
	loign=()=>{
		if(this.username=='admin'&& this.password=='123')
	
		this.props.navigation.navigate('Home')
			
		else
			
			alert('密码错误')
		
	}
	render() {
		return (
			<View style={{flex:1,backgroundColor:'lightgray',alignItems:'center'}}>
				
				<Text style={{fontSize:40,marginTop:50,fontWeight:'bold'}}>F项目</Text>
				<View style={styles.inputboxView}>
					{/* <Image
					source={require('./picture/0.jpg')}
					stlye={[styles.imgeView]}/> */}

					<Image 
					source={require('./picture/7.jpg')}
					style={[styles.picture]}/>


					{/* <Text >账号: </Text> */}
				{/* <TextInput placeholder='账户' style={styles.textinputView}/> */}
				<TextInput onChangeText={this.handUsername} placeholder='账号' style={styles.textinputView}/>
				</View>
				<View style={styles.inputboxView}>
					{/* <Image
					source={require('./picture/0.jpg')}
					stlye={[styles.imgeView]}/> */}
					<Image 
					source={require('./picture/7.jpg')}
					style={[styles.picture]}/>
					{/* <Text >密码: </Text> */}
				{/* <TextInput   placeholder='密码' secureTextEntry={true} style={styles.textinputView}/> */}
				<TextInput  onChangeText={this.handPassword} placeholder='密码' secureTextEntry={true} style={styles.textinputView}/>
				</View>
				
				<TouchableOpacity style={styles.button} onPress={this.loign}>
					<Text style={styles.buttonText}>登录</Text>
				</TouchableOpacity>
			</View>
		)
	}
	}


const styles = StyleSheet.create({
	button: {
		width: 100,
		marginTop: 40,
		minHeight: 46,
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
		textAlign: 'center'
	},
	textinputView:{
		height:40,
		width:width*0.6,
		// borderRadius:10,
		// marginTop:8,
		padding:8,
		backgroundColor:'cyan',
		alignItems:'center'
	},
	// imgeView:{
	// 	width:30,
	// 	height:30,
	// 	borderRadius:45,
	// 	alignItems:'center',
	// },
	inputboxView:{
			marginTop:20,
			flexDirection:'row',
			height:50,
			width:width*0.8,
			borderRadius:8,
			justifyContent:'center',
			alignItems:'center',
			backgroundColor:'cyan'
			},
	picture:{
			
				width:30,
				height:30,
				borderRadius:45,
				alignItems:"center",				
			}
})
