import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

const Nav = () => {

  return (
    <View style={styles.container}>
      <View style={styles.navIcons}>
        <TouchableOpacity onPress={() => Actions.profilePage()}>
          <Image source={require('./person-circle-white.png')} style={styles.logo}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Actions.homePage()}>
        <Image source={require('./home-white.png')} style={styles.logo}/>
          </TouchableOpacity>
        <TouchableOpacity onPress={() => Actions.matchesPage()}>
          <Image source={require('./people-white.png')} style={styles.logo}/>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 60,
    backgroundColor: '#1F2833',
    alignItems: 'center'
  },
  navIcons: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },  
  logo: {
    resizeMode: 'contain',
    height: '90%',
    width: 100
  },
});

export default Nav;