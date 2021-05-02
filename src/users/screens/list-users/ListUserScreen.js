import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import ListUserStyles from './ListUserStyle';

const ListUserScreen = () => {
    const [users, setUsers] = useState([]);
    const getUsers = async () => {
        const response = await fetch('https://reqres.in/api/users?page=2');
        const jsonResponse = await response.json();
        setUsers(jsonResponse.data);
        // console.log(jsonResponse.data);
    }
    const Item = (props) =>{
        user = props.user;
        // position = props.position;
        console.log(props)
        return <Text>{user.first_name}</Text>
    }

   
    useEffect(()=>{
        getUsers();
    },[]);
    return <View style={ListUserStyles.container}>
        <FlatList data={users} renderItem={({item, index}) => <Item user={item} position={index}></Item>}>

        </FlatList>
    </View>
}

export default ListUserScreen;

