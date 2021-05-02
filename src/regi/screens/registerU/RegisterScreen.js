import React from 'react';
import { View, Text, StatusBar, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import StyleR from './RegisterStyle';
import Colors from '../../../../shared/colors/Colors';
import { NavigationHelpersContext } from '@react-navigation/core';

const RegisterScreen = ({navigation}) => {

    const goToLogin = () => {
        navigation.navigate('Login');
    }

    return (

        <View style={StyleR.container}>
            <StatusBar backgroundColor={Colors.primaryColor}></StatusBar>
            <LinearGradient colors={[Colors.primaryColor, Colors.secondaryColor]} style={StyleR.logoContainer}>
                <Image source={require('./img/icon_hp.png')} style={StyleR.logo}></Image>
                <Text style={StyleR.title}>Register</Text>
            </LinearGradient>
            <ScrollView style={StyleR.scrollView}>
                <View style={StyleR.inputDataContainer}>
                    <TextInput placeholder="nombre Completo" style={StyleR.inputData} inlineImageLeft="outline_person_add_black_18" inlineImagePadding={15}></TextInput>
                    <TextInput placeholder="Ciudad" style={StyleR.inputData} inlineImageLeft="outline_location_city_black_18" inlineImagePadding={15}></TextInput>
                    <TextInput placeholder="Pais" style={StyleR.inputData} inlineImageLeft="outline_flag_black_18" inlineImagePadding={15}></TextInput>
                    <TextInput placeholder="E-mail" style={StyleR.inputData} inlineImageLeft="outline_mail_black_18" inlineImagePadding={15}></TextInput>
                    <TextInput placeholder="Password" style={StyleR.inputData}inlineImageLeft="outline_password_black_18" inlineImagePadding={15} secureTextEntry={true} ></TextInput>
                    <TextInput placeholder="Repit Password" style={StyleR.inputData} inlineImageLeft="outline_password_black_18" inlineImagePadding={15} secureTextEntry={true} ></TextInput>
                    <TouchableOpacity >
                        <LinearGradient colors={[Colors.primaryColor, Colors.secondaryColor]} style={StyleR.saveButton}>
                            <Text style={StyleR.textButton}>SAVE</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => goToLogin()}>
                        <Text style={StyleR.textRedirect}>Tengo una cuenta, Iniciar sesión.</Text>
                    </TouchableOpacity>

                </View>
            </ScrollView>
        </View>
    )
}

export default RegisterScreen;