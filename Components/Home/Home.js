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
import Nav from '../Nav/Nav';

const Home = () => {

  return (
    <View style={styles.container}>
      <Text>
        Home
      </Text>
      <View style={styles.navBar}>
        <Nav/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between'
  }
});

export default Home;