import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from "@react-navigation/native";
import {ArticlePage} from "./sections/ArticlePage";
import {HomePage} from "./sections/HomePage";
import {LinkArticlePage} from "./sections/LinkArticlePage";
import {VideoArticlePage} from "./sections/VideoArticlePage";

const { Navigator, Screen } = createNativeStackNavigator();

const HomePageNavigator = () => {
    return (
        <Navigator screenOptions={{headerShown: false}}>
            <Screen title="Accueil" name="HomePage" component={HomePage}/>
            <Screen name="ArticlePage" component={ArticlePage}/>
            <Screen name="LinkArticlePage" component={LinkArticlePage}/>
            <Screen name="VideoArticlePage" component={VideoArticlePage}/>
        </Navigator>
    )
}
export {HomePageNavigator}