import React, { Component } from 'react';
import {View, StyleSheet, Button, Text, TextInput, TouchableOpacity } from 'react-native';
Import LoginPage from './components/LoginPage.js';


class RegistrationPage extends Component{
  constructor(props){
    super(props);
this.state = {
  email: '',
  password: '',
  firstName: '',
  lastName: ''
  }
}
render(){
  return(
    //scrollview

    //title

    //form for email

    //form for PassWord

    //form for password repeat

    //form for firstName

    //foprm for lastname


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
    flex: 1,
    paddingVertical: 8,
    marginTop: 16,
    borderWidth: 4,
    borderColor: "#38733b",
    borderRadius: 6,
    backgroundColor: "#61dafb",
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold"
  },
  formItemStyle:{
    padding:10
  },
  formLabelStyle:{
    fontSize: 15,
    color: "#20232a"
  },
  formInputStyle:{
    flex:1,
    borderWidth:1,
    borderColor:"#38733b",
    borderRadius: 6
  },
  buttonStyle:{
    flex:1,
    marginTop: 10,
    padding: 10,
    fontSize: 15,
    borderRadius: 5,
    borderColor:"#a7eaaa"
  }


export default LoginPage;
