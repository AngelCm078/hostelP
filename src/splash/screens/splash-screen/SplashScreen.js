import React, { useEffect } from 'react';
import { View, Image, StatusBar, Alert , ActivityIndicator} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../../../shared/colors/Colors';
import SplashStyle from './SplashStyle';

const SplashScreen = ({navigation}) => {

    const waitingtimesplash = () =>{
        setTimeout(() =>{
            //Alert.alert("Pasaron 3 Segundos");
            navigation.navigate('Login');
        }, 3000)
    }
    useEffect(() =>{
        waitingtimesplash();
    }, [])
    return (
        <View style={SplashStyle.container}>
            <StatusBar backgroundColor={Colors.primaryColor}></StatusBar>
            <LinearGradient colors={[Colors.primaryColor, Colors.secondaryColor]} style={SplashStyle.containerGradient}>

                <Image source={require('./img/icon_hp.png')} style={SplashStyle.logo} />
                <ActivityIndicator size="small" color="#fff" ></ActivityIndicator>

            </LinearGradient>
        </View>
    )
}

export default SplashScreen;