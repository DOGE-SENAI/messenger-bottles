import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-native-paper";
import Header from "./src/components/Header";
import SignIn from "./src/pages/SignIn";
import Config from "./src/pages/Config"

export default function App() {
	return (
		<Config />
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
