import React from "react";
import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Note, savingNote } from "../services/noteStoreService";
import { useNavigation } from "@react-navigation/native";
import { ScreenNavigation } from "../types";

// The back arrow icon to save notes automatically, UX feature

export const SaveNote: React.FC<Note> = ({text, id}) => {
    const navigation = useNavigation<ScreenNavigation>();
    const saveNoteHandler = async () => {
        await savingNote(text, id);
        navigation.navigate("Home");
      }
    return (
        <Pressable onPress={saveNoteHandler}>
            <Ionicons name="chevron-back" size={30} color="#ffb703"/>
        </Pressable>
    )
}