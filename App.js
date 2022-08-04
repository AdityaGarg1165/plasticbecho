import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screen/Home';
import About from './screen/About';
const Navigator = createNativeStackNavigator()
export default function App() {
  return (
    <NavigationContainer initialRouteName="home" sh>
      <Navigator.Navigator>
      <Navigator.Screen name="home" component={Home} options={{headerShown:false}}/>
      <Navigator.Screen name="about" component={About}/>
        </Navigator.Navigator>
    </NavigationContainer>
    
  );
}
