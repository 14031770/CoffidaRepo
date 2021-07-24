import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {FlatList, View, StyleSheet, Button, Text } from 'react-native';

class ReadReviewPage extends Component{
  constructor(props){
    super(props);
    this.state = {
      locationFilter: '',
      userFilter: ''
      }
}
  render(){
    return(
      <View style = {styles.pageViewStyle}>
      {/*location filter*/}
      <TextInput
        placeholder = "Filter by location"
        style = {styles.formInputStyle}
        onChangeText = {(locationFilter) =>this.setState({locationFilter})}
        value={this.state.locationFilter}
        />
      {/*user filter*/}
      <TextInput
        placeholder = "Filter by user"
        style = {styles.formInputStyle}
        onChangeText = {(userFilter) =>this.setState({userFilter})}
        value={this.state.userFilter}
        />

      {/*display filtered list here based on location and user filter*/}
      <FlatList>
        


      </FlatList>
      </View>
    )
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


export default ReadReviewPage;
