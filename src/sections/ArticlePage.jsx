
import {ScrollView, Image, StyleSheet, Text, View, TextInput, Button, Pressable} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import React, {useState, useEffect} from 'react';
import axios from "axios";
import CheckBox from '@react-native-community/checkbox';
import {ArticleComponent} from "../components/articleComponent";

export function ArticlePage () {
    return  (
        <ArticleComponent
            bigTitle = "Pourquoi jouer aux jeux vidéo en couple est sain"
            quickTitle = "What is Lorem Ipsum ?"
            firstText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda commodi corporis dolorem dolores dolorum, excepturi fugiat fugit illo illum ipsum molestiae molestias quaerat quia, quis, rerum tempora temporibus velit voluptates!"
            secondTitle = "What is Lorem Ipsum"
            uri="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
            secondText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda commodi corporis dolorem dolores dolorum, excepturi fugiat fugit illo illum ipsum molestiae molestias quaerat quia, quis, rerum tempora temporibus velit voluptates!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda commodi corporis dolorem dolores dolorum, excepturi fugiat fugit illo illum ipsum molestiae molestias quaerat quia, quis, rerum tempora temporibus velit voluptates!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda commodi corporis dolorem dolores dolorum, excepturi fugiat fugit illo illum ipsum molestiae molestias quaerat"
        />
    )
}
const styles = StyleSheet.create({
    bigTitle: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 10,
        backgroundColor: '#9f4a54',
        padding: 10,
        width: 350
    },
    textBigTitle: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center"
    },
    titleArticle: {
        marginLeft: 20,
        marginTop: 20,
        fontSize: 15,
        fontWeight: "bold"
    },
    textInput: {
        marginLeft: 20,
        marginRight: 20,
        borderBottomWidth : 1,
        borderTopWidth : 1,
        borderLeftWidth : 1,
        borderRightWidth : 1,
        padding: 10,
        paddingLeft: 20,
        borderRadius: 10,
        marginTop: 10,
        backgroundColor: "#a2d9db",
        borderColor: "#a2d9db"
    },
    dropdown1BtnStyle: {
        marginLeft: 20,
        marginRight: 20,
        borderBottomWidth : 1,
        borderTopWidth : 1,
        borderLeftWidth : 1,
        borderRightWidth : 1,
        borderRadius: 10,
        marginTop: 10,
        backgroundColor: "#a2d9db",
        borderColor: "#a2d9db",
        width: '90%'
    },
    labelForTextInput: {
        width: '100%'
    },
    newInputLabel: {
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20,
        fontSize: 16
    },
    buttonForm :{
        width: '40%',
        backgroundColor: '#f2ba5c',
        marginTop: 10,
        borderRadius: 10
    },
    vueComment: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#f9f9f9',
        padding: 10,
        marginTop: 10
    },
    newInput: {
        marginLeft: 20,
        marginRight: 20,
        borderBottomWidth : 1,
        borderTopWidth : 1,
        borderLeftWidth : 1,
        borderRightWidth : 1,
        padding: 10,
        paddingLeft: 20,
        borderRadius: 10,
        marginTop: 10,
        backgroundColor: "white",
        borderColor: "#a2d9db"
    },
    newInputContent: {
        marginLeft: 20,
        marginRight: 20,
        borderBottomWidth : 1,
        borderTopWidth : 1,
        borderLeftWidth : 1,
        borderRightWidth : 1,
        padding: 10,
        paddingLeft: 20,
        borderRadius: 10,
        marginTop: 10,
        backgroundColor: "white",
        borderColor: "#a2d9db",
        height: 500,
    },
    newButton: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 25,
        borderRadius: 10,
        backgroundColor: "#a2d9db",
        width: '33%',
    },
})


