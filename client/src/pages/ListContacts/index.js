import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button, StyleSheet, View } from "react-native";
import Header from "../../components/Header";

const ListContacts = () => {
	const navigation = useNavigation();

	return (
		<View style={styles.containerMain}>
			<Header type="simple" />

			<Button title="chat page" onPress={() => navigation.navigate("chat")} />
		</View>
	);
};

const styles = StyleSheet.create({
	containerMain: {
		display: "flex",
		width: "100%",
		alignItems: "center",
	},
});

export default ListContacts;
