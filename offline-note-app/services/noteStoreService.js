import { DataStore } from '@aws-amplify/datastore';
import { Notes } from '../src/models'; 

// All the business logic functions for CRUD operations on the Note model should go here.

export const getAllNotes = async () => {
  try {
    const notes = await DataStore.query(Notes);
    //console.log(notes);
    return { notes };
  } catch (error) {
    console.error('Error fetching notes:', error);
    return { notes: [] };
  }
}

export const getNote = async (id) => {
  try {
    const note = await DataStore.query(Notes, id);
    return note;
  } catch (error) {
    console.error('Error fetching note:', error);
    return null;
  }
}

export const saveNote = async (text, noteId) => {
  try {
    if (noteId) {
      // Editing an existing note
      const existingNote = await DataStore.query(Notes, noteId);
      if (existingNote) {
        existingNote.text = text;
        await DataStore.save(existingNote);
      }
    } else {
      // Creating a new note
      const newNote = new Notes({
        text: text
      });
      await DataStore.save(newNote);
    }
  } catch (error) {
    console.error('Error saving note:', error);
  }
}

export const deleteNote = async (noteId) => {
  try {
    const noteToDelete = await DataStore.query(Notes, noteId);
    if (noteToDelete) {
      await DataStore.delete(noteToDelete);
    }
  } catch (error) {
    console.error('Error deleting note:', error);
  }
}
