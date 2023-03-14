import {Button, Image, StyleSheet, Text, View} from "react-native";

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
            <View>
                <Text style={styles.titleText}>
                    {props.titleZone}
                </Text>
            </View>
            <View style={styles.titleText}>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid fugit nulla providen..
                </Text>
            </View>
            <Button title={"Voir plus"}/>
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
        fontSize : 25,
        borderBottomWidth: 1,
        textAlign: "center",
        padding: 10
    },
    textInArticles : {
        textAlign: "center",
        padding: 5
    }
})