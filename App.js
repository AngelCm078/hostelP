import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/auth/screens/login/LoginScreen';
import ListApartmentsScreen from './src/apartmens/screens/list_apartments/ListApartmentsScreen';
import RegisterScreen from './src/regi/screens/registerU/RegisterScreen';
import SplashScreen from './src/splash/screens/splash-screen/SplashScreen';
import ListUserScreen from './src/users/screens/list-users/ListUserScreen';


const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
                <Stack.Screen name="ListApartments" component={ListApartmentsScreen} options={{ headerShown: false }} />                
                <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
                <Stack.Screen name="ListUser" component={ListUserScreen} options={{ headerShown: false }} />


            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;