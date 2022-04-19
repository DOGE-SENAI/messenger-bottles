import React from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { Divider } from "react-native-paper";
import Header from "../../components/Header";

const Chat = () => {
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
						placeholder="Sua Mensagem"
						selectionColor={"rgba(0,0,0,0.5)"}
					/>

					<View style={styles.actionsMessages}>
						<Text>i</Text>

						<Text>b</Text>
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
	},
});

export default Chat;
