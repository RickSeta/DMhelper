import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet,Image, Text, TextInput, View } from 'react-native';
import Cafe from './components/cafe';
import Cat from './components/gato';
import MainMenu from './navigation/mainMenu'

export default function App() {
    return(
      <ScrollView style={{margin: 30}}>
      <MainMenu/>
      </ScrollView>
    );
  
}
