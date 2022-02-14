import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react'
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer} from 'react-navigation';  
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';  
import Icon from 'react-native-vector-icons/Ionicons'; 
import Clients from './Clients';
import styles from './styles';
import Login from './Login';
import register from './register';
import Favourite from './Favourite';
import AddToCard from './AddToCard';
import { firebase } from '../src/firebase/config'
import firebaseApp from 'firebase/app'
export default function Home() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      
    </View>
  );
 

}

