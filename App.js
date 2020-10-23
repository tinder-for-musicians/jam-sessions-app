import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Router, Scene} from 'react-native-router-flux';
import TestRouting from './Components/TestRouting';
import TestRouting2 from './Components/TestRouting2';
import Landing from './Components/Landing/Landing';
import Register from './Components/Register/Register';

export default function App() {
  return (
    <Router>
      <Scene key='root'>
        <Scene key='loginPage'
          component={Landing}
          hideNavBar={true}
          title='loginPage'
          initial
        />
        <Scene key='registerPage'
          component={Register}
          hideNavBar={true}
          title='registerPage'
        />
        <Scene key='test1'
          component={TestRouting}
          title='test1'  
          
        />
        <Scene key='test2'
          component={TestRouting2}
          title='test2' 
        />
      </Scene>
    </Router>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
