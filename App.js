import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from 'react-navigation/stack'
import React, {Component} from 'react';

import LoginPage from './components/LoginPage.js';
import MainPage from './components/MainPage.js';
import RegistrationPage from './components/RegistrationPage.js';
import WriteReviewPage from './components/WriteReviewPage.js';
import ReadReviewPage from './components/ReadReviewPage.js';

const Stack = createStackNavigator();

class App extends Component{
  constructor(props){
    super(props);
  }

render(){
    return(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name = "LoginPage" component = {LoginPage} />
          <Stack.Screen name = "MainPage" component = {MainPage} />
          <Stack.Screen name = "RegistrationPage" component = {RegistrationPage} />
          <Stack.Screen name = "WriteReviewPage" component = {WriteReviewPage} />
          <Stack.Screen name = "ReadReviewPage" component = {ReadReviewPage} />
        </Stack.Navigator>
      </NavigationContainer>
      <LoginPage />
    );
  }
}
