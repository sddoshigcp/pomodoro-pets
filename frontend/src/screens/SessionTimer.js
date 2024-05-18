import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

export const SessionTimer = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>SessionTimer Screen</Text>
            <Button title="Complete Session" onPress={() => navigation.navigate("SessionDetails")} />
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
