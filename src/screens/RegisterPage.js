import React, {useState} from 'react';
import { 
  View,
  Text, 
  TextInput,
  TouchableOpacity ,
  Alert, 
} from 'react-native';

import { layout, typography, formStyles } from '../styles';
import { buttonStyles } from '../styles/components/button';

const RegisterPage = ({navigation}) => {

  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [focusedInput, setFocusedInput] = useState(null);

  const handleRegister = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
          'name': userName,
        }),
      });

      const data = await response.json();

      if(data.success){
        Alert.alert('註冊成功', '請重新登入');
        navigation.navigate('Login');
      } else {
        Alert.alert('錯誤', '註冊失敗');
      }
    } catch (error) {
      console.error('註冊失敗：', error);
      Alert.alert('錯誤', '註冊失敗');
    }
  }

    return (
      <View style={layout.centeredContainer}>
        <View style={layout.card}>
          <Text style={typography.title}>Join Us Now</Text>
          {/* userName */}
          <View style={formStyles.formGroup}>
            <Text style={formStyles.label}>Name</Text>
              <TextInput
                //style可以傳入陣列，設定會被合併
                style={[
                  //永遠會套用
                  formStyles.input,
                  //邏輯運算式，在==='email'時會套用authStyles.inputFocused
                  focusedInput === 'userName' && formStyles.inputFocused
                ]}
                placeholder='Name'
                value={userName}
                onChangeText={setUserName}
                keyboardType='default'
                autoCapitalize='words'
                onFocus={() => setFocusedInput('userName')}
                onBlur={() => setFocusedInput(null)}
              ></TextInput>
          </View>

          {/* email */}
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

          {/* password */}
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
            onPress={() => handleRegister()}
            activeOpacity={0.7}
          >
            <Text style={buttonStyles.buttonText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

export default RegisterPage;