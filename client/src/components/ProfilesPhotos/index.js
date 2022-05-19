import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Dialog, Portal, Avatar } from "react-native-paper";
import DefaultAvatar from "../../assets/images/DefaultAvatar.png";

// Images
const Man1 = "https://imgur.com/UShnDqw.png";
const Man2 = "https://imgur.com/TA5yCDG.png";
const Man3 = "https://imgur.com/xKa916g.png";
const Man4 = "https://imgur.com/8AzpZ95.png";
const Man5 = "https://imgur.com/ghoUKTN.png";
const Woman1 = "https://imgur.com/qOemCDS.png";
const Woman2 = "https://imgur.com/XcR6HFm.png";
const Woman3 = "https://imgur.com/isdoOFG.png";
const Woman4 = "https://imgur.com/q0FeW1H.png";

export default function ProfilesPhotos({ profile }) {
	const [visible, setVisible] = useState(false);
	const [profilePhoto, setProfilePhoto] = useState(Man1);

	useEffect(() => {
		profile(profilePhoto);
	}, [profilePhoto]);

	const showDialog = () => setVisible(true);

	const hideDialog = () => setVisible(false);

	return (
		<View>
			<TouchableOpacity onPress={showDialog}>
				<Image source={{ uri: profilePhoto }} style={styles.img} />
			</TouchableOpacity>

			<Portal>
				<Dialog
					visible={visible}
					onDismiss={hideDialog}
					style={styles.dialogContent}
				>
					<Dialog.Title>Selecione a imagem</Dialog.Title>
					<View style={styles.containerAvatars}>
						<TouchableOpacity
							onPress={() => {
								setProfilePhoto(Man1);
								hideDialog();
							}}
						>
							<Avatar.Image
								style={styles.avatar}
								size={100}
								source={{ uri: Man1 }}
							/>
						</TouchableOpacity>

						<TouchableOpacity
							onPress={() => {
								setProfilePhoto(Man2);
								hideDialog();
							}}
						>
							<Avatar.Image
								style={styles.avatar}
								size={100}
								source={{ uri: Man2 }}
							/>
						</TouchableOpacity>

						<TouchableOpacity
							onPress={() => {
								setProfilePhoto(Man3);
								hideDialog();
							}}
						>
							<Avatar.Image
								style={styles.avatar}
								size={100}
								source={{ uri: Man3 }}
							/>
						</TouchableOpacity>

						<TouchableOpacity
							onPress={() => {
								setProfilePhoto(Man4);
								hideDialog();
							}}
						>
							<Avatar.Image
								style={styles.avatar}
								size={100}
								source={{ uri: Man4 }}
							/>
						</TouchableOpacity>

						<TouchableOpacity
							onPress={() => {
								setProfilePhoto(Man5);
								hideDialog();
							}}
						>
							<Avatar.Image
								style={styles.avatar}
								size={100}
								source={{ uri: Man5 }}
							/>
						</TouchableOpacity>

						<TouchableOpacity
							onPress={() => {
								setProfilePhoto(Woman1);
								hideDialog();
							}}
						>
							<Avatar.Image
								style={styles.avatar}
								size={100}
								source={{ uri: Woman1 }}
							/>
						</TouchableOpacity>

						<TouchableOpacity
							onPress={() => {
								setProfilePhoto(Woman2);
								hideDialog();
							}}
						>
							<Avatar.Image
								style={styles.avatar}
								size={100}
								source={{ uri: Woman2 }}
							/>
						</TouchableOpacity>

						<TouchableOpacity
							onPress={() => {
								setProfilePhoto(Woman3);
								hideDialog();
							}}
						>
							<Avatar.Image
								style={styles.avatar}
								size={100}
								source={{ uri: Woman3 }}
							/>
						</TouchableOpacity>

						<TouchableOpacity
							onPress={() => {
								setProfilePhoto(Woman4);
								hideDialog();
							}}
						>
							<Avatar.Image
								style={styles.avatar}
								size={100}
								source={{ uri: Woman4 }}
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
		justifyContent: "flex-start",
		height: 530,
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
		backgroundColor: "white",
	},
});
