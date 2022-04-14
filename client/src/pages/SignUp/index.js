import Logo from "../../assets/logos/logo_128.png";
import React from "react";
import ProfilesPhotos from "../../components/ProfilesPhotos";
import {
	StyleSheet,
	View,
	Text,
	ScrollView,
	SafeAreaView,
	TextInput,
	TouchableOpacity,
	Image,
	StatusBar,
} from "react-native";

export default function SignUp() {
	return (
		<ScrollView style={styles.scrollContainer}>
			<View style={styles.containerMain}>
				<View style={{ marginTop: 10 }}>
					<Image source={Logo} />
				</View>

				<View style={styles.containerImg}>
					<ProfilesPhotos />

					<SafeAreaView>
						<TextInput
							selectionColor={"rgba(0,0,0,0.5)"}
							caretHidden={false}
							style={styles.inputSmall}
							placeholder="Nome"
							keyboardType="default"
						></TextInput>
					</SafeAreaView>
				</View>

				<View style={styles.containerInputs}>
					<SafeAreaView>
						<TextInput
							selectionColor={"rgba(0,0,0,0.5)"}
							caretHidden={false}
							style={styles.input}
							placeholder="Email"
							keyboardType="email-address"
						></TextInput>
					</SafeAreaView>

					<SafeAreaView>
						<TextInput
							selectionColor={"rgba(0,0,0,0.5)"}
							caretHidden={false}
							style={styles.input}
							placeholder="Senha"
							keyboardType="default"
						></TextInput>
					</SafeAreaView>

					<SafeAreaView>
						<TextInput
							selectionColor={"rgba(0,0,0,0.5)"}
							caretHidden={false}
							style={styles.input}
							placeholder="Confirme sua senha"
							keyboardType="default"
						></TextInput>
					</SafeAreaView>
				</View>

				<View>
					<TouchableOpacity style={styles.button}>
						<View style={styles.contentBtn}>
							<Text style={styles.buttonText}>Concluir</Text>
						</View>
					</TouchableOpacity>
				</View>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	scrollContainer: {
		backgroundColor: "#7DBDED",
		paddingTop: 70,
	},
	containerMain: {
		backgroundColor: "#7DBDED",
		alignItems: "center",
		justifyContent: "space-evenly",
		paddingTop: 30,
		fontSize: 18,
	},
	containerImg: {
		marginTop: 100,
		display: "flex",
		flexDirection: "row",
		alignItems: "flex-end",
		justifyContent: "space-between",
	},
	containerInputs: {
		marginTop: 45,
		display: "flex",
		height: "50%",
	},
	button: {
		borderRadius: 10,
		height: 50,
		width: 175,
		marginBottom: 100,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#000101",
	},
	buttonText: {
		fontSize: 23,
		fontWeight: "700",
		color: "#E6E8E1",
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
	inputSmall: {
		borderWidth: 1,
		borderRadius: 8,
		borderStyle: "solid",
		backgroundColor: "rgba(255,255,255,0.47)",
		borderColor: "rgba(0,0,0,0.5)",
		width: 160,
		height: 50,
		marginTop: 0,
		marginLeft: 30,
		paddingLeft: 10,
		fontSize: 20,
	},
});
