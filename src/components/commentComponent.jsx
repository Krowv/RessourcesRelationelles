import {Pressable, Text, TextInput, View, StyleSheet} from "react-native";
import SelectDropdown from "react-native-select-dropdown";

export const CommentComponent = (props) => {
    return (
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
                data={props.departments}
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
    )
}

const styles = StyleSheet.create({
    labelForTextInput: {
        width: '100%',
        marginLeft: 20,
        marginTop: 20
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
    buttonForm :{
        width: '40%',
        backgroundColor: '#f2ba5c',
        marginTop: 10,
        borderRadius: 10
    },
})