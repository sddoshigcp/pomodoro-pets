import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

export const Collection = ({ navigation }) => {
    return <View style={styles.container}><Text>Collection Screen</Text><Button
    title="Back"
    onPress={() => navigation.navigate("Home")}
/><Button
    title="Get A Pet"
    onPress={() => navigation.navigate("Gacha")}
/></View>;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});