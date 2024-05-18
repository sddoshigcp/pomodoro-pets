import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

export const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
            <Button
                title="Start Session"
                onPress={() => navigation.navigate("SessionSetup")}
            />
            <Button title="View Collection" onPress={() => navigation.navigate("Collection")} />
            <Button title="Get A Pet" onPress={() => navigation.navigate("Gacha")} />
            <Button title="Settings" onPress={() => navigation.navigate("Settings")} />
            <Button title="View Achievements" onPress={() => navigation.navigate("Achievements")} />
            <Button title="Log Out" onPress={() => navigation.navigate("Login")} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
