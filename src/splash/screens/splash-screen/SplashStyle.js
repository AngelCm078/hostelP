import {StyleSheet} from 'react-native';

const SplashStyle = StyleSheet.create({
    container: {
        flex: 1,       
    },
    containerGradient: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    logo: {
        width: 120,
        height: 120,        
    }
});

export default SplashStyle;