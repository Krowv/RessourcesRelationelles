import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { HomePage } from "../sections/HomePage";
import { HelloWorld} from "../sections/HelloWorld";
const Tab = createBottomTabNavigator();
import {Image} from 'react-native';
export function TabNavigator() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Accueil"
                component={HomePage}
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
                name="New Page"
                component={HelloWorld}
                options={{
                    title:'Accueil',
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
        </Tab.Navigator>
    );
}
