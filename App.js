import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from "@react-navigation/native";
import {Button, Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from "react";
import { HelloWorld } from "./src/sections/HelloWorld";
import {TabNavigator} from "./src/components/navigation";


export default function App() {

  return (
      <NavigationContainer>
          <TabNavigator/>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
