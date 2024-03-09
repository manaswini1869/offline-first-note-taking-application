import React, { useState } from "react";
import { TextInput, Button, StyleSheet } from "react-native";

type Props = {
    savingNote: (text: string) => void;
}

export const NoteInput: React.FC<Props> = ({savingNote}) => {
    const [text, setText] = useState<string>("");
    return (
        <>
        <TextInput multiline={true} style={styles.textInput} value={text} onChangeText={setText}/>
      <Button title='Save' onPress={() => savingNote(text)}/>
        </>
    )
}


const styles = StyleSheet.create({
    textInput:{
      backgroundColor: "#fef7de",
      width: '100%',
      height: 200,
      fontSize: 16, 
      paddingHorizontal: 20,
      paddingTop: 30,
      paddingBottom: 20,
    },
  });