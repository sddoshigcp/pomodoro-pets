import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

export const SessionSetup = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>SessionSetup Screen</Text>
            <Button
                title="Start Timer"
                onPress={() => navigation.navigate("SessionTimer")}
            />
            <Button title="Back" onPress={() => navigation.navigate("Home")} />
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
