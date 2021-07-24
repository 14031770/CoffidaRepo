import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {View, StyleSheet, Button, Text } from 'react-native';

class MainPage extends Component{
  constructor(props){
    super(props);
    this.state = {
      //form items here


      }
}

  render(){

    const navigation = this.props.navigation;


    return(
      <View style = {styles.pageViewStyle}>
      <Text

      {/* button to write review page*/}
      <Button
      title = "Post new review"
      color="#488dcd"
      onPress={() => navigation.navigate('WriteReviewPage')}
      />
      {/* button to read reviews */}
      <Button
      title = "Read reviews"
      color="#4075a5"
      onPress={() => navigation.navigate('ReadReviewPage') }
      />
      {/* button to see my reviews? - do this by sending my name as filter to ReadReviewPage */}
      {/* button to logout */}
      <Button
      title = "Logout"
      color="#31597e"
      onPress={logOut}
      />
      </View>
    );
  }


  function logOut() {
    //logout of session and return to login screen

    navigation.popToTop();
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
    color: "#20232a",
  },
  formInputStyle:{
    flex:1,
    borderWidth:1,
    borderColor:"#38733b",
    borderRadius: 6,
  },
  buttonStyle:{
    flex:1,
    marginTop: 10,
    padding: 10,
    fontSize: 15,
    borderRadius: 5,
    borderColor:"#a7eaaa",
  },
  textStyle:{
    color:'white',
    fontSize: 27
  }
//formLabel
  //formtouch
  //formtouch text
})

export default MainPage;
