import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from 'react-native-vector-icons';

import HomeScreen from './components/HomeScreen';
import Checklist from './components/Checklist';
import LocationTracker from './components/LocationTracker';

const Tab = createBottomTabNavigator();

/*const LOCATION_TASK_NAME = 'background-location-task';
import * as TaskManager from 'expo-task-manager'; */

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            //Set the icon based on which route it is (name of the tab)
            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Checklist') {
              iconName = 'list';
            } else if (route.name === 'LocationTracker') {
              iconName = 'map'
            }

            return <FontAwesome name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Checklist" component={Checklist} />
        {<Tab.Screen name="LocationTracker" component={LocationTracker} />}

      </Tab.Navigator>
    </NavigationContainer>
  );
}

/*TaskManager.defineTask(LOCATION_TASK_NAME, async ({data, error}) => {
  if (error) {
    console.log(error);
    return;
  }
  if (data) {
    const { locations } = data;
    let lat = locations[0].coords.latitude;
    let long = locations[0].coords.longitude;

    // console.log("Received new locations for user = ", userId, locations);
  }
}); */
