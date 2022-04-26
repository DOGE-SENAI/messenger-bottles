import React, { useState } from "react";
import {
	ScrollView,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import IconEmoji from "react-native-vector-icons/Entypo";
import IconSend from "react-native-vector-icons/Feather";
import { Divider } from "react-native-paper";
import Header from "../../components/Header";
import EmojiPicker from "rn-emoji-keyboard";

const fakeData = [
	{
		id: 1,
		create_at: "12/12/2012",
		from: "Herobrine",
		message: "Hello there!",
	},
	{
		id: 2,
		create_at: "14/12/2012",
		from: "Steve",
		message: "Hello! How are you?",
	},
];

const Chat = () => {
	const [isOpenEmojis, setIsOpenEmojis] = useState(false);
	const handleEmoji = (emoji) => {
		console.log(emoji);
	};

	const [message, setMessage] = useState("");
	const [messageList, setMessageList] = useState([]);

	return (
		<View style={styles.containerMain}>
			<Header type="chat" />

			<View style={styles.containerMessages}>
				<Text>Messages</Text>
			</View>

			<View style={styles.containerSendMessage}>
				<Divider />

				<View style={styles.sendMessageOptions}>
					<TextInput
						style={styles.writeMessage}
						caretHidden={false}
						multiline={true}
						editable
						placeholder="Sua Mensagem"
						selectionColor={"rgba(0,0,0,0.5)"}
					/>

					<View style={styles.actionsMessages}>
						<TouchableOpacity onPress={() => setIsOpenEmojis(true)}>
							<IconEmoji name="emoji-happy" size={24} color="#000" />
						</TouchableOpacity>
						<EmojiPicker
							onEmojiSelected={handleEmoji}
							open={isOpenEmojis}
							onClose={() => setIsOpenEmojis(false)}
						/>

						<TouchableOpacity>
							<IconSend name="send" size={24} color="#000" />
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	containerMain: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		flex: 1,
		width: "100%",
	},
	containerMessages: {
		flex: 1,
	},
	containerSendMessage: {
		width: "100%",
		height: 80,
		display: "flex",
		flexDirection: "column",
	},
	writeMessage: {
		flex: 1,
		height: "100%",
		fontSize: 18,
	},
	sendMessageOptions: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginHorizontal: 12,
		height: "100%",
		padding: 8,
	},
	actionsMessages: {
		flexDirection: "row",
		justifyContent: "space-between",
		width: 60,
		marginStart: 8,
	},
});

export default Chat;
