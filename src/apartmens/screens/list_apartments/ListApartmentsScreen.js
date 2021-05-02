import React from 'react';
import {View, Text, StatusBar, Button} from 'react-native';
import Colors from '../../../../shared/colors/Colors'

const ListApartmentsScreen = ({navigation}) => {

    const goToLogin = () =>{
        navigation.navigate('Login');
    }
    const goToRegister = () =>{
        navigation.navigate('Register');
    }
    return (        
        <View>
            <StatusBar backgroundColor={Colors.primaryColor}></StatusBar>
            <Text>List Apartments Works</Text>
            <Button title="Go to Login" onPress={() => goToLogin()}></Button>
            <Button title="Go to Register" onPress={() => goToRegister()}></Button>
        </View>
        );
}

export default ListApartmentsScreen;