import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import AsyncStorage  from '@react-native-async-storage/async-storage'
import { NoteInput } from './components/NoteInput';
import { HomeScreen } from './components/HomeScreen';

export default function App() {
  const [ createNewNote, setCreateNewNote ] = useState<boolean>(false);
  const savingNote = async (text: string) => {
    await AsyncStorage.setItem("note", text)
    setCreateNewNote(false);
  }
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {createNewNote ? (<NoteInput savingNote={savingNote} />) : 
      (<HomeScreen toggleNewNote={setCreateNewNote}/>)
  }
      
    </View>
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
