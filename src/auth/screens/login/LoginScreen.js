import React, { useState } from 'react';
import { View, Text, StatusBar, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Styles from './LoginStyle';
import Colors from '../../../../shared/colors/Colors';

const LoginScreen = ({navigation}) => {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const validateLogin = () => {
        if (email == "" || password == "") {
            Alert.alert("Debe llenar todos los campos");
            
        }
        else {
            setEmail("");
            setPassword("");
            navigation.navigate('ListApartments');
        }
    }

    const registerUser = () => {
        navigation.navigate('Register');
    };

    const listUsers = () => {
        navigation.navigate('ListUser')
    };

    return <View style={Styles.container}>
        <StatusBar backgroundColor={Colors.primaryColor}></StatusBar>
        <LinearGradient colors={[Colors.primaryColor, Colors.secondaryColor]} style={Styles.logoContainer}>
            <Text style={Styles.titleApp}>HOSTAl Premium</Text>
            <Image source={require('./img/icon_hp.png')} style={Styles.logo}></Image>
            <Text style={Styles.title}>Login</Text>
        </LinearGradient>
        <View style={Styles.inputDataContainer}>
            <TextInput defaultValue={email} placeholder="E-mail" inlineImageLeft="outline_mail_black_18" inlineImagePadding={15} keyboardType="email-address" style={Styles.inputData} onChangeText={(text) => { setEmail(text) }}></TextInput>
            <TextInput defaultValue={password} placeholder="Password" inlineImageLeft="outline_password_black_18" inlineImagePadding={15} secureTextEntry={true} style={Styles.inputData} onChangeText={(password) => { setPassword(password) }}></TextInput>
            <TouchableOpacity onPress={() => validateLogin()}>
                <LinearGradient colors={[Colors.primaryColor, Colors.secondaryColor]} style={Styles.loginButton}>
                    <Text style={Styles.textButton}>Login</Text>
                </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => registerUser()}>
                <Text style={Styles.textRedirect}>Deseo crear una cuenta</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => listUsers()}>
                <Text style={Styles.textRedirect}>Olvide mi contraseña</Text>
            </TouchableOpacity>
        </View>
    </View>
}
export default LoginScreen;