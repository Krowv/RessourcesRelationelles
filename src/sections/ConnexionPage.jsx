import {Text, View, TextInput, StyleSheet, Button} from 'react-native';
import React, {useState} from "react";
export function ConnexionPage() {
    return (
        <View>
            <Text style={styles.title}>
                Inscription
            </Text>
            <TextInput
                style={styles.input}
                placeholder={"Email"}
            />
            <TextInput
                style={styles.input}
                placeholder={"Pseudo"}
            />
            <TextInput
                style={styles.input}
                keyboardType = 'numeric'
                maxLength={5}
                placeholder={"Code département"}
            />
            <TextInput
                style={styles.input}
                placeholder={"Mot de passe"}
            />
            <Button
                style={styles.button}
                title={"Se connecter"}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
    },
    button: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 25,
        borderRadius: 10,
        backgroundColor: "#a2d9db",
    },
    title: {
        fontSize: 30,
        textAlign: "center",
        marginTop: 20,
        marginBottom: 20,
    }
});