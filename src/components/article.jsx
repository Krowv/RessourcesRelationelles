import {Button, Image, Pressable, StyleSheet, Text, View} from "react-native";

export const Article = (props) => {
    return (
        <View style={styles.border}>
            <Image
                style={{
                    height: 300,
                    width: 300,
                }}
                source= {{
                    uri: props.uri,
                }}
            />
            <View style={styles.titleZone}>
                <Text style={styles.titleText}>
                    {props.titleZone}
                </Text>
            </View>
            <Pressable style={{
                padding: 10,
                backgroundColor: "#f2ba5c"
            }} onPress={props.button}>
                <Text style={{
                    textAlign:"center",
                    color:"white",
                    fontWeight:"bold",
                    fontSize:20
                }}>
                    Voir plus
                </Text>
            </Pressable>
        </View>
    )
}
const styles = StyleSheet.create({
    border: {
        borderBottomWidth : 1,
        borderLeftWidth : 1,
        borderRightWidth: 1,
        borderTopWidth: 1,
        maxWidth: 302,
        margin: 15
    },
    titleText :{
        fontSize : 20,
        borderBottomWidth: 1,
        textAlign: "center",
        padding: 10,
        color:"white"
    },
    textInArticles : {
        textAlign: "center",
        padding: 5
    },
    titleZone :{
        backgroundColor: '#0eb1b8',
    }
})