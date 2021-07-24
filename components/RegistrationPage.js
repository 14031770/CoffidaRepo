import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {View, StyleSheet, Button, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';

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

      {/* form for firstName*/}
      <View style = {styles.formItemStyle}>
      <Text style = {styles.formLabelStyle}> First Name: </Text>
      <TextInput
        placeholder = "Enter first name"
        style = {styles.formInputStyle}
        onChangeText = {(firstName) =>this.setState({firstName})}
        value={this.state.firstName}
        />
      </View>

      {/* form for lastname*/}
      <View style = {styles.formItemStyle}>
      <Text style = {styles.formLabelStyle}> Surname: </Text>
      <TextInput
        placeholder = "Enter last name"
        style = {styles.formInputStyle}
        onChangeText = {(lastName) =>this.setState({lastName})}
        value={this.state.lastName}
        />
      </View>
      <View>
      <Button
      title = "Register"
      color="#f194ff"
      onPress={register}
      />
      </View>
      </ScrollView>
    </View>

  );
}

function register() {
//contact database and register with this.state..... information from user

  //redirect to login page - maybe with callback/wait here
  return(
    onPress={() => navigation.navigate('LoginPage')}
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
})


export default RegistrationPage;
