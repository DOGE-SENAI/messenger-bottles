import React, { useEffect, useRef, useState } from "react";
import {
	ScrollView,
	StyleSheet,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import IconEmoji from "react-native-vector-icons/Entypo";
import IconSend from "react-native-vector-icons/Feather";
import { Divider } from "react-native-paper";
import Header from "../../components/Header";
import EmojiPicker from "rn-emoji-keyboard";
import BoxMessages from "../../components/BoxMessage";
import api from "../../service/api";

const Chat = ({ route }) => {
	const scrollViewRef = useRef();
	const [isOpenEmojis, setIsOpenEmojis] = useState(false);
	const chatUser = route.params.paramKey;

	// const fakeData = [
	//   {
	//     id: 1,
	//     create_at: "12/12/2012",
	//     from: chatUser,
	//     message: "Hello there!",
	//   },
	//   {
	//     id: 2,
	//     create_at: "14/12/2012",
	//     from: "Steve",
	//     message: "Hello! How are you?",
	//   },
	//   {
	//     id: 3,
	//     create_at: "12/12/2022",
	//     from: "Yun Li",
	//     message: "?????",
	//   },
	//   {
	//     id: 4,
	//     create_at: "12/12/2012",
	//     from: chatUser,
	//     message: "I'm good. And you?",
	//   },
	//   {
	//     id: 5,
	//     create_at: "12/12/2012",
	//     from: "Steve",
	//     message: "yep",
	//   },
	// ];

	const [message, setMessage] = useState("");
	const [messageList, setMessageList] = useState([]);
	// const [countId, setCountId] = useState(fakeData.length + 1);

	useEffect(() => {
		api.get("/list-message").then(({ data }) => setMessageList(data.messages));
		console.log(messageList);
	}, []);

	const handleEmoji = (emoji) => {
		setMessage((msg) => msg + emoji.emoji);
	};

	const sendMessage = () => {
		// setCountId((oldCount) => oldCount + 1);
		// messageList.push({
		//   id: countId,
		//   create_at: "12/12/2012",
		//   from: chatUser,
		//   message: message,
		// });
		setMessage("");
	};

	const clearMessages = (clear) => {
		clear && setMessageList([]);
	};

	return (
		<View style={styles.containerMain}>
			<Header type="chat-geral" user={chatUser} clearMessages={clearMessages} />

			<ScrollView
				ref={scrollViewRef}
				onContentSizeChange={() => {
					scrollViewRef.current.scrollToEnd({ animated: true });
				}}
				style={styles.scrollview}
				contentContainerStyle={styles.containerMessages}
				showsVerticalScrollIndicator={false}
			>
				{messageList.map(({ id, user_id: from, text }) => {
					return (
						<BoxMessages
							key={id}
							idMessage={id}
							from={from}
							message={text}
							sender={from === chatUser ? false : true}
						/>
					);
				})}
			</ScrollView>

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
						value={message}
						onChangeText={(text) => setMessage(text)}
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

						<TouchableOpacity onPress={sendMessage}>
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
		height: "100%",
		backgroundColor: "#fff",
	},
	scrollview: {
		width: "95%",
		height: "100%",
		marginTop: 5,
		marginBottom: 5,
	},
	containerMessages: {
		justifyContent: "center",
		alignItems: "center",
	},
	dialogBox: {
		zIndex: 3,
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
	contentDialog: {
		width: "100%",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
	},
	btnClose: {
		width: "100%",
		alignItems: "flex-end",
		justifyContent: "flex-end",
	},
	updateMessage: {
		borderWidth: 1,
		fontSize: 18,
		padding: 5,
	},
	btnDelete: {
		borderWidth: 1,
		borderColor: "red",
	},
});

export default Chat;
