import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {View, StyleSheet,ScrollView, Button, Text } from 'react-native';

class WriteReviewPage extends Component{
  constructor(props){
    super(props);
    this.state = {
      overallRating: '',
      priceRating: '',
      qualityRating: '',
      cleanliness: ''
      }
}

  render(){
    return(
      <View style = {styles.pageViewStyle}>
      {/* scrollview*/}
        <ScrollView>
        <Text style = {styles.titleStyle}> Rate your coffee!</Text>

        {/*form with review sections **COULD USE PICKERS HERE */}

        {/*overall rating */}
        <TextInput
          placeholder = "Overall Rating"
          style = {styles.formInputStyle}
          onChangeText = {(overallRating) =>this.setState({overallRating})}
          value={this.state.overallRating}
          />

        {/*price rating */}
        <TextInput
          placeholder = "Price Rating"
          style = {styles.formInputStyle}
          onChangeText = {(priceRating) =>this.setState({priceRating})}
          value={this.state.priceRating}
          />

        {/*quality rating */}
        <TextInput
          placeholder = "Quality Rating"
          style = {styles.formInputStyle}
          onChangeText = {(qualityRating) =>this.setState({qualityRating})}
          value={this.state.qualityRating}
          />

        {/*clenliness rating */}
        <TextInput
          placeholder = "Cleanliness Rating"
          style = {styles.formInputStyle}
          onChangeText = {(cleanliness) =>this.setState({cleanliness})}
          value={this.state.cleanliness}
          />

        {/*picture submission */}

        {/*upload button */}
        <Button
        title = "Read reviews"
        color="#4075a5"
        onPress={uploadReview}
        />
        {/*return to main 'goback button' navigation */}
        <Button
        title = "Back to menu"
        color="#31597e"
        onPress={() => navigation.goBack()}
        />
        </ScrollView>
      </View>
    )
  }

  function uploadReview() {
    //upload review to server and then send to Main menu - could send to my read review page and send my name as filter

    navigation.navigate('MainPage')
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


export default WriteReviewPage;
