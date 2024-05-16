import React from 'react';
import { View, StyleSheet } from 'react-native';

export const SessionSetup = () => {
    return <View style={styles.container}><Text>SessionSetup Screen</Text></View>;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});