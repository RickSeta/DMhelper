import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet,Image, Text, TextInput, View } from 'react-native';
import Cafe from './components/cafe';
import Cat from './components/gato';
import MainMenu from './mainMenu/mainMenu'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import CustomDrawerContent from './navigation/drawerComponent';
import TurnosComponent from './components/turnos/turnosComponent';
import EAComponent from './components/effectsAndHabilities/effectsAndHabilitiesComponent';
import Home from './index'


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator

export default function App() {
    return(
      <Home/>
    );
  
}
