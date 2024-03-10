import { useNavigation } from "@react-navigation/native";
import React  from "react";
import {Button} from 'react-native';
import { ScreenNavigation } from "../types";
import { SavedNotesList } from "./SavedNotesList";

export const HomeScreen: React.FC = () => {
    const navigation = useNavigation<ScreenNavigation>();
    
    return (
    <>
    <SavedNotesList />
      </>
    );
};
