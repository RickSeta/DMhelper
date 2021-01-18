import {StyleSheet} from 'react-native'
const styles =StyleSheet.create({
    button:{
        elevation: 8,
        backgroundColor: "#009688",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        alignSelf: "center",
        width:'20%'
    },
    buttonText:{
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase",
        opacity:0.9
    },
    title:{
        color: 'red',
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        fontFamily: 'ArialMT',
        margin: 30
    }
    
});
export default styles