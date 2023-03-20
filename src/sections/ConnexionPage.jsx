import {Text, View, TextInput, StyleSheet, Button, Pressable} from 'react-native';
import React from "react";
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
            <Pressable style={styles.buttonForm}>
                <Text style={{
                    textAlign: "center",
                    color: "white",
                    textTransform: "uppercase",
                    fontWeight: "bold"

                }}>
                    Inscription
                </Text>
            </Pressable>
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
    buttonForm :{
        width: '40%',
        backgroundColor: '#f2ba5c',
        marginTop: 10,
        padding: 10,
        textAlign: "center",
        marginLeft: "auto",
        marginRight: "auto",
        borderRadius: 10
    },
    title: {
        fontSize: 30,
        textAlign: "center",
        marginTop: 20,
        marginBottom: 20,
    }
});