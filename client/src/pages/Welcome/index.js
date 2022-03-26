import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Logo from "../../assets/logos/logo_256.png";

export default function Welcome() {
	return (
		<View style={styles.container}>
			<View style={styles.containerLogo}>
				<Image source={Logo} style={styles.logo} resizeMode="contain" />
				<Text style={styles.title}>Messenger</Text>
				<Text style={styles.title}>Bottles</Text>
			</View>

			<View style={styles.containerForm}>
				<View style={styles.containerButtons}>
					<TouchableOpacity style={styles.button}>
						<Text style={styles.buttonText}>Entrar</Text>
					</TouchableOpacity>

					<TouchableOpacity style={styles.button}>
						<Text style={styles.buttonText}>Registrar</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#7DBDED",
	},
	containerLogo: {
		flex: 2,
		justifyContent: "center",
		backgroundColor: "#7DBDED",
		alignItems: "center",
	},
	logo: {
		width: 200,
		height: 200,
	},
	containerForm: {
		height: 240,
		backgroundColor: "#053361",
		borderTopLeftRadius: 60,
		borderTopRightRadius: 60,
		justifyContent: "center",
		alignItems: "center",
	},
	containerButtons: {
		width: "100%",
		height: 150,
		justifyContent: "space-around",
		alignItems: "center",
	},
	title: {
		color: "#053361",
		fontSize: 35,
		fontWeight: "bold",
	},
	button: {
		backgroundColor: "#000101",
		borderRadius: 10,
		width: "50%",
		height: 55,
		alignSelf: "center",
		alignItems: "center",
		justifyContent: "center",
	},
	buttonText: {
		color: "#F3F3F2",
		fontSize: 24,
		fontWeight: "700",
	},
});
