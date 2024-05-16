import React from 'react';
import { View, StyleSheet } from 'react-native';

export const Home = () => {
    return <View style={styles.container}><Text>Home Screen</Text></View>;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});