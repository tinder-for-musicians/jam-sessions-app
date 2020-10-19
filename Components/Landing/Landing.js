import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import {Actions} from 'react-native-router-flux';

const Landing = () => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.welcome}
        onPress={() => Actions.test1()}>
        Landing Page
      </Text> */}
      <form className='landing-view'>
        <section className='auth-container'>
            <h1 className='logo'>
                Jam Sessions
            </h1>
        </section>
      </form>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#bb0000',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
  },
});

export default Landing;