import { TouchableOpacity, Text} from 'react-native'
import React from 'react';
const AppButton = ({onPress, title, textStyle, buttonStyle}) =>(

    <TouchableOpacity onPress={onPress} style={buttonStyle}>
        <Text style={textStyle}>{title}</Text>
    </TouchableOpacity>
);
export default AppButton