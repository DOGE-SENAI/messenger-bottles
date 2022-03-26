import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Avatar from "../../assets/profiles/man1.png";

const Header = ({ type }) => {
	const userChat = "Herobrine";

	if (type === "simple") {
		return (
			<View style={styles.header}>
				<Text style={styles.title(type)}>Chat</Text>

				<Image style={styles.avatar} source={Avatar} />

				<StatusBar style="auto" />
			</View>
		);
	} else if (type === "chat") {
		return (
			<View style={styles.header}>
				<View style={styles.boxAvatarArrow}>
					<TouchableOpacity>
						<Icon name="chevron-left" size={24} color="#000" />
					</TouchableOpacity>

					<Image style={styles.avatar} source={Avatar} />

					<Text style={styles.title(type)}>{userChat}</Text>
				</View>

				<TouchableOpacity>
					<Icon
						style={styles.moreOptions}
						name="ellipsis-v"
						size={24}
						color="#000"
					/>
				</TouchableOpacity>
				<StatusBar style="auto" />
			</View>
		);
	}
};

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
});

export default Header;
