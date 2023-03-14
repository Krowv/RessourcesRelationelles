import {Button, Pressable, StyleSheet, Text, View} from "react-native";
import React, {useState} from "react";

export const Cat = (props) => {

    const [counter, setCounter] = useState(6)

    return (
        <View>
            <Text>Hello I am {props.name}</Text>
        </View>
    );
}

