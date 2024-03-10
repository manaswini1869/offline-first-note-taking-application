import React, { useEffect, useLayoutEffect, useState } from "react";
import { TextInput, Button, StyleSheet } from "react-native";
import { getNote, savingNote } from "../services/noteStoreService";
import { useNavigation } from "@react-navigation/native";
import { ScreenNavigation } from "../types";
import { SaveNote } from "./SaveNote";

type Props = {
    savingNote: (text: string) => void;
    noteId: string | undefined;
}

export const NoteInput: React.FC<Props> = ({noteId}) => {
    const [text, setText] = useState<string>("");
    const navigation = useNavigation<ScreenNavigation>();
    
    useLayoutEffect(() => {
        navigation.setOptions({
          headerLeft: () => noteId ?  (<SaveNote id={noteId ?? ""} text={text} />) : (<></>),
            });
    }, [navigation, text, noteId])
    useEffect(() => {
      if(noteId) {
        getNote(noteId).then(result => setText(result.text ?? ''));
      }
    }, []);
    return (
        <>
        <TextInput multiline={true} style={styles.textInput} value={text} onChangeText={setText} autoFocus={true}/>
        </>
    )
}


const styles = StyleSheet.create({
    textInput:{
      backgroundColor: "#fef7de",
      width: '100%',
      flex: 1,
      fontSize: 16, 
      paddingHorizontal: 20,
      paddingTop: 30,
      paddingBottom: 20,
    },
  });