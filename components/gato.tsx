import React, { useState } from 'react'
import {Button, Text, TextInput} from 'react-native'


const Cat = (props:any) =>{
    const [contador,setaContador] = useState(0);
    const [text,setText] = useState('gato');
    return(
    <>
        <TextInput
            style={{margin:10, borderColor:'blue', borderWidth: 1}}
            onChangeText={text=>setText(text)}
            placeholder='Nome'
        
        />
        <Text>
            Falae sou o {text} amigo do {props.name} aqui e to {contador} vezes bolado
        </Text>

        <Button
            onPress={()=>{
                setaContador(contador+1);
            }}
            title={'falae'}
        />
    </>
    );
}
export default Cat;