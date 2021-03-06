import React, { useState } from "react";
import Logo from "../../assets/logos/logo_128.png";
import {
	Image,
	ScrollView,
	StyleSheet,
	SafeAreaView,
	TextInput,
	TouchableOpacity,
} from "react-native";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import api from "../../service/api";

export default function SignIn() {
	const navigation = useNavigation();
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const login = () => {
		api
			.post("/login", {
				username,
				password,
			})
			.then(({ data }) => {
				if (data.logged) {
					navigation.navigate("chat", { paramKey: username });
				} else {
					console.log("Senha ou Usuário incorretos");
				}
			});
	};

	return (
		<ScrollView style={styles.scrollContainer}>
			<View style={styles.containerMain}>
				<View style={styles.logo}>
					<Image source={Logo} />
				</View>

				<View style={styles.containerSecond}>
					<Text style={styles.title}>Nome de Usuário</Text>

					<SafeAreaView>
						<TextInput
							style={styles.inputUser}
							value={username}
							autoCapitalize="none"
							onChangeText={(username) => setUsername(username)}
							caretHidden={false}
							selectionColor={"rgba(0,0,0,0.5)"}
						/>
					</SafeAreaView>

					<Text style={styles.title}>Senha</Text>

					<SafeAreaView>
						<TextInput
							style={styles.inputSenha}
							value={password}
							onChangeText={(password) => setPassword(password)}
							secureTextEntry={true}
							keyboardType="default"
							caretHidden={false}
							selectionColor={"rgba(0,0,0,0.5)"}
						/>
					</SafeAreaView>
				</View>

				<TouchableOpacity style={styles.button} onPress={login}>
					<Text style={styles.buttonTitle}>Entrar</Text>
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
		flex: 1,
		backgroundColor: "#7DBDED",
		alignItems: "center",
		justifyContent: "space-evenly",
	},
	logo: {
		marginTop: 80,
	},
	containerSecond: {
		display: "flex",
		width: "90%",
	},
	title: {
		color: "#053361",
		fontSize: 25,
		marginTop: 60,
	},
	inputUser: {
		backgroundColor: "rgba(255,255,255,0.47)",
		borderColor: "rgba(0,0,0,0.5)",
		borderRadius: 6,
		fontSize: 20,
		borderWidth: 1,
		borderStyle: "solid",
		height: 50,
		marginTop: 5,
		paddingLeft: 10,
	},
	inputSenha: {
		backgroundColor: "rgba(255,255,255,0.47)",
		borderColor: "rgba(0,0,0,0.5)",
		borderRadius: 6,
		fontSize: 20,
		borderWidth: 1,
		borderStyle: "solid",
		height: 50,
		marginTop: 5,
		paddingLeft: 10,
	},
	button: {
		borderRadius: 10,
		height: 50,
		width: 175,
		marginTop: 100,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#000101",
	},
	buttonTitle: {
		fontSize: 23,
		fontWeight: "700",
		color: "#E6E8E1",
	},
});
