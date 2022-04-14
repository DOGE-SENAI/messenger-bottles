import Man1 from "../../assets/profiles/man1.png";
import React from "react";
import { View, Text } from "react-native";
import {
	Image,
	TouchableOpacity,
	StyleSheet,
	TextInput,
	SafeAreaView,
} from "react-native";
import Header from "../../components/Header";

export default function ConfigUser() {
	const username = "Londra Silva";

	return (
		<View style={styles.containerMain}>
			<Header type="withArrow" />

			<TouchableOpacity>
				<Image source={Man1} style={styles.image} />
			</TouchableOpacity>

			<Text style={styles.title}>{username}</Text>

			<SafeAreaView>
				<TextInput
					selectionColor={"rgba(0,0,0,0.5)"}
					caretHidden={false}
					placeholder="Bruno Souza Lima"
					keyboardType="default"
					style={styles.input}
				/>

				<View style={styles.containerButtons}>
					<TouchableOpacity style={styles.button}>
						<View>
							<Text style={styles.buttonText}>Concluir</Text>
						</View>
					</TouchableOpacity>

					<TouchableOpacity style={styles.buttonRed}>
						<View>
							<Text style={styles.buttonText}>Sair</Text>
						</View>
					</TouchableOpacity>
				</View>
			</SafeAreaView>
		</View>
	);
}

const styles = StyleSheet.create({
	containerMain: {
		display: "flex",
		width: "100%",
		alignItems: "center",
	},
	containerButtons: {
		display: "flex",
		alignSelf: "center",
		justifyContent: "flex-end",
		marginTop: 150,
	},
	image: {
		width: 200,
		height: 200,
		borderRadius: 200,
		marginTop: 40,
	},
	title: {
		fontSize: 26,
		marginTop: 15,
	},
	input: {
		borderWidth: 1,
		borderRadius: 8,
		borderStyle: "solid",
		backgroundColor: "rgba(255,255,255,0.47)",
		borderColor: "rgba(0,0,0,0.5)",
		width: 300,
		height: 50,
		marginTop: 20,
		paddingLeft: 10,
		fontSize: 20,
	},
	button: {
		borderRadius: 10,
		height: 50,
		width: 175,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#000101",
		marginBottom: 30,
	},
	buttonRed: {
		borderRadius: 10,
		height: 50,
		width: 175,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#F90F0F",
	},
	buttonText: {
		fontSize: 23,
		fontWeight: "700",
		color: "#E6E8E1",
	},
});
