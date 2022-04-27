import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Avatar } from "react-native-paper";
import Woman1 from "../../assets/profiles/woman1.png";

export default function Contact({ partner }) {
	const navigation = useNavigation();

	return (
		<TouchableOpacity
			style={styles.containerContact}
			onPress={() => navigation.navigate("chat")}
		>
			<Avatar.Image style={styles.avatar} size={75} source={Woman1} />
			<Text style={styles.username}>{partner}</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	containerContact: {
		flexDirection: "row",
		width: "100%",
		backgroundColor: "#F0F0F0",
		borderRadius: 40,
		margin: 8,
	},
	avatar: {
		backgroundColor: "white",
	},
	username: {
		fontSize: 20,
		textAlign: "center",
		alignSelf: "center",
		marginStart: 10,
	},
});
