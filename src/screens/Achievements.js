import React from 'react';
import { View, StyleSheet } from 'react-native';

export const Achievements = () => {
    return <View style={styles.container}><Text>Achievements Screen</Text></View>;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});