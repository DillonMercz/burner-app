import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react'
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer} from 'react-navigation';  
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';  
import Icon from 'react-native-vector-icons/Ionicons'; 
import Profile from './screens/Profile';
import Home from './screens/Home';
import Login from './screens/Login';
import register from './screens/register';
import Favourite from './screens/Favourite';
import AddToCard from './screens/AddToCard';
import { firebase } from './src/firebase/config'
import firebaseApp from 'firebase/app'

if (!firebase.apps.length) {
   firebaseApp.initializeApp(firebase);
}else {
   firebaseApp.app(); // if already initialized, use that one
}

function LoggedIn() {

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({  
  container: {  
      flex: 1,  
      justifyContent: 'center',  
      alignItems: 'center'  
  },  
});  

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
      Profile: { screen: Profile,  
          navigationOptions:{  
              tabBarLabel:'Profile',  
              tabBarIcon: ({ tintColor }) => (  
                  <View>  
                      <Icon style={[{color: tintColor}]} size={25} name={'ios-person'}/>  
                  </View>),  
              activeColor:   '#f0edf6',  
              inactiveColor: '#226557',  
              barStyle: { backgroundColor: 'black' },  
          }  
      },  
      Image: { screen: Favourite,  
          navigationOptions:{  
              tabBarLabel:'Favourite',  
              tabBarIcon: ({ tintColor }) => (  
                  <View>  
                      <Icon style={[{color: tintColor}]} size={25} name={'ios-heart'}/>  
                  </View>),  
              activeColor:   '#f0edf6',  
              inactiveColor: '#226557',  
              barStyle: { backgroundColor: 'black' },  
          }  
      },  
      Cart: {  
          screen: AddToCard,  
          navigationOptions:{  
              tabBarLabel:'Add to Card',  
              tabBarIcon: ({ tintColor }) => (  
                  <View>  
                      <Icon style={[{color: tintColor}]} size={25} name={'ios-card'}/>  
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

function NotLoggedIn() {

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}


var TabNavigator = createMaterialBottomTabNavigator(  
  {  
      Login: { screen: Login,  
          navigationOptions:{  
              tabBarLabel:'Login',  
              tabBarIcon: ({ tintColor }) => (  
                  <View>  
                      <Icon style={[{color: tintColor}]} size={25} name={'ios-enter-outline'}/>  
                  </View>),  
          }  
      },  
      Register: { screen: register,  
          navigationOptions:{  
            tabBarVisible: false,
              tabBarLabel:'Register',  
              tabBarIcon: ({ tintColor }) => (  
                  <View>  
                      <Icon style={[{color: tintColor}]} size={25} name={'ios-add'}/>  
                  </View>),  
              activeColor:   '#52b36c',  
              inactiveColor: '#White',  
              barStyle: { backgroundColor: 'white' },  
          }  
      },   
  },  
  {  
    initialRouteName: "Login",  
    activeColor:   '#52b36c',  
    inactiveColor: '#226557',  
    barStyle: { backgroundColor: 'white' },  
  },  
); 

firebaseApp.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log('user logged')
        LoggedIn()
      }
      if (!user){
        console.log("No User Logged In!")
        NotLoggedIn()
      }
   });

export default createAppContainer(TabNavigator)