import {View, ScrollView} from 'react-native';
import {Article} from "../components/article";
export function HomePage({navigation}) {

    return (
        <ScrollView>
            <View style={{
                flex: 1,
                alignItems: "center",
            }}>
                <Article
                    uri={"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"}
                    titleZone={"Pourquoi jouer aux jeux vidéo en couple est sain"}
                    textZone={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias animi beatae consectetur eligendi eum ex laboriosam magni maiores maxime modi necessitatibus, neque numquam quia rem rerum soluta sunt, vero?"}
                    button={() => navigation.navigate("ArticlePage")}
                />
                <Article
                    uri={"https://fr.jardins-animes.com/images/fontaine-jardin-lumineuse-buddha-300x300.jpg"}
                    titleZone={"Tout comprendre au bouddhisme"}
                    textZone={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias animi beatae consectetur eligendi eum ex laboriosam magni maiores maxime modi necessitatibus, neque numquam quia rem rerum soluta sunt, vero?"}
                    button={() => navigation.navigate("LinkArticlePage")}
                />
                <Article
                    uri={"https://www.shape.com/thmb/Rob9OaoUByZDWwdab2d_OOEYTAw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/martha-king-feature-375599a249e847b68ffa8f465c869a2d.jpg"}
                    titleZone={"Pourquoi engager une femme dans une équipe masculine"}
                    textZone={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias animi beatae consectetur eligendi eum ex laboriosam magni maiores maxime modi necessitatibus, neque numquam quia rem rerum soluta sunt, vero?"}
                    button={() => navigation.navigate("VideoArticlePage")}
                />

            </View>
        </ScrollView>

    );
}
