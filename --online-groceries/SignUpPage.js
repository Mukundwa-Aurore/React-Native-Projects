import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const SignUpPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up to Groceries Food</Text>
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        placeholderTextColor="gray"
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="gray"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="gray"
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={() => alert('Signed Up!')}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.footerLink}>Already have an account? Login</Text>
      </TouchableOpacity>
    </View>
  );
};

// Login Page
const LoginPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login to Groceries Food</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="gray"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="gray"
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={() => alert('Logged In!')}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.footerLink}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

// Navigation Stack
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignUp">
        <Stack.Screen name="SignUp" component={SignUpPage} />
        <Stack.Screen name="Login" component={LoginPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#333',
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 15,
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
  footerLink: {
    color: '#4CAF50',
    textDecorationLine: 'underline',
    marginTop: 20,
  },
});

export default SignUpPage;
