import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import  { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet } from 'react-native';
import { HomeScreen } from './components/HomeScreen';
import { EditNote } from './components/EditNote';
import { RootStackParamList } from './types';
import { NewNoteButton } from './components/NewNoteButton';

const Stack = createNativeStackNavigator<RootStackParamList>();
export default function App() { 
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
    <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} 
    options={{
        headerTitle: "My Notes",
        headerRight: () => <NewNoteButton/>,
      }}
      />
    <Stack.Screen name="EditNote" component={EditNote}/>
    </Stack.Navigator>
    </NavigationContainer>
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
