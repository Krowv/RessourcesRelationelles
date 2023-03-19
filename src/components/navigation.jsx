import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Image} from 'react-native';
import {HomePageNavigator} from "../app.navigator";
import {ArticlePage} from "../sections/ArticlePage";
import {ConnexionPage} from "../sections/ConnexionPage";
import {NewArticlePage} from "../sections/NewArticle";
import {Search} from "../sections/Search";
const Tab = createBottomTabNavigator();
export function TabNavigator() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Accueil"
                component={HomePageNavigator}
                options={{
                    title:'Accueil',
                    tabBarIcon: ({focused}) => (
                        <Image
                            style={{

                                height: 24,
                                width: 24,
                            }}
                            source= {{
                                uri: "https://cdn-icons-png.flaticon.com/512/25/25694.png",
                            }}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Recherche"
                component={Search}
                options={{
                    title:'Recherche',
                    tabBarIcon: ({focused}) => (
                        <Image
                            style={{
                                height: 24,
                                width: 24,
                            }}
                            source= {{
                                uri: "https://cdn-icons-png.flaticon.com/512/126/126083.png",
                            }}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="New Article"
                component={NewArticlePage}
                options={{
                    title:'Nouvel article',
                    tabBarIcon: ({focused}) => (
                        <Image
                            style={{
                                height: 24,
                                width: 24,
                            }}
                            source= {{
                                uri: "https://w7.pngwing.com/pngs/972/334/png-transparent-computer-icons-add-logo-desktop-wallpaper-add-thumbnail.png",
                            }}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Connexion"
                component={ConnexionPage}
                options={{
                    title:'Connexion / Inscription',
                    tabBarIcon: ({focused}) => (
                        <Image
                            style={{
                                height: 24,
                                width: 24,
                            }}
                            source= {{
                                uri: "https://cdn-icons-png.flaticon.com/512/1077/1077114.png",
                            }}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}
