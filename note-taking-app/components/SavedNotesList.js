import { useFocusEffect, useNavigation } from "@react-navigation/native"
import React, { useState } from "react"
import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native"
import { getAllNotes } from "../services/noteStoreService"

// Home screen component displays the existing notes saved

export const SavedNotesList = () => {
  const navigation = useNavigation()
  const [notes, setNotes] = useState()

  useFocusEffect(() => {
    getAllNotes().then(result => setNotes(result.notes))
  })

  return (
    <ScrollView>
      {notes?.map(({ id, text }) => {
        return (
          <Pressable
            key={id}
            onPress={() => navigation.navigate("EditNote", { noteId: id })}
            style={({ pressed }) => [
              styles.noteContainer,
              {
                backgroundColor: pressed ? "#ffb70342" : "#fff"
              }
            ]}
          >
            <View key={id} style={styles.row}>
              <Text key={id} style={styles.note}>
                {text.length === 0 ? "(Blank note)" : text}
              </Text>
            </View>
          </Pressable>
        )
      })}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  note: {
    paddingVertical: 20,
    width: "100%",
    fontSize: 16
  },
  row: {
    borderBottomColor: "#e6e6e6",
    borderBottomWidth: 1,
    width: "90%",
    alignSelf: "center",
    flex: 1,
    justifyContent: "center"
  },
  noteContainer: {
    width: "100%",
    flex: 1,
    height: 80
  }
})
