import React from 'react'
import styles from './styles'
import AppButton from '../components/AppButton'
import {Button, Text, TextInput, View} from 'react-native'
import MenuInterface from './mainMenuMethods'

const MainMenu = (props:any)=>{
    return(
    <View>
        <Text style={styles.title}>
            Menu inicial
        </Text>
        
        <AppButton 
            onPress={()=> MenuInterface.restartGame()} 
            title="Retomar jogo" 
            buttonStyle={styles.button} 
            textStyle={styles.buttonText}></AppButton>

        <AppButton onPress={()=> MenuInterface.newGame()} 
                    title="Novo jogo" 
                    buttonStyle={styles.button}
                    textStyle={styles.buttonText}></AppButton>
        
    </View>
    );
}


export default MainMenu;