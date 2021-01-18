import React from 'react';
import { ScrollView, StyleSheet,Image, Text, TextInput, View } from 'react-native';
import Cat from './gato';

const Cafe = ()=>{
    return (
    <>
        <Cat name = "filhao"/>
        <Cat name = "paizao"/>
        <Image
        source ={{uri:"https://www.imagenspng.com.br/wp-content/uploads/2020/10/among-us-pink-png-01-791x1024.png"}}
        style={{width: 200, height: 2000,padding: 10, margin:50}}
      />
    </>);
}
export default Cafe;
