import {Text, View, ScrollView, StyleSheet, Button, TextInput, Pressable} from 'react-native';
import React from "react";

export function Search() {
    const searchArticles = () => {
        alert("Recherche en cours")
    }
    return (
        <ScrollView>
            <View style={{
                flex: 1,
                alignItems: "center",
            }}>
                <TextInput
                    style={styles.input}
                    placeholder="Recherche"
                />
            </View>
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Pressable
                    style={styles.buttonForm}
                    onPress={searchArticles}
                >
                    <Text style={{
                        textAlign:'center',
                        padding: 10,
                        color:"white",
                        fontWeight:"bold"
                    }}>
                        Rechercher
                    </Text>
                </Pressable>
            </View>
        </ScrollView>

    );
}

const styles = StyleSheet.create({
    input: {
        borderTopWidth: 1,
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderBottomWidth: 1,
        padding: 10,
        paddingLeft: 20,
        width: 300,
        borderColor: '#03989e',
        marginTop: 10,
        borderRadius: 5
    },
    buttonForm :{
        textAlign: 'center',
        width: '40%',
        backgroundColor: '#f2ba5c',
        marginTop: 10,
        borderRadius: 10
    },
})
