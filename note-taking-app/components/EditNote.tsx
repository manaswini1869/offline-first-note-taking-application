import React, { useLayoutEffect } from 'react';
import { NoteInput } from './NoteInput';
import  { deleteNote, savingNote } from "../services/noteStoreService";
import { useNavigation, useRoute } from '@react-navigation/native';
import { EditNoteRouteProp, ScreenNavigation } from '../types';
import { Button } from 'react-native';
import { DeleteNote } from './DeleteNote';


export const EditNote: React.FC = () => {
    const route = useRoute<EditNoteRouteProp>();
    const noteId = route.params.noteId;

    const navigation = useNavigation<ScreenNavigation>();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: noteId ? 'Edit note' : 'New Note',
            headerRight: () => (noteId ? <DeleteNote noteId={noteId} /> : <></>),
        });
    }, [navigation])

    return <NoteInput noteId={noteId} />;
};