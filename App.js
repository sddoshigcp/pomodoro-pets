import React, { useState } from "react";
import {
    Text,
    View,
    StyleSheet,
    SafeAreaView,
    Platform,
    StatusBar,
} from "react-native";
import { colors } from "./src/utils/colors";
import { Focus } from "./src/features/Focus";
import { Timer } from "./src/features/Timer";
import { FocusHistory } from "./src/features/FocusHistory";

export default function AppOld() {
    const [currentSubject, setCurrentSubject] = useState("test");
    const [colorMode, setColorMode] = useState("dark");
    const [history, setHistory] = useState([]);
    return <SafeAreaView style={[styles.container, colorMode === "dark" ? styles.darkTheme : styles.lightTheme]}>
        <Text style={[colorMode === "dark" ? styles.darkTheme : styles.lightTheme]}>Test text</Text>
    </SafeAreaView>;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },

    darkTheme: {
        backgroundColor: colors.backgroundDark,
        color: colors.textDark
    },

    lightTheme: {
        backgroundColor: colors.backgroundLight,
        color: colors.textLight
    }
});
