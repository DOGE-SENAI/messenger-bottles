import { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Dialog, Portal, Avatar } from "react-native-paper";
import DefaultAvatar from "../../assets/images/DefaultAvatar.png";
import Man1 from "../../assets/profiles/man1.png";
import Man2 from "../../assets/profiles/man2.png";
import Man3 from "../../assets/profiles/man3.png";
import ManS1 from "../../assets/profiles/manSurprise1.png";
import ManS2 from "../../assets/profiles/manSurprise2.png";
import Woman1 from "../../assets/profiles/woman1.png";
import Woman2 from "../../assets/profiles/woman2.png";
import Woman3 from "../../assets/profiles/woman3.png";
import WomanS2 from "../../assets/profiles/womanSurprise2.png";

export default function ProfilesPhotos() {
	const [visible, setVisible] = useState(false);
	const [profilePhoto, setProfilePhoto] = useState(DefaultAvatar)

	const showDialog = () => setVisible(true);

	const hideDialog = () => setVisible(false);

	return (
		<View>
			<TouchableOpacity onPress={showDialog}>
				<Image source={profilePhoto} style={styles.img} />
			</TouchableOpacity>

			<Portal >
				<Dialog
					visible={visible}
					onDismiss={hideDialog}
					style={styles.dialogContent}
				>
					<Dialog.Title>Selecione a imagem </Dialog.Title>
					<View style={styles.containerAvatars}>
						<TouchableOpacity onPress={() => { setProfilePhoto(Man1); hideDialog() }}>
							<Avatar.Image
								style={styles.avatar}
								size={100}
								source={Man1}
							/>
						</TouchableOpacity>

						<TouchableOpacity onPress={() => { setProfilePhoto(Man2); hideDialog() }}>
							<Avatar.Image
								style={styles.avatar}
								size={100}
								source={Man2}
							/>
						</TouchableOpacity>

						<TouchableOpacity onPress={() => { setProfilePhoto(Man3); hideDialog() }}>
							<Avatar.Image
								style={styles.avatar}
								size={100}
								source={Man3}
							/>
						</TouchableOpacity>

						<TouchableOpacity onPress={() => { setProfilePhoto(ManS1); hideDialog() }}>
							<Avatar.Image
								style={styles.avatar}
								size={100}
								source={ManS1}
							/>
						</TouchableOpacity>

						<TouchableOpacity onPress={() => { setProfilePhoto(ManS2); hideDialog() }}>
							<Avatar.Image
								style={styles.avatar}
								size={100}
								source={ManS2}
							/>
						</TouchableOpacity>

						<TouchableOpacity onPress={() => { setProfilePhoto(Woman1); hideDialog() }}>
							<Avatar.Image
								style={styles.avatar}
								size={100}
								source={Woman1}
							/>
						</TouchableOpacity>

						<TouchableOpacity onPress={() => { setProfilePhoto(Woman2); hideDialog() }}>
							<Avatar.Image
								style={styles.avatar}
								size={100}
								source={Woman2}
							/>
						</TouchableOpacity>

						<TouchableOpacity onPress={() => { setProfilePhoto(Woman3); hideDialog() }}>
							<Avatar.Image
								style={styles.avatar}
								size={100}
								source={Woman3}
							/>
						</TouchableOpacity>

						<TouchableOpacity onPress={() => { setProfilePhoto(WomanS2); hideDialog() }}>
							<Avatar.Image
								style={styles.avatar}
								size={100}
								source={WomanS2}
							/>
						</TouchableOpacity>
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
		justifyContent: "center",
		height: 650,
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
		backgroundColor: "white"
	},
});
