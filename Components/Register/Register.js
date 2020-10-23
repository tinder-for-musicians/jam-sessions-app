import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    TextInput,
    TouchableOpacity
} from 'react-native';
import { Actions } from 'react-native-router-flux';

const Register = () => {
    const backgroundImage = { uri: 'https://smartguy.com/webservice/storage/category/musical-instruments-rental.jpg' }

    return (
        <View style={styles.container}>
            <ImageBackground source={backgroundImage} style={styles.background}>
                <View style={styles.registerContainer}>
                    <View style={styles.registerHeader}>
                        <Text style={styles.title}>
                            Jam Sessions
                        </Text>
                        <Text style={styles.header}>
                            Register Below
                        </Text>
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput style={styles.registerInput} placeholder='First Name' />
                        <TextInput style={styles.registerInput} placeholder='Last Name' />
                        <TextInput style={styles.registerInput} placeholder='Username' />
                        <TextInput style={styles.registerInput} placeholder='Email' />
                        <TextInput style={styles.registerInput} placeholder='Password' />
                        <TextInput style={styles.registerInput} placeholder='Verify Password' />
                        <TouchableOpacity style={styles.registerButton} 
                            activeOpacity={0.8}>
                            <Text style={styles.registerText}>Register</Text>
                        </TouchableOpacity>
                        <Text style={styles.loginText} onPress={() => Actions.loginPage()}>Have an account? Login Here</Text>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
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
    registerContainer: {
        // flex: 1,
        marginTop: 45,
        height: 450,
        width: '90%',
        backgroundColor: '#9abcbabd',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderRadius: 10,
        shadowColor: '#2B7A78',
        shadowOffset: { width: -4, height: 4 },
        shadowRadius: 12
    },
    registerHeader: {
        // flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start'
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
    header: {
        fontSize: 18,
        fontWeight: '700',
        // marginBottom: 10
    },  
    inputContainer: {
        flex: 2,
        height: '70%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    registerInput: {
        height: '10%',
        width: '90%',
        marginVertical: 1,
        backgroundColor: '#ffffff',
        fontFamily: 'sans-serif',
        paddingHorizontal: 5
    },
    registerButton: {
        elevation: 8,
        height: '10%',
        width: '50%',
        backgroundColor: "#17252A",
        borderRadius: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    registerText: {
        fontSize: 18,
        fontFamily: 'sans-serif',
        color: "#fff",
        alignSelf: "center",
    },
    loginText: {
        textDecorationLine: 'underline',
    }
});

export default Register;