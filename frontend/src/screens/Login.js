import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

export const Login = ({ navigation }) => {
    return <View style={styles.container}><Text>Login Screen</Text><Button
    title="Log In"
    onPress={() => navigation.navigate("Home")}
/></View>;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});