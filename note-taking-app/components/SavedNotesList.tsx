import { useFocusEffect } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Note, getAllNotes } from "../services/noteStoreService";

export const SavedNotesList: React.FC = () => {
    const [notes, setNotes] = useState<Note[] | undefined>([]);
    useFocusEffect(() => {
        getAllNotes().then((result) => setNotes(result.notes))
    });
    return (
    <View>
        {notes.map((note) => (
        <View style={styles.row}>
        <Text style={styles.note}key={note.id}>{note.text}
        </Text>
        </View>        
        ))}
    </View>
      
    )
}

const styles = StyleSheet.create({
    row: {},
    note: {
        paddingVertical: 20,
        width: "100%",
        fontSize: 16,
    },
})
