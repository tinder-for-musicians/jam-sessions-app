import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import {Actions} from 'react-native-router-flux';


const TestRouting2 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}
      onPress={() => Actions.test1()}>
        Gray Screen
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#a3a3a3',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
  },
});

export default TestRouting2;