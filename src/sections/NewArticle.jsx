import {ScrollView, Image, StyleSheet, Text, View, TextInput, Button, Pressable} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import React, {useState, useEffect} from 'react';
import axios from "axios";

export function NewArticlePage() {
    const [toggleCheckBox, setToggleCheckBox] = useState(false);
    const [categorys, setCategorys] = useState(["Jeux Vidéo", "Sport", "Musique", "Cinéma", "Santé", "Technologie", "Politique", "Société", "Culture", "Economie", "Environnement", "Littérature", "Art", "Histoire", "Religion", "Philosophie", "Sciences", "Autres"]);
    return (
        <ScrollView>
            <View>
                <Text style={styles.newInputLabel}>
                    Catégorie de l'article
                </Text>
                <SelectDropdown
                    data={categorys}
                    buttonStyle={styles.dropdown1BtnStyle}
                    onSelect={(selectedItem, index) => {
                        console.log(selectedItem, index)
                    }}
                    buttonTextAfterSelection={(selectedItem, index) => {
                        // text represented after item is selected
                        // if data array is an array of objects then return selectedItem.property to render after item is selected
                        return selectedItem
                    }}
                    rowTextForSelection={(item, index) => {
                        // text represented for each item in dropdown
                        // if data array is an array of objects then return item.property to represent item in dropdown
                        return item
                    }}
                />
            </View>
            <View>
                <Text style={styles.newInputLabel}>
                    Titre de l'article
                </Text>
                <TextInput
                    style={styles.newInput}
                    placeholder="Pseudo"/>
                <Text style={styles.newInputLabel}>
                    Contenu de l'article
                </Text>
                <TextInput
                    style={styles.newInputContent}
                />
            </View>
            <View>
                <Pressable style={styles.buttonForm}>
                    <Text style={{
                        textAlign: "center",
                        color: "white",
                        textTransform: "uppercase",
                        fontWeight: "bold"

                    }}>
                        Ajouter l'article
                    </Text>
                </Pressable>

            </View>
        </ScrollView>
    );
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
        padding: 10,
        textAlign: "center",
        marginLeft: "auto",
        marginRight: "auto",
        borderRadius: 10,
        marginBottom: 10
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


