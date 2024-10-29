import React from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingPage from './Home';
import SignUpPage from './SignUpPage';

const LoginPage = ({ onClose, navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login to Food Groceries</Text>

      <TouchableOpacity style={styles.socialButton}>
        <Image source={require('./assets/google.png')} style={styles.googleIcon} />
        <Text style={styles.socialButtonText}>Continue with Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.socialButton}>
        <Image source={require('./assets/apple-logo.png')} style={styles.googleIcon} />
        <Text style={styles.socialButtonText}>Continue with Apple</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>Or</Text>

      <TextInput
        style={styles.input}
        placeholder="Username or Email"
        placeholderTextColor="gray"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="gray"
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={onClose}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={onClose} style={styles.closeButton}>
        <Text style={styles.closeButtonText}>Forgot Password?</Text>
      </TouchableOpacity>

      <Text style={styles.footerText}>Don't have a Food Groceries account?</Text>

    <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.footerLink}>Don't have an account SignIn</Text>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom:0,
    marginBottom: 27,
     backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#333',
  },
  socialButton: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginVertical: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  socialButtonText: {
    marginLeft: 20,
    color: '#333',
    fontWeight: 'bold',
  },
  orText: {
    marginVertical: 10,
    color: 'gray',
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 20,
    backgroundColor: '#F0F0F0',
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  closeButton: {
    marginTop: 10,
  },
  closeButtonText: {
    color: '#4CAF50',
    textDecorationLine: 'underline',
  },
  footerText: {
    marginTop: 20,
    color: 'gray',
  },
  footerLink: {
    color: '#4CAF50',
    textDecorationLine: 'underline',
  },
  googleIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
    marginLeft: 60,
  },
});
1
export default LoginPage;
