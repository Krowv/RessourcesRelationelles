import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from "@react-navigation/native";
import {ArticlePage} from "./sections/ArticlePage";
import {HomePage} from "./sections/HomePage";

const { Navigator, Screen } = createNativeStackNavigator();

const HomePageNavigator = () => {
    return (
        <Navigator initialRouteName="HomePage">
            <Screen name="HomePage" component={HomePage}/>
            <Screen name="ArticlePage" component={ArticlePage}/>
        </Navigator>
    )
}
export {HomePageNavigator}