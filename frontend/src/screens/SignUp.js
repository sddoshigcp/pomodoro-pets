import {React, useState} from "react";
import { View, StyleSheet, Text, Button, TextInput } from "react-native";

export const SignUp = ({ navigation }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");


    const handleSignUp = async () => {

        console.log(`Username: ${username}, Password: ${password}, Confirm Password: ${confirmPassword}`)

        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }
    
        try {
            // API call to create a user
            const response = await fetch('http://localhost:5000/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    Username: username,
                    Password: password,
                }),
            });
    
            const data = await response.json();
    
            if (data.error) {
                alert(data.error);
                return;
            }
    
            // API call to create a profile
            const profileResponse = await fetch('http://localhost:5000/profiles', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    UserId: data.id,
                    PomodoroPoints: 0,
                    TotalMinutes: 0,
                    MinutesToday: 0,
                    MinutesThisWeek: 0,
                    ModifiedBy: 0,
                }),
            });
    
            const profileData = await profileResponse.json();
    
            if (profileData.error) {
                alert(profileData.error);
                return;
            }
    
            // Navigate to Login
            navigation.navigate("Login");
        } catch (error) {
            console.error(error);
        }
    };
    

    return (
        <View style={styles.container}>
            <Text>Sign Up</Text>

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

            <Text>Confirm Password</Text>
            <TextInput
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                placeholder="Confirm your password"
                secureTextEntry
            />

            <Button title="Create Account" onPress={handleSignUp} />
            <Button
                title="Already have an account? Log In"
                onPress={() => navigation.navigate("Login")}
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
