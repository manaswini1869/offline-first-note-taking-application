import { Amplify } from 'aws-amplify';
import amplifyconfig from './src/aws-exports';
Amplify.configure(amplifyconfig);

// Main function to call when the page loads, navigations pages

import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { StatusBar } from "expo-status-bar"
import { HomeScreen } from "./components/HomeScreen"
import { EditNoteScreen } from "./components/EditNoteScreen"
import { NewNoteButton } from "./components/NewNoteButton"

// Main inlet to the application, home and edit screen navigator

const Stack = createNativeStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitle: "My Notes",
            headerRight: () => <NewNoteButton />
          }}
        />
        <Stack.Screen name="EditNote" component={EditNoteScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
