import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Router, Scene} from 'react-native-router-flux';
import Landing from './Components/Landing/Landing';
import Register from './Components/Register/Register';
import Home from './Components/Home/Home';
import Nav from './Components/Nav/Nav';
import Matches from './Components/Matches/Matches';
import Profile from './Components/Profile/Profile';

export default function App() {
  return (
    <Router>
      <Scene key='root' hideNavBar={true}>
        <Scene key='loginPage'
          component={Landing}
          title='loginPage'
          initial
        />
        <Scene key='registerPage'
          component={Register}
          title='registerPage'
        />
        <Scene key='homePage'
          component={Home}
          title='homePage'
        />
        <Scene key='matchesPage'
          component={Matches}
          title='matchesPage'
        />
        <Scene key='profilePage'
          component={Profile}
          title='profilePage'
        />
      </Scene>
    </Router>
  );
}