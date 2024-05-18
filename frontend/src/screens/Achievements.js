import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

export const Achievements = ({ navigation }) => {
    return <View style={styles.container}><Text>Achievements Screen</Text>
    <Button
                title="Back"
                onPress={() => navigation.navigate("Home")}
            />
    </View>;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});