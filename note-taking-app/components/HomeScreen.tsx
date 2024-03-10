import React  from "react";
import {StyleSheet, View} from 'react-native';
import { SavedNotesList } from "./SavedNotesList";


// App home screen, plane layout with a list of saved notes 

export const HomeScreen: React.FC = () => {
    return (
    <View style={styles.container}>
    <SavedNotesList />
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
});
