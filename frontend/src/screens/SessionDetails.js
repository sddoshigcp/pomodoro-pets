import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

export const SessionDetails = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>SessionDetails Screen</Text>
            <Button title="Restart Session" onPress={() => navigation.navigate("SessionTimer")} />
            <Button
                title="Home"
                onPress={() => navigation.navigate("Home")}
            />
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
