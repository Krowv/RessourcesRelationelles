import { StatusBar } from 'expo-status-bar';
import {Button, Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from "react";
import HelloWorld from "./src/sections/HelloWorld";


export default function App() {

  return (
      <View>
          <HelloWorld/>
      </View>
      
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
