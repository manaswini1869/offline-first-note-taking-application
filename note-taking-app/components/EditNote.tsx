import React from 'react';
import { NoteInput } from './NoteInput';
import  { savingNote } from "../services/noteStoreService";


export const EditNote: React.FC = () => {
    return (
        <NoteInput savingNote={savingNote} />
    )
}