import React from "react"
import { Pressable } from "react-native"
import { FontAwesome } from "@expo/vector-icons"
import { deleteNote } from "../services/noteStoreService"
import { useNavigation } from "@react-navigation/native"

export const DeleteNote = ({ noteId }) => {
  const navigation = useNavigation()

  const deleteNoteHandler = async () => {
    await deleteNote(noteId)
    navigation.navigate("Home")
  }

  return (
    <Pressable onPress={deleteNoteHandler}>
      <FontAwesome name="trash-o" size={30} color="#ffb703" />
    </Pressable>
  )
}
