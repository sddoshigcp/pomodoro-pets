import React, { useState } from "react";
import { View, StyleSheet, Text, Button, TextInput } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const SERVER_ROUTE = `http://localhost:3001/api`;

export const Login = ({ navigation }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        // Implement your login logic here
        console.log(`Username: ${username}, Password: ${password}`);

        //get SERVER_ROUTE from .env
        const route = SERVER_ROUTE + "/login";

        console.log("route:", route);

        fetch(route, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                Username: username,
                Password: password,
            }),
        })
            .then((response) => response.json())
            .then(async (data) => {
                if (data.token) {
                    console.log("data:", data)

                    // Save the token in your state or in AsyncStorage for future requests
                    await AsyncStorage.setItem('token', data.token);
                    await AsyncStorage.setItem('user', JSON.stringify(data.user));

                    // Navigate to the home screen
                    navigation.navigate("Home");
                } else {
                    // Handle login failure
                    console.log("Login failed");
                }
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };

    return (
        <View style={styles.container}>
            <Text>Login Screen</Text>

            <Text>Username</Text>
            <TextInput
                value={username}
                onChangeText={setUsername}
                placeholder="Enter your username"
            />

            <Text>Password</Text>
            <TextInput
                value={password}
                onChangeText={setPassword}
                placeholder="Enter your password"
                secureTextEntry
            />

            <Button title="Log In" onPress={handleLogin} />
            <Button title="Sign Up" onPress={() => navigation.navigate("SignUp")} />
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
