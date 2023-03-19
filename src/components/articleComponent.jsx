
import {ScrollView, Image, StyleSheet, Text, View, TextInput, Button, Pressable} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import React, {useState, useEffect} from 'react';
import axios from "axios";
import {CommentComponent} from "./commentComponent";

export const ArticleComponent = (props) => {

    const [department, setDepartment] = useState([]);
    useEffect(() => {
        // on récupères les départements
        axios.get("https://geo.api.gouv.fr/departements?zone=metro&fields=nom")
            .then(res => {
                res.data.map((note, index) => {
                    // on push dans le tableau de departements avec la fonction setDepartment
                    setDepartment(department => [...department, note.code + " - " + note.nom])
                })
            })
    }, [])
    return (
        <ScrollView style={{
            backgroundColor:"white"
        }}>
            <View style={styles.bigTitle}>
                <Text style={styles.textBigTitle}>
                    {props.bigTitle}
                </Text>
            </View>

            <View>
                <Text style={styles.titleArticle}>
                    {props.quickTitle}
                </Text>
                <Text style={{
                    textAlign: "justify",
                    marginLeft: 20,
                    marginRight: 20
                }}>
                    {props.firstText}
                </Text>
                <Image
                    style={{
                        height: 350,
                        width: 350,
                        marginLeft: 20,
                        marginRight: 20,
                        marginTop: 20
                    }}
                    source= {{
                        uri: props.uri,
                    }}
                />
                <Text style={styles.titleArticle}>
                    {props.secondTitle}
                </Text>
                <Text style={{
                    textAlign: "justify",
                    marginLeft: 20,
                    marginRight: 20
                }}>
                    {props.secondText}
                </Text>
            </View>

            <View style={{
                borderBottomWidth: 1,
                width: 350,
                marginLeft: 20,
                marginRight: 20,
                marginTop: 10,
                borderBottomColor: "yellow"
            }}>
            </View>

            <CommentComponent
                departments = {department}
            />

            <View style={styles.vueComment}>
                <View>
                    <Text
                        style={{
                            fontWeight: "bold"
                        }}>
                        Georgette - Bas-Rhin (67)
                    </Text>
                    <Text>
                        Je suis d'accord avec cet article
                    </Text>
                </View>
                <View>
                    <Text>
                        23/05/22
                    </Text>
                </View>
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