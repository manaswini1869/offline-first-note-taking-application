import AsyncStorage from "@react-native-async-storage/async-storage"

const STORE_KEY = "TAKE_NOTES_STORE"

export const getAllNotes = async () => {
  const storeItem = await AsyncStorage.getItem(STORE_KEY)
  if (storeItem) {
    return JSON.parse(storeItem)
  }
  return { notes: [] }
}

export const getNote = async id => {
  try {
    const noteStore = await getAllNotes()
    const note = noteStore.notes.find(note => note.id === id)
    return note
  } catch (e) {
    console.error(e)
  }
}

export const saveNote = async (text, noteId) => {
  try {
    const noteStore = await getAllNotes()

    if (noteId) {
      //Editing an existing note
      const noteIndex = noteStore.notes.findIndex(note => note.id === noteId)
      noteStore.notes.splice(noteIndex, 1, { id: noteId, text: text })
    } else {
      //Creating a new note
      noteStore?.notes.push({ id: Date.now().toString(), text: text })
    }

    const newStore = JSON.stringify(noteStore)
    await AsyncStorage.setItem(STORE_KEY, newStore)
  } catch (e) {
    console.error(e)
  }
}

export const deleteNote = async noteId => {
  const noteStore = await getAllNotes()
  const noteIndex = noteStore.notes.findIndex(note => note.id === noteId)

  noteStore.notes.splice(noteIndex, 1)
  const newStore = JSON.stringify(noteStore)
  await AsyncStorage.setItem(STORE_KEY, newStore)
}
