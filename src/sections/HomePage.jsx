import {Text, View, ScrollView, StyleSheet, Button} from 'react-native';
import {Image} from "react-native";
import {Article} from "../components/article";

export function HomePage() {

    return (
        <ScrollView>
            <View style={{
                flex: 1,
                alignItems: "center",
            }}>
                <Article
                    uri={"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"}
                    titleZone={"Title"}
                    textZone={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias animi beatae consectetur eligendi eum ex laboriosam magni maiores maxime modi necessitatibus, neque numquam quia rem rerum soluta sunt, vero?"}
                />
                <Article
                    uri={"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"}
                    titleZone={"Title"}
                    textZone={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias animi beatae consectetur eligendi eum ex laboriosam magni maiores maxime modi necessitatibus, neque numquam quia rem rerum soluta sunt, vero?"}
                />
                <Article
                    uri={"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"}
                    titleZone={"Title"}
                    textZone={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias animi beatae consectetur eligendi eum ex laboriosam magni maiores maxime modi necessitatibus, neque numquam quia rem rerum soluta sunt, vero?"}
                />

            </View>
        </ScrollView>

    );
}
