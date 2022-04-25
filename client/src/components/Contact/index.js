import { StyleSheet, Text, View } from "react-native";
import { Avatar } from "react-native-paper";
import Woman1 from "../../assets/profiles/woman1.png";

export default function Contact() {
  return (
    <View style={styles.containerContact}>
      <Avatar.Image style={styles.avatar} size={70} source={Woman1} />

      <View style={styles.infosContact}>
        <Text>Fulano</Text>
        <Text>+1</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerContact: {
    flexDirection: "row",
  },
  avatar: {
    backgroundColor: "white",
  },
  infosContact: {
    width: "100%",
    backgroundColor: "red",
  },
});
