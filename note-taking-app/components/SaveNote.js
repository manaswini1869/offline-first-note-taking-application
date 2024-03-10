import React from "react"
import { Pressable } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { savingNote } from "../services/noteStoreService"
import { useNavigation } from "@react-navigation/native"

// The back arrow icon to save notes automatically, UX feature

export const SaveNote = ({ text, id }) => {
  const navigation = useNavigation()
  const saveNoteHandler = async () => {
    await savingNote(text, id)
    navigation.navigate("Home")
  }
  return (
    <Pressable onPress={saveNoteHandler}>
      <Ionicons name="chevron-back" size={30} color="#ffb703" />
    </Pressable>
  )
}
