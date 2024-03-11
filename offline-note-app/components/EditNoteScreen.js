import { useNavigation, useRoute } from "@react-navigation/native"
import React from "react"
import { DeleteNote } from "./DeleteNote"
import { NoteInput } from "./NoteInput"

// the second screen in the app, to write notes, save and delete if there are any existing one

export const EditNoteScreen = () => {
  const route = useRoute()
  const navigation = useNavigation()
  const noteId = route.params.noteId

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: noteId ? "Edit note" : "New note",
      headerRight: () => (noteId ? <DeleteNote noteId={noteId} /> : <></>)
    })
  }, [navigation])

  return <NoteInput noteId={noteId} />
}
