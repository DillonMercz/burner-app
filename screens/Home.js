import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react'
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer} from 'react-navigation';  
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';  
import Icon from 'react-native-vector-icons/Ionicons'; 
import Profile from './Profile';

import Login from './Login';
import register from './register';
import Favourite from './Favourite';
import AddToCard from './AddToCard';
import { firebase } from '../src/firebase/config'
import firebaseApp from 'firebase/app'
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

function Home() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
 

}
export default createAppContainer(TabNavigator)
