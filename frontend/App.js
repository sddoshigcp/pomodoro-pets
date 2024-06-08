import React, { useState } from "react";

//React native components
import {
    Text,
    View,
    StyleSheet,
    SafeAreaView,
    Platform,
    StatusBar,
} from "react-native";

//Utility imports
import { colors } from "./src/utils/colors";
import { Focus } from "./src/features/Focus";
import { Timer } from "./src/features/Timer";
import { FocusHistory } from "./src/features/FocusHistory";

//Navigation imports
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Screen imports 
import { Home } from "./src/screens/Home";
import { SessionSetup } from "./src/screens/SessionSetup";
import { SessionTimer } from "./src/screens/SessionTimer";
import { SessionDetails } from "./src/screens/SessionDetails";
import { Gacha } from "./src/screens/Gacha";
import { Collection } from "./src/screens/Collection";
import { Achievements } from "./src/screens/Achievements";
import { Settings } from "./src/screens/Settings";
import { Login } from "./src/screens/Login";
import { SignUp } from "./src/screens/SignUp";

const Stack = createNativeStackNavigator();

//Main stack navigator
const MyStack = () => {
    const [currentSubject, setCurrentSubject] = useState("test");
    const [colorMode, setColorMode] = useState("dark");
    const [history, setHistory] = useState([]);


    return (
        <NavigationContainer
            style={[
                styles.container,
                colorMode === "dark" ? styles.darkTheme : styles.lightTheme,
            ]}
        >
            <Stack.Navigator>
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{ title: "Login" }}
                />
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{ title: "Home" }}
                />
                <Stack.Screen
                    name="Achievements"
                    component={Achievements}
                    options={{ title: "Achievements" }}
                />
                <Stack.Screen
                    name="Collection"
                    component={Collection}
                    options={{ title: "Collection" }}
                />
                <Stack.Screen
                    name="Gacha"
                    component={Gacha}
                    options={{ title: "Gacha" }}
                />
                <Stack.Screen
                    name="SessionDetails"
                    component={SessionDetails}
                    options={{ title: "SessionDetails" }}
                />
                <Stack.Screen
                    name="SessionSetup"
                    component={SessionSetup}
                    options={{ title: "SessionSetup" }}
                />
                <Stack.Screen
                    name="SessionTimer"
                    component={SessionTimer}
                    options={{ title: "SessionTimer" }}
                />
                <Stack.Screen
                    name="Settings"
                    component={Settings}
                    options={{ title: "Settings" }}
                />
                <Stack.Screen
                    name="SignUp"
                    component={SignUp}
                    options={{ title: "SignUp" }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

//Main App component
export default function App() {
    return <MyStack />;
}

//Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },

    darkTheme: {
        backgroundColor: colors.backgroundDark,
        color: colors.textDark,
    },

    lightTheme: {
        backgroundColor: colors.backgroundLight,
        color: colors.textLight,
    },
});
