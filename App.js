import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from '.screens/home'
import Quiz from '.screen/quiz'
import Resultados from '.screen.result'
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'

const App = () => {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
};

export default App

const styles = StyleSheet.create({
    container:{
        paddingTop: 40,
        paddingHorizontal: 16,   
    },
});