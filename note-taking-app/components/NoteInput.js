import React from "react"
import { TextInput, StyleSheet } from "react-native"
import { getNote } from "../services/noteStoreService"
import { useFocusEffect, useNavigation } from "@react-navigation/native"
import { SaveNote } from "./SaveNote"

export const NoteInput = ({ noteId }) => {
  const [text, onChangeText] = React.useState("")
  const navigation = useNavigation()

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => <SaveNote text={text} id={noteId ?? ""} />
    })
  }, [navigation, text, noteId])
  useFocusEffect(
    React.useCallback(() => {
      if (noteId) {
        getNote(noteId).then(result => onChangeText(result?.text ?? ""))
      }
    }, [noteId])
  )
  return (
    <>
      <TextInput
        autoFocus={true}
        onChangeText={onChangeText}
        value={text}
        multiline={true}
        style={styles.noteInput}
        textAlignVertical="top"
      />
    </>
  )
}

const styles = StyleSheet.create({
  noteInput: {
    fontSize: 16,
    flex: 1,
    paddingTop: 30,
    paddingBottom: 20,
    paddingHorizontal: 20,
    backgroundColor: "#ffb70342"
  }
})
