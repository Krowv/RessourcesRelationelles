
import {ScrollView, Image, StyleSheet, Text, View, TextInput, Button, Pressable} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import React, {useState, useEffect} from 'react';
import axios from "axios";
import CheckBox from '@react-native-community/checkbox';
export function ArticlePage(props) {
    const countries = ["Egypt", "Canada", "Australia", "Ireland", "France"]
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
                    Pourquoi jouer aux jeux vidéo en couple est sain
                </Text>
            </View>
            <View>
                <Text style={styles.titleArticle}>
                    What is Lorem Ipsum ?
                </Text>
                <Text style={{
                    textAlign: "justify",
                    marginLeft: 20,
                    marginRight: 20
                }}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda commodi corporis dolorem dolores dolorum, excepturi fugiat fugit illo illum ipsum molestiae molestias quaerat quia, quis, rerum tempora temporibus velit voluptates!
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
                        uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
                    }}
                />
                <Text style={styles.titleArticle}>
                    What is Lorem Ipsum ?
                </Text>
                <Text style={{
                    textAlign: "justify",
                    marginLeft: 20,
                    marginRight: 20
                }}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda commodi corporis dolorem dolores dolorum, excepturi fugiat fugit illo illum ipsum molestiae molestias quaerat quia, quis, rerum tempora temporibus velit voluptates!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda commodi corporis dolorem dolores dolorum, excepturi fugiat fugit illo illum ipsum molestiae molestias quaerat quia, quis, rerum tempora temporibus velit voluptates!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda commodi corporis dolorem dolores dolorum, excepturi fugiat fugit illo illum ipsum molestiae molestias quaerat quia, quis, rerum tempora temporibus velit voluptates!
                </Text>
            </View>
            <View style={{
                borderBottomWidth: 1,
                width: 350,
                marginLeft: 20,
                marginRight: 20,
                borderBottomColor: "yellow"
            }}>
            </View>
            <View>
                <Text style={styles.labelForTextInput}>
                    Votre Pseudo
                </Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="Pseudo"/>
                <Text style={styles.labelForTextInput}>
                    Votre Département
                </Text>
                <SelectDropdown
                    data={department}
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
                <Text
                style={styles.labelForTextInput}>
                    Votre commentaire
                </Text>
                <TextInput
                    style={styles.textInput}
                    multiline={true}
                    numberOfLines={6}
                />
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Pressable
                        style={styles.buttonForm}>
                        <Text style={{
                            textAlign:'center',
                            padding: 10,
                        }}>
                            Envoyer
                        </Text>
                    </Pressable>
                </View>
            </View>
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
                <Button
                    style={styles.newButton}
                    title={"Créer l'article"}
                />
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


