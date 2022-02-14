import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react'
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer} from 'react-navigation';  
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';  
import Icon from 'react-native-vector-icons/Ionicons'; 
import Clients from './screens/Clients';
import Home from './screens/Home';
import Login from './screens/Login';
import register from './screens/register';
import AddToCard from './screens/AddToCard';
import { firebase } from './src/firebase/config'
import firebaseApp from 'firebase/app'

if (!firebase.apps.length) {
   firebaseApp.initializeApp(firebase);
}else {
   firebaseApp.app(); // if already initialized, use that one
}

var TabNavigator = createMaterialBottomTabNavigator(  
  {  
      Home: { screen: Home,  
          navigationOptions:{  
              tabBarLabel:'Home',  
              tabBarIcon: ({ tintColor }) => (  
                  <View>  
                      <Icon style={[{color: tintColor}]} size={25} name={'ios-home'}/>  
                  </View>),  
          }  
      },  
      Clients: { screen: Clients,  
          navigationOptions:{  
              tabBarLabel:'Clients',  
              tabBarIcon: ({ tintColor }) => (  
                  <View>  
                      <Icon style={[{color: tintColor}]} size={25} name={'ios-person'}/>  
                  </View>),  
              activeColor:   '#f0edf6',  
              inactiveColor: '#226557',  
              barStyle: { backgroundColor: 'black' },  
          }  
      },  
      Login: { screen: Login,  
          navigationOptions:{  
              tabBarLabel:'Login',  
              tabBarIcon: ({ tintColor }) => (  
                  <View>  
                      <Icon style={[{color: tintColor}]} size={25} name={'ios-enter-outline'}/>  
                  </View>),  
              activeColor:   '#f0edf6',  
              inactiveColor: '#226557',  
              barStyle: { backgroundColor: 'black' },  
          }  
      },  
      Register: {  
          screen: AddToCard,  
          navigationOptions:{  
              tabBarLabel:'Add to Card',  
              tabBarIcon: ({ tintColor }) => (  
                  <View>  
                      <Icon style={[{color: tintColor}]} size={25} name={'ios-add'}/>  
                  </View>),  
          }  
      },  
  },  
  {  
    initialRouteName: "Home",  
    activeColor:   '#52b36c',  
    inactiveColor: '#226557',  
    barStyle: { backgroundColor: 'white' },  
  },  
);

firebaseApp.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log('user logged')
      }
      if (!user){
        console.log("No User Logged In!")
      }
   });

export default createAppContainer(TabNavigator)