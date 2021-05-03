import {StyleSheet, Dimensions} from 'react-native'

const StyleItemUser = StyleSheet.create({
    container:{
        flex:1,
        padding: 10,
        // position: "relative"
    },
    containerUser:{
        height: Dimensions.get("screen").height * 0.15,
        backgroundColor: "#EF9A9A",
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center"
    },
    avatar:{
        position: "absolute",
        left: 5, 
        borderRadius: 50,        
        width: 80,
        height: 80       
    },
    textDataName:{
        position: "absolute",
        left: 95,
        bottom: 45,
        fontSize: 22,
        color: "#455A64"
    },
    textDataEmail:{
        position: "absolute",
        left: 95,
        bottom: 25,
        fontSize: 18,
        color: "#455A64"
    },
})

export default StyleItemUser