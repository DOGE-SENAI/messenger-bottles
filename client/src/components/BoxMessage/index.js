import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Avatar } from "react-native-paper";

const Man2 = "https://imgur.com/qOemCDS.png";

export default function BoxMessages({ from, sender, message }) {
	const username1 = "Yun Li";
	const username2 = "Biffe";

	return (
		<View style={styles.containerContact(sender)}>
			<View style={styles.contentMessage}>
				{sender && (
					<View style={styles.userMessage2}>
						<Avatar.Image
							size={50}
							style={styles.avatar}
							source={{ uri: Man2 }}
						/>

						<Text style={styles.users}>{username2}</Text>
					</View>
				)}

				{!sender && (
					<View style={styles.userMessage1}>
						<Text style={styles.users}>{username1}</Text>

						<Avatar.Image
							size={50}
							style={[styles.avatar, styles.shadowProp]}
							source={{ uri: Man2 }}
						/>
					</View>
				)}
				<Text
					style={[styles.message, sender ? styles.recipient : styles.sender]}
				>
					{message}
				</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	containerContact(directionMessage) {
		return {
			flexDirection: "row",
			borderRadius: 20,
			margin: 8,
			width: "100%",
			justifyContent: directionMessage ? "flex-start" : "flex-end",
		};
	},
	contentMessage: {
		flexDirection: "column",
	},
	userMessage2: {
		flexDirection: "row",
		alignItems: "flex-end",
		justifyContent: "flex-start",
	},
	userMessage1: {
		flexDirection: "row",
		alignItems: "flex-end",
		justifyContent: "flex-end",
	},
	users: {
		fontSize: 16,
		margin: 4,
		marginRight: 6,
	},
	message: {
		fontSize: 20,
		textAlign: "left",
		alignSelf: "center",
		padding: 16,
		borderRadius: 16,
	},
	sender: {
		backgroundColor: "#7DBDED",
		color: "#000000",
	},
	recipient: {
		backgroundColor: "#000000",
		color: "#ffffff",
	},
	avatar: {
		backgroundColor: "white",
		bottom: -14,
		zIndex: 1,
	},
});
