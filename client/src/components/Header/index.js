import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Button, Menu } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";
import Avatar from "../../assets/profiles/man1.png";
import { useNavigation } from "@react-navigation/native";

export default function Header({ type, user, clearMessages }) {
	const navigation = useNavigation();
	const [visible, setVisible] = useState(false);
	const openMenu = () => setVisible(true);
	const closeMenu = () => setVisible(false);

	if (type === "simple") {
		// Usada na página Lista de Chats
		return (
			<View style={styles.header}>
				<Text style={styles.title(type)}>Chat</Text>

				<TouchableOpacity onPress={() => navigation.navigate("configuser")}>
					<Image style={styles.avatar} source={Avatar} />
				</TouchableOpacity>

				<StatusBar style="auto" />
			</View>
		);
	} else if (type === "chat") {
		// Usada na Página chat
		return (
			<>
				<View style={styles.header}>
					<View style={styles.boxAvatarArrow}>
						<TouchableOpacity onPress={() => navigation.goBack()}>
							<Icon name="chevron-left" size={20} color="#000" />
						</TouchableOpacity>

						<Image style={styles.avatar} source={Avatar} />

						<Text style={styles.title(type)}>{user}</Text>
					</View>

					<Menu
						visible={visible}
						onDismiss={closeMenu}
						anchor={
							<Button onPress={openMenu}>
								<Icon
									style={styles.moreOptions}
									name="ellipsis-v"
									size={24}
									color="#000"
								/>
							</Button>
						}
					>
						<Menu.Item icon="delete" title="Deletar Conversa" />
						<Menu.Item icon="broom" title="Limpar" />
					</Menu>
				</View>

				<StatusBar style="auto" />
			</>
		);
	} else if (type === "withArrow") {
		// Atulizar infos da conta
		return (
			<View style={styles.header}>
				<View style={styles.boxArrowHeader}>
					<TouchableOpacity
						style={styles.arrow}
						onPress={() => navigation.goBack()}
					>
						<Icon name="chevron-left" size={20} color="#000" />
					</TouchableOpacity>

					<Text style={styles.title(type)}>Chat</Text>
				</View>

				<StatusBar style="auto" />
			</View>
		);
	} else if (type === "chat-geral") {
		// Usada na Página chat
		return (
			<>
				<View style={styleChatGeral.header}>
					<View style={styleChatGeral.infosChatGeral}>
						<Text style={styleChatGeral.titleApp}>Messenger Bottles</Text>

						<Text style={styleChatGeral.titleUser}>{user}</Text>
					</View>

					<Menu
						visible={visible}
						onDismiss={closeMenu}
						anchor={
							<Button onPress={openMenu}>
								<Icon
									style={styles.moreOptions}
									name="ellipsis-v"
									size={24}
									color="#000"
								/>
							</Button>
						}
					>
						<Menu.Item
							icon="broom"
							title="Limpar"
							onPress={() => clearMessages(true)}
						/>
						<Menu.Item
							icon="logout"
							title="Sair"
							onPress={() => {
								navigation.navigate("welcome");
							}}
						/>
					</Menu>
				</View>

				<StatusBar style="auto" />
			</>
		);
	}
}

const styleChatGeral = StyleSheet.create({
	header: {
		paddingTop: 40,
		height: 120,
		width: "100%",
		backgroundColor: "#7DBDED",
		alignItems: "center",
		flexDirection: "row",
		justifyContent: "space-between",
	},
	infosChatGeral: {
		flexDirection: "column",
		justifyContent: "space-between",
		alignItems: "flex-start",
		marginHorizontal: 12,
	},
	titleApp: {
		fontSize: 26,
	},
	titleUser: {
		fontSize: 18,
	},
});

const styles = StyleSheet.create({
	header: {
		paddingTop: 40,
		height: 120,
		width: "100%",
		backgroundColor: "#7DBDED",
		alignItems: "center",
		flexDirection: "row",
		justifyContent: "space-between",
	},
	title(type) {
		return {
			fontSize: 26,
			marginHorizontal: type === "simple" ? 12 : 0,
		};
	},
	avatar: {
		height: 60,
		width: 60,
		borderRadius: 50,
		borderWidth: 2,
		backgroundColor: "#fff",
		marginHorizontal: 20,
	},
	boxAvatarArrow: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginHorizontal: 12,
	},
	moreOptions: {
		marginRight: 30,
	},
	boxArrowHeader: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		width: 100,
	},
	arrow: {
		marginLeft: 12,
	},
});
