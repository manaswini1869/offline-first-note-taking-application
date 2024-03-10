import { RouteProp } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

// Types of props declared

export type RootStackParamList = {
    Home: undefined;
    EditNote: { noteId: string | undefined };
};

export type ScreenNavigation = NativeStackNavigationProp<
    RootStackParamList
>;

//export type EditNoteRouteProp = RouteProp<RootStackParamList, 'EditNote'>
