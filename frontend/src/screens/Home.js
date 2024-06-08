import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const SERVER_ROUTE = `http://localhost:3001/api`;

export const Home = ({ navigation }) => {
    const [currency, setCurrency] = useState(0);
    const [user, setUser] = useState(null);
    const [profile, setProfile] = useState(null);
    const [token, setToken] = useState(null);

    useEffect(() => {
        fetchToken().then((token) => {
            setToken(token);
        });
    }, []);
    
    useEffect(() => {
        if (user) {
            fetchProfile(token);
        }
    }, [user]);

    const fetchToken = async () => {
        const token = await AsyncStorage.getItem('token');
        const user = await AsyncStorage.getItem('user');
        setUser(JSON.parse(user));
        console.log("user (state): ", user);
        setToken(token);
        return token;
    };

    const fetchProfile = async (token) => {
        console.log("userrrr: " , user)

        let userId = user.Id;

        const route = SERVER_ROUTE + `/profiles/${userId}`;

        fetch(route, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        })

            .then((response) => response.json())
            .then((data) => {
                console.log("Profile data: ", data);
                setProfile(data);
            })
            .catch((error) => {
                console.error("Error:", error);
            });

    };



    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
            <Text>Currency: {currency}</Text>
            {user && <Text>Welcome, {user.Username}!</Text>}
            <Button
                title="Start Session"
                onPress={() => navigation.navigate("SessionSetup")}
            />
            <Button title="View Collection" onPress={() => navigation.navigate("Collection")} />
            <Button title="Get A Pet" onPress={() => navigation.navigate("Gacha")} />
            <Button title="Settings" onPress={() => navigation.navigate("Settings")} />
            <Button title="View Achievements" onPress={() => navigation.navigate("Achievements")} />
            <Button title="Log Out" onPress={() => navigation.navigate("Login")} />

            <Button title="Test" onPress={() => console.log("User? ", user)} />
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
