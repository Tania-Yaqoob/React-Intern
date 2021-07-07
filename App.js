import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Add from './src/components/add';
import { GlobalProvider } from "./src/context/GlobalState";
import Favouritelist from './src/components/Favouritelist'
function HomeScreen({navigation}){
  return(
    <View>
      <Button title="Go to Favourites"
      onPress={()=>navigation.navigate("Favourites")}></Button>
       <Add/>      
    </View>
  )
}

const Stack=createStackNavigator()
export default function App() {
  return (
    <GlobalProvider>
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Favourites" component={Favouritelist}/>
      </Stack.Navigator>
    </NavigationContainer>
    </GlobalProvider>
    
   
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
