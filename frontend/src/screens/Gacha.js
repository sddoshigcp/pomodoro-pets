import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

export const Gacha = ({ navigation }) => {
    return <View style={styles.container}><Text>Gacha Screen</Text><Button
    title="Back"
    onPress={() => navigation.navigate("Home")}
/><Button
    title="View Collection"
    onPress={() => navigation.navigate("Collection")}
/></View>;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});