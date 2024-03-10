import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ScreenNavigation } from "../types";
export const NewNoteButton: React.FC = () => {
    const navigation = useNavigation<ScreenNavigation>();
    return (
        <Pressable onPress={()=> navigation.navigate("EditNote", {noteId: undefined})}>
            <FontAwesome name="pencil-square-o" size={30} color="#ffb703" />
        </Pressable>
    )
}