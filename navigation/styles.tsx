import {StyleSheet} from 'react-native'
const styles =StyleSheet.create({
    button:{
        elevation: 8,
        backgroundColor: "green",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        margin: 10,
        width:'55%'
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
        fontFamily: 'normal',
        margin: 30
    }
    
});
export default styles