import { StyleSheet, Dimensions } from 'react-native'

const Styles = StyleSheet.create({
    
    container: {
        flex: 1,
    },
    logoContainer: {
        backgroundColor: "orange",
        height: Dimensions.get("screen").height * 0.3,
        borderBottomLeftRadius: 100,
        justifyContent: "center",
        alignItems: "center"
    },
    logo: {
        width: 100,
        height: 100,
        
    },
    titleApp:{
        width: Dimensions.get("screen").height * 0.85,
        // position: "absolute",
        fontSize: 30,
        color: "#fff"  ,
        alignItems: "center",
        textAlign: "center"
    },
    title: {
        position: "absolute",
        right: 30,
        bottom: 10,
        fontSize: 22,
        color: "white"
    },
    inputDataContainer: {
        height: Dimensions.get("screen").height * 0.7,
        alignItems: "center",
        paddingTop: 40,
        paddingBottom: 30
    },
    inputData: {
        backgroundColor: "white",
        width: Dimensions.get("screen").width * 0.85,
        borderRadius: 50,
        paddingLeft: 20,
        marginTop: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    },
    loginButton: {
        width: Dimensions.get("screen").width * 0.85,
        padding: 15,
        borderRadius: 50,
        marginTop:60,
        alignItems: "center",
    },
    textButton:{
        alignContent: "center",
        fontSize: 20,
        color: "white"
    },
    textRedirect:{
        width: Dimensions.get("screen").width * 0.85,
        marginTop: 10,
        color:"red",
        textAlign: "right",
    }
});

export default Styles;