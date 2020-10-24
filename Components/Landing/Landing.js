import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

const Landing = () => {
  const backgroundImage = { uri: 'https://smartguy.com/webservice/storage/category/musical-instruments-rental.jpg' }

  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.background}>
        <View style={styles.loginContainer}>
          <Text style={styles.title}>
            Jam Sessions
            </Text>
          <TextInput style={styles.authInput} placeholder='Email' />
          <TextInput style={styles.authInput} placeholder='Password' />
          <TouchableOpacity style={styles.loginButton}
            activeOpacity={0.8}
            onPress={() => Actions.homePage()}>
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
          <Text style={styles.registerText} onPress={() => Actions.registerPage()}>Don't have an account? Register Here</Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: "center",
    alignItems: 'center'
  },
  loginContainer: {
    height: '50%',
    width: '90%',
    backgroundColor: '#9abcbabd',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 10,
    shadowColor: '#2B7A78',
    shadowOffset: { width: -4, height: 4 },
    shadowRadius: 12
  },
  title: {
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    textShadowColor: '#2B7A78',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 12,
  },
  authInput: {
    height: 40,
    width: '90%',
    backgroundColor: '#ffffff',
    fontFamily: 'sans-serif',
    paddingHorizontal: 5
  },
  loginButton: {
    elevation: 8,
    height: '12%',
    width: '35%',
    backgroundColor: "#17252A",
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loginText: {
    fontSize: 20,
    fontFamily: 'sans-serif',
    fontWeight: '600',
    color: "#fff",
    alignSelf: "center",
  },
  registerText: {
    textDecorationLine: 'underline',
  }
});

export default Landing;