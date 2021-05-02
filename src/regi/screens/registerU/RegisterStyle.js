import { StyleSheet, Dimensions } from 'react-native'

const StyleR = StyleSheet.create({
    container: {
        flex: 1,
    },
    logoContainer: {
        height: Dimensions.get("screen").height * 0.2,
        borderBottomLeftRadius: 100,
        justifyContent: "center",
        alignItems: "center"
    },
    logo: {
        width: 100,
        height: 100
    },
    title: {
        position: "absolute",
        right: 30,
        bottom: 10,
        fontSize: 22,
        color: "#fff"
    },
    inputDataContainer: {
        height: Dimensions.get("screen").height * 1,
        alignItems: "center",
        paddingTop: 30,
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
        elevation: 6
    },
    saveButton: {
        width: Dimensions.get("screen").width * 0.85,
        padding: 15,
        borderRadius: 50,
        marginTop:40,
        alignItems: "center",
        marginBottom: 10
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
    },
    scrollView:{
        marginHorizontal:5
    }
});

export default StyleR;