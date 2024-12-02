import React, { useState, useEffect } from 'react';
import {
    View,
    Button,
    Text,
    TextInput,
    TouchableOpacity,
    SafeAreaView,
    StyleSheet,
    ScrollView,
    Image,
    Alert
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { authStorage } from '../utils/auth';
import { layout, typography, buttonStyles } from '../styles';

const ProfilePage = ({navigation}) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        checkLoginStatus();
    }, [])

    const checkLoginStatus = async () => {
        try {
            const token = await authStorage.getToken();
            const userDataString = await authStorage.getUser();

            if(token && userDataString) {
                setIsLoggedIn(true);
                console.log(userDataString);
                setUserData(userDataString);
            } else {
                setIsLoggedIn(false);
                setUserData(null);
            }
        } catch (error) {
            console.error('Error checking login status:', error);
        }
    }

    const handleLogout = async () => {
        try {
            await AsyncStorage.removeItem('@auth_token');
            await AsyncStorage.removeItem('@user_data');
            setIsLoggedIn(false);
            setUserData(null);
        } catch (error) {
            console.error('Error logging out:', error);
        }
    };

    const renderLoginContent = () => {
        return (
            <View style={layout.capsule}>
                <Image
                    source={require('../assets/default-avatar.jpg')}
                    style={layout.avatar}
                ></Image>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Login')}
                >
                    <Text style={typography.textLink}>Log In</Text>
                </TouchableOpacity>
            </View>
        )
    }


    const renderProfileContent = () => {
        return(
            <View style={layout.capsule}>
                <View style={layout.capsuleContentLeft}>
                    <Image
                        source={require('../assets/default-avatar.jpg')}
                        style={layout.avatar}
                    />
                    <Text style={typography.text}>
                        Welcome, {userData?.name}
                    </Text>
                </View>
                <TouchableOpacity onPress={handleLogout}>
                    <Text style={typography.textLink}>登出</Text>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        // <Text>This is profile page</Text>
        <SafeAreaView style={layout.pageContainer}>
            <View style={layout.headerContainer}>
                {isLoggedIn ? renderProfileContent(): renderLoginContent()}
            </View>
        </SafeAreaView>
    )
}

export default ProfilePage;