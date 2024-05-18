import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

export const Settings = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Settings Screen</Text>
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
