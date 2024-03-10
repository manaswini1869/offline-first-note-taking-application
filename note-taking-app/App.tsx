import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import  { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { HomeScreen } from './components/HomeScreen';
import { EditNoteScreen } from './components/EditNoteScreen';
import { NewNoteButton } from './components/NewNoteButton';

// Home page for the applciations along with navigations implemented

export type RootStackParamList = {
  Home: undefined;
  EditNote: { noteId: string | undefined };
};

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
    <Stack.Screen name="EditNote" component={EditNoteScreen}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
}

