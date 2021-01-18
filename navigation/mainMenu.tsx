import React from 'react'
import styles from './styles'
import AppButton from '../components/AppButton'
import {Button, Text, TextInput, View} from 'react-native'

const MainMenu = (props:any)=>{
    const novoJogo = () => console.log('Novo jogo');
    const retomaJogo = () => console.log('Retomei');
    return(
    <View>
        <Text style={styles.title}>
            Menu inicial
        </Text>
        
        <AppButton onPress={()=>retomaJogo()} title="Retomar jogo" buttonStyle={styles.button} textStyle={styles.buttonText}></AppButton>
        <AppButton onPress={()=>novoJogo()} title="Novo jogo" buttonStyle={styles.button} textStyle={styles.buttonText}></AppButton>
        
    </View>
    );
}


export default MainMenu;