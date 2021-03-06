import { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Avatar, IconButton } from "react-native-paper";
import api from "../../service/api";
import DefaultAvatar from "../../assets/images/DefaultAvatar.png";

const Man2 = "https://imgur.com/qOemCDS.png";

export default function BoxMessages({ from, sender, message, idMessage }) {
	const [butttonDelete, setButttonDelete] = useState("none");

	const [profilePhoto, setProfilePhoto] = useState("");

	useEffect(() => {
		api.get("/user-list").then(({ data: { users } }) => {
			for (let i = 0; i < users.length; i++) {
				if (users[i].username === from) {
					setProfilePhoto(users[i].img);
				}
			}
		});
	}, []);

	const deleteMessage = () => {
		console.log(idMessage);
		api.delete("delete-message", {
			id: idMessage,
		});
	};

	return (
		<>
			<View style={styles.containerContact(sender)}>
				<View style={styles.contentMessage}>
					<View style={styles.userMessage(sender)}>
						{sender && (
							<Avatar.Image
								size={50}
								style={styles.avatar}
								source={profilePhoto ? { uri: profilePhoto } : DefaultAvatar}
							/>
						)}

						<Text style={styles.users}>{from}</Text>

						{!sender && (
							<Avatar.Image
								size={50}
								style={styles.avatar}
								source={profilePhoto ? { uri: profilePhoto } : DefaultAvatar}
							/>
						)}
					</View>

					<TouchableOpacity
						onPress={() => setButttonDelete("none")}
						onLongPress={() => {
							if (!sender) setButttonDelete("flex");
						}}
						disabled={sender ? true : false}
					>
						<Text
							style={[styles.message, sender ? styles.receiver : styles.sender]}
						>
							{message}
						</Text>
					</TouchableOpacity>
				</View>
			</View>

			<View style={[styles.boxBtn, { display: butttonDelete }]}>
				<IconButton
					icon="delete"
					color="#CF3C3C"
					style={[styles.btnDelete, { display: butttonDelete }]}
					onPress={() => {
						setButttonDelete("none");
						deleteMessage();
					}}
				/>
			</View>
		</>
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
	userMessage(sender) {
		return sender
			? {
					flexDirection: "row",
					alignItems: "flex-end",
					justifyContent: "flex-start",
			  }
			: {
					flexDirection: "row",
					alignItems: "flex-end",
					justifyContent: "flex-end",
			  };
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
	receiver: {
		backgroundColor: "#000000",
		color: "#ffffff",
	},
	avatar: {
		backgroundColor: "white",
		bottom: -14,
		zIndex: 1,
	},
	boxBtn: {
		width: "100%",
		justifyContent: "flex-end",
		alignItems: "flex-end",
	},
	btnDelete: {
		borderWidth: 1,
		borderColor: "#CF3C3C",
	},
});
