import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-native-paper";
import Header from "./src/components/Header";
import SignUp from "./src/pages/SignUp";

export default function App() {
  return (
    <Provider>
      <Header type="chat" />
      <View style={styles.container}></View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
