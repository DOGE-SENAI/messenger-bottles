import { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Dialog, Portal, Avatar } from "react-native-paper";
import DefaultAvatar from "../../assets/images/DefaultAvatar.png";

export default function ProfilesPhotos() {
	const [visible, setVisible] = useState(false);

	const showDialog = () => setVisible(true);

	const hideDialog = () => setVisible(false);

	return (
		<View>
			<TouchableOpacity style={styles.img} onPress={showDialog}>
				<Image source={DefaultAvatar} />
			</TouchableOpacity>

			<Portal>
				<Dialog
					visible={visible}
					onDismiss={hideDialog}
					style={styles.dialogContent}
				>
					<Dialog.Title>Selecione a imagem </Dialog.Title>
					<View style={styles.containerAvatars}>
						<Avatar.Image
							style={styles.avatar}
							size={100}
							source={require("../../assets/profiles/man1.png")}
						/>
						<Avatar.Image
							style={styles.avatar}
							size={100}
							source={require("../../assets/profiles/man2.png")}
						/>
						<Avatar.Image
							style={styles.avatar}
							size={100}
							source={require("../../assets/profiles/man3.png")}
						/>
						<Avatar.Image
							style={styles.avatar}
							size={100}
							source={require("../../assets/profiles/manSurprise1.png")}
						/>
						<Avatar.Image
							style={styles.avatar}
							size={100}
							source={require("../../assets/profiles/manSurprise2.png")}
						/>
						<Avatar.Image
							style={styles.avatar}
							size={100}
							source={require("../../assets/profiles/woman1.png")}
						/>
						<Avatar.Image
							style={styles.avatar}
							size={100}
							source={require("../../assets/profiles/woman2.png")}
						/>
						<Avatar.Image
							style={styles.avatar}
							size={100}
							source={require("../../assets/profiles/woman3.png")}
						/>
						<Avatar.Image
							style={styles.avatar}
							size={100}
							source={require("../../assets/profiles/womanSurprise2.png")}
						/>
					</View>
				</Dialog>
			</Portal>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	avatar: {
		backgroundColor: "white",
		margin: 5,
	},
	dialogContent: {
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "flex-start",
		height: 500,
	},
	containerAvatars: {
		width: "95%",
		flexDirection: "row",
		flexWrap: "wrap",
		alignItems: "center",
		justifyContent: "center",
	},
	img: {
		width: 100,
		height: 100,
		borderRadius: 50,
	},
});
