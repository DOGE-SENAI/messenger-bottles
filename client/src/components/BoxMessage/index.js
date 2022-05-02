import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function BoxMessages({ from, sender, message }) {
  return (
    <View style={styles.containerContact(sender)}>
      <Text style={[styles.message, sender ? styles.recipient : styles.sender]}>
        {message}
      </Text>
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
});
