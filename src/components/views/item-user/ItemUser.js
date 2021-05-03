import React from 'react'
import { Text, Image, View } from 'react-native'
import StyleItemUser from './ItemUserStyles'

const ItemUser = (props) => {
    user = props.user;
    return (
        <View style={StyleItemUser.container}>
            <View style={StyleItemUser.containerUser}>
                <Image style={StyleItemUser.avatar} source={{ uri: user.avatar }} ></Image>
                <Text style={StyleItemUser.textDataName}>{user.first_name} {user.last_name}</Text>
                <Text style={StyleItemUser.textDataEmail}>{user.email}</Text>
            </View>
        </View>
    )
}

export default ItemUser