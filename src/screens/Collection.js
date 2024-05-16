import React from 'react';
import { View, StyleSheet } from 'react-native';

export const Collection = () => {
    return <View style={styles.container}><Text>Collection Screen</Text></View>;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});