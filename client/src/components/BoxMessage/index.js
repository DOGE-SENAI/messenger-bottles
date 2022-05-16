import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Avatar, IconButton } from "react-native-paper";

const Man2 = "https://imgur.com/qOemCDS.png";

export default function BoxMessages({ from, sender, message, idMessage }) {
  const [butttonDelete, setButttonDelete] = useState("none");

  return (
    <>
      <View style={styles.containerContact(sender)}>
        <View style={styles.contentMessage}>
          <View style={styles.userMessage(sender)}>
            {sender && (
              <Avatar.Image
                size={50}
                style={styles.avatar}
                source={{ uri: Man2 }}
              />
            )}

            <Text style={styles.users}>{from}</Text>

            {!sender && (
              <Avatar.Image
                size={50}
                style={styles.avatar}
                source={{ uri: Man2 }}
              />
            )}
          </View>

          <TouchableOpacity
            onPress={() => setButttonDelete("none")}
            onLongPress={() => {
              if (!sender) setButttonDelete("flex");
            }}
          >
            <Text
              style={[
                styles.message,
                sender ? styles.recipient : styles.sender,
              ]}
            >
              {message}
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <IconButton
        icon="broom"
        style={[styles.btnDelete, { display: butttonDelete }]}
        onPress={() => {
          console.log(idMessage);
          setButttonDelete("none");
        }}
      />
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
  recipient: {
    backgroundColor: "#000000",
    color: "#ffffff",
  },
  avatar: {
    backgroundColor: "white",
    bottom: -14,
    zIndex: 1,
  },

  btnDelete: {
    borderWidth: 1,
    borderColor: "#000",
  },
});
