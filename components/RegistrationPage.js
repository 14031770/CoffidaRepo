import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {View, StyleSheet, Button, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';

export default class RegistrationPage extends Component{
  constructor(props){
    super(props);
this.state = {
  email: '',
  password: '',
  first_name: '',
  last_name: ''
  }
}
render(){

  const navigation = this.props.navigation;

  return(
    <View style = {styles.pageViewStyle}>
    {/* scrollview*/}
      <ScrollView>
      {/* title*/}
      <Text style = {styles.titleStyle}> Create an account</Text>

      {/* form for email*/}
      <View style = {styles.formItemStyle}>
      <Text style = {styles.formLabelStyle}> Email: </Text>
      <TextInput
        placeholder = "Enter email"
        style = {styles.formInputStyle}
        onChangeText = {(email) =>this.setState({email})}
        value={this.state.email}
        />
      </View>

      {/* form for PassWord*/}
      <View style = {styles.formItemStyle}>
      <Text style = {styles.formLabelStyle}> Password: </Text>
      <TextInput
        placeholder = "Choose password"
        style = {styles.formInputStyle}
        onChangeText = {(password) =>this.setState({password})}
        value={this.state.password}
        />
      </View>

      {/* form for password repeat*/}

      {/* form for first_name*/}
      <View style = {styles.formItemStyle}>
      <Text style = {styles.formLabelStyle}> First Name: </Text>
      <TextInput
        placeholder = "Enter first name"
        style = {styles.formInputStyle}
        onChangeText = {(first_name) =>this.setState({first_name})}
        value={this.state.first_name}
        />
      </View>

      <View style = {styles.formItemStyle}>
      <Text style = {styles.formLabelStyle}> Surname: </Text>
      <TextInput
        placeholder = "Enter last name"
        style = {styles.formInputStyle}
        onChangeText = {(last_name) =>this.setState({last_name})}
        value={this.state.last_name}
        />
      </View>
      <View>
      <Button
      title = "Register"
      color="#f194ff"
      onPress={()=>{this.registerFunction()}}
      />
      </View>
      </ScrollView>
    </View>

  );
}

registerFunction(){
  console.log("register attempted")

  const params = {
    first_name: this.state.first_name,
    last_name: this.state.last_name,
    email: this.state.email,
    password: this.state.password
  }

  return fetch('http://10.0.2.2:3333/api/1.0.0/user',{
    method: 'POST',
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(params)
})
  .then((response) =>{
    if (response.status === 201){
      Alert.alert("Sign up succesful!", "Welcome! ")
      return response.JSON()
    } else {
      Alert.alert("error!")
    }
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
})


