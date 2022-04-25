import Logo from "../../assets/logos/logo_128.png";
import React, { useState } from "react";
import ProfilesPhotos from "../../components/ProfilesPhotos";
import { StatusBar } from "expo-status-bar";
import {
	StyleSheet,
	View,
	Text,
	ScrollView,
	SafeAreaView,
	TextInput,
	TouchableOpacity,
	Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function SignUp() {
	const navigation = useNavigation();

	const [name, setName] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	return (
		<ScrollView style={styles.scrollContainer}>
			<View style={styles.containerMain}>
				<View style={{ marginTop: 10 }}>
					<Image source={Logo} />
				</View>

				<View style={styles.containerImg}>
					<ProfilesPhotos />

					<TextInput
						selectionColor={"rgba(0,0,0,0.5)"}
						caretHidden={false}
						style={styles.inputSmall}
						placeholder="Nome"
						keyboardType="default"
						autoCapitalize="words"
						value={name}
						onChangeText={(text) => setName(text)}
					/>
				</View>

				<View style={styles.containerInputs}>
					<SafeAreaView>
						<TextInput
							selectionColor={"rgba(0,0,0,0.5)"}
							caretHidden={false}
							style={styles.input}
							placeholder="Nome de Usuário"
							keyboardType="default"
							autoCapitalize="none"
							value={username}
							onChangeText={(text) => setUsername(text)}
						/>
					</SafeAreaView>

					<SafeAreaView>
						<TextInput
							selectionColor={"rgba(0,0,0,0.5)"}
							caretHidden={false}
							style={styles.input}
							placeholder="Senha"
							keyboardType="default"
							autoCapitalize="none"
							secureTextEntry={true}
							value={password}
							onChangeText={(text) => setPassword(text)}
						/>
					</SafeAreaView>

					<SafeAreaView>
						<TextInput
							selectionColor={"rgba(0,0,0,0.5)"}
							caretHidden={false}
							style={styles.input}
							placeholder="Confirme sua senha"
							keyboardType="default"
							autoCapitalize="none"
							secureTextEntry={true}
							value={confirmPassword}
							onChangeText={(text) => setConfirmPassword(text)}
						/>
					</SafeAreaView>
				</View>

				<TouchableOpacity
					style={styles.button}
					onPress={() => navigation.navigate("contacts")}
				>
					<Text style={styles.buttonText}>Concluir</Text>
				</TouchableOpacity>
			</View>
			<StatusBar style="auto" />
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
		width: "80%",
		display: "flex",
		flexDirection: "row",
		alignItems: "flex-end",
		justifyContent: "space-between",
	},
	containerInputs: {
		marginTop: 20,
		display: "flex",
		width: "80%",
		height: "40%",
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
		width: "100%",
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
		width: 220,
		height: 50,
		marginTop: 0,
		paddingLeft: 10,
		fontSize: 20,
	},
});
