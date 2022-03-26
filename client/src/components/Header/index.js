import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import Avatar from "../../assets/profiles/man1.png";

const Header = ({ type }) => {
	if (type === "simple") {
		return (
			<View style={styles.header("simple")}>
				<Text style={styles.title}>Chat</Text>

				<Image style={styles.avatar} source={Avatar} />
			</View>
		);
	} else if (type === "chat") {
		return (
			<View style={styles.header("chat")}>
				<Image style={styles.avatar} source={Avatar} />

				<Text style={styles.title}>Chat</Text>
			</View>
		);
	}
};

const styles = StyleSheet.create({
	header(type) {
		return {
			height: 80,
			backgroundColor: "#7DBDED",
			alignItems: "center",
			flexDirection: "row",
			justifyContent: type === "simple" ? "space-between" : "center",
		};
	},
	title: {
		marginHorizontal: 16,
		fontSize: 26,
	},
	avatar: {
		height: 60,
		width: 60,
		borderRadius: 50,
		borderWidth: 2,
		backgroundColor: "#fff",
		marginHorizontal: 16,
	},
});

export default Header;
