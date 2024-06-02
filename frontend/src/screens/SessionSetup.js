import {React, useState} from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

export const SessionSetup = ({ navigation }) => {

    const [sessionLength, setSessionLength] = useState(30); //default session length is 25 minutes

    //use loop to fill options with every 5 minute interval from 5 minutes to 2 hours
    let options = [];
    for (let i = 5; i <= 120; i += 5) {
        options.push({ label: i + " minutes", value: i });
    }

    console.log("session length: ", sessionLength)

    return (
        <View style={styles.container}>
            <Text>SessionSetup Screen</Text>

            <Text>Session Length:</Text>
            <Dropdown 
                search
                data={options}
                labelField="label"
                valueField="value"
                searchField="label"
                onChange={(value) => setSessionLength(value.value)}
                onChangeText={(value) => setSessionLength(value.value)}
                value={sessionLength}
            ></Dropdown>



            <Button
                title="Start Timer"
                onPress={() => navigation.navigate("SessionTimer")}
            />
            <Button title="Back" onPress={() => navigation.navigate("Home")} />
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
