import React from "react"
import { FontAwesome } from "@expo/vector-icons"
import { Pressable } from "react-native"
import { useNavigation } from "@react-navigation/native"

// New note addition icon component

export const NewNoteButton = () => {
  const navigation = useNavigation()
  return (
    <Pressable
      onPress={() => navigation.navigate("EditNote", { noteId: undefined })}
    >
      <FontAwesome name="pencil-square-o" size={30} color="#ffb703" />
    </Pressable>
  )
}
