import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { FontAwesome } from 'react-native-vector-icons';

export default function HomeScreen() {
  return (
    <View style={styles.container1}>
      <Text style={styles.text1}>Covidcator​</Text>
      <Text style={styles.text2}>Our application is used to track the Covid-19 hotspots so that the elderly can avoid these places. This will reduce the chances of them being infected with Covid-19 and falling ill.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: 'orange',
    padding: 30,
    alignItems: 'center',
  },

  text1: {
    fontSize: 30,
    fontWeight: 'bold',
    padding: 10,
  },
  
  text2: {
    fontSize: 20,
    
  }
});
