import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {View, StyleSheet, Button, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class LoginPage extends Component{
  constructor(props){
    super(props);
this.state = {
  loginName: '',
  password: ''
  }
}

  render(){

    const navigation = this.props.navigation;

    return(
    //  {/* //page view with colour*/}
      <View style = {styles.pageViewStyle}>


      {/* //title*/}
        <Text style = {styles.titleStyle}> -Coffida- </Text>



        {/* //form for Login name*/}
        <View style = {styles.formItemStyle}>
        <Text style = {styles.formLabelStyle}> Login Email: </Text>
        <TextInput
          placeholder = "Enter Login name"
          style = {styles.formInputStyle}
          onChangeText = {(loginName) =>this.setState({loginName})}
          value={this.state.loginName}/>
        </View>

      {/* //form for password*/}
        <View style = {styles.formItemStyle}>
        <Text style = {styles.formLabelStyle}> Password: </Text>
        <TextInput
          placeholder = "Enter Password"

          style = {styles.formInputStyle}
          onChangeText = {(password) =>this.setState({password})}
          value={this.state.password}/>
        </View>



        <View>
          <Button
          title = "Login"
          color="#f194ff"
          onPress={() => (this.attemptLogin())} />
          </View>
          <Button title="Register"
            onPress={()=>{this.props.navigation.navigate("RegistrationPage")}}    
          />
      </View>
    );
  }

  attemptLogin() {
    const navigation = this.props.navigation;

    console.log("login attempted")
    let attemptSuccess = false;
    {/* //contact database with this.state.loginName and this.state.password*/}
    let email = this.state.loginName;
    let password = this.state.password;

    return fetch('http://10.0.2.2:3333/api/1.0.0/user/login',{
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        email,
        password,
      }),
    })
    .then((response)=>{
      if (response.status === 200){
        Alert.alert("Welcome", "Success!")
        return response.json()
      } else {
        Alert.alert("incorrect details")
      }
    })
    /* store the session token with async storage */
    .then(async (responseJson) => {
      console.log(responseJson.id)
      await AsyncStorage.setItem("@session_token", String(responseJson.token));
      navigation.navigate("MainPage")
    })
  }
}




const styles = StyleSheet.create({
  pageViewStyle: {
    flex: 1,
    backgroundColor: "#27704c"
  },
  imageStyle:{
    flex: 1
  },
  titleStyle:{
    flex: 0.2,
    paddingVertical: 8,
    marginTop: 16,
    borderWidth: 4,
    borderColor: "#38733b",
    borderRadius: 6,
    backgroundColor: "#61dafb",
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
  formItemStyle:{
    flex: 1,
    padding:10
  },
  formLabelStyle:{
    fontSize: 15,
    color: "#20232a",
  },
  formInputStyle:{
    flex:1,
    borderWidth:1,
    borderColor:"#38733b",
    borderRadius: 6
  },
  buttonStyle:{
    flex:0.5,
    marginTop: 10,
    padding: 10,
    fontSize: 15,
    borderRadius: 5,
    borderColor:"#a7eaaa",
    backgroundColor: "powderblue",
  }
//formLabel
  //formtouch
  //formtouch text
})


