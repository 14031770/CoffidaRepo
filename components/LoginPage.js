import React, { Component } from 'react';
import {View, StyleSheet, Button, Text, TextInput, TouchableOpacity } from 'react-native';
Import RegistrationPage from './components/RegistrationPage.js';
Import MainPage from './components/MainPage.js';


class LoginPage extends Component{
  constructor(props){
    super(props);
this.state = {
  loginName: '',
  password: ''
  }
}
{/* */}
  render(){
    return(
      {/* //page view with colour*/}
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
          value={this.state.loginName}
          />
        </View>
      {/* //form for password*/}
        <View style = {styles.formItemStyle}>
        <Text style = {styles.formLabelStyle}> Password: </Text>
        <TextInput
          placeholder = "Enter Password"

          style = {styles.formInputStyle}
          onChangeText = {(password) =>this.setState({password})}
          value={this.state.password}
          />
        </View>
        <View>
          <Button
          title = "Log in"
          onPress={attemptLogin}
          />
          <Button
          title = "Register"
          color="#f194ff"
          onPress={registrationLink}
          />
          </View>
      </View>
    );
  }

  function attemptLogin() {
    let attemptSuccess = false;
    {/* //contact database with this.state.loginName and this.state.password*/}


    {/* //get password from database and compare to input (this.state.password) and alter attemptSuccess
    //return session token and user id*/}
    if(attemptSuccess){
      return(
        <MainPage />
      );
    }
  }
  function registrationLink() {
  {/* //nagivate to RegistrationPage CHECK THIS IS CORRECT*/}
  return(
    <RegistrationPage />
  );
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
    flex: 1
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

export default LoginPage;
