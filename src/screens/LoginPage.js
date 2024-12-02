import React, {useState} from 'react';
import { 
  View,
  Text, 
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

import { layout, typography, formStyles, buttonStyles } from '../styles';
import { authStorage } from '../utils/auth';

const LoginPage = ({navigation}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [focusedInput, setFocusedInput] = useState(null);

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (data.success) {
        await authStorage.storeAuth(data.data.token, data.data.user);
        
        navigation.navigate('ProfileMain');
      } else {
        Alert.alert('錯誤', '登入失敗');
      }
    } catch (error) {
      console.error('Login error:', error);
      Alert.alert('錯誤', '登入失敗');
    }
  }

  const handleRegister = () => {
    console.log('navi to register');
    navigation.navigate('Register');
  }

    return (
      <View style={layout.centeredContainer}>
        <View style={layout.card}>
          <Text style={typography.title}>Login Page</Text>

          <View style={formStyles.formGroup}>
            <Text style={formStyles.label}>Email</Text>
              <TextInput
                //style可以傳入陣列，設定會被合併
                style={[
                  //永遠會套用
                  formStyles.input,
                  //邏輯運算式，在==='email'時會套用authStyles.inputFocused
                  focusedInput === 'email' && formStyles.inputFocused
                ]}
                placeholder='Email'
                value={email}
                onChangeText={setEmail}
                keyboardType='email-address'
                autoCapitalize='none'
                onFocus={() => setFocusedInput('email')}
                onBlur={() => setFocusedInput(null)}
              ></TextInput>
          </View>

          <View style={formStyles.formGroup}>
            <Text style={formStyles.label}>Password</Text>
              <TextInput
                style={[
                  formStyles.input,
                  focusedInput === 'password' && formStyles.inputFocused
                ]}
                placeholder='Email'
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                autoCapitalize='none'
                onFocus={() => setFocusedInput('password')}
                onBlur={() => setFocusedInput(null)}
              ></TextInput>
          </View>

          <TouchableOpacity
            style={buttonStyles.button}
            onPress={() => handleLogin()}
            activeOpacity={0.7}
          >
            <Text style={buttonStyles.buttonText}>Log In</Text>
          </TouchableOpacity>

          {/* 導航到register page 按鈕*/}
          <View style={layout.rowCenter}>
          <Text style={buttonStyles.textSecondary}>Don't have an account? </Text>
          <TouchableOpacity onPress={handleRegister}>
            <Text style={typography.textLink}>Sign Up</Text>
          </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

export default LoginPage;