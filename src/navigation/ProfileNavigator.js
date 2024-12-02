import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProfilePage from '../screens/ProfilePage';
import LoginPage from '../screens/LoginPage';
import RegisterPage from '../screens/RegisterPage';

const ProfileStack = createStackNavigator();

const ProfileNavigator = () => {
    return (
        <ProfileStack.Navigator>
            <ProfileStack.Screen 
                name='ProfileMain' 
                component={ProfilePage}
                options= {{title: '我的頁面'}}
            ></ProfileStack.Screen>
            <ProfileStack.Screen 
                name='Login' 
                component={LoginPage}
                options= {{title: '登入'}}
            ></ProfileStack.Screen>
            <ProfileStack.Screen 
                name='Register' 
                component={RegisterPage}
                options= {{title: '註冊'}}
            ></ProfileStack.Screen>
        </ProfileStack.Navigator>
    )
}

export default ProfileNavigator