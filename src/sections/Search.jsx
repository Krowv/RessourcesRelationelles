import {Text, View, ScrollView, StyleSheet, Button, TextInput} from 'react-native';
import React, {useState} from "react";

export function Search() {
    const [isSelected, setIsSelected] = useState(false)

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
        width: 300
    }
})
