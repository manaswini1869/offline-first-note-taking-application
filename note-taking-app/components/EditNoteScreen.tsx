import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { RootStackParamList, ScreenNavigation } from "../types";
import { DeleteNote } from "./DeleteNote";
import { NoteInput } from "./NoteInput";

// Edit screen for adding new notes as well as editing existing notes

type EditScreenRouteProp = RouteProp<RootStackParamList, "EditNote">;

export const EditNoteScreen: React.FC = () => {
  const route = useRoute<EditScreenRouteProp>();
  const navigation = useNavigation<ScreenNavigation>();
  const noteId = route.params.noteId;

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: noteId ? "Edit note" : "New note",
      headerRight: () => (noteId ? <DeleteNote noteId={noteId} /> : <></>),
    });
  }, [navigation]);

  return <NoteInput noteId={noteId} />;
};