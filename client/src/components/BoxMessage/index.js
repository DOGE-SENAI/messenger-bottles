import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function BoxMessages({ from, sender, message }) {
  return (
    <View style={styles.containerContact}>
      <Text style={[styles.username, sender ? styles.a : styles.b]}>
        {message}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  containerContact: {
    flexDirection: "row",
    borderRadius: 20,
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
  a: {
    backgroundColor: "yellow",
  },
  b: {
    backgroundColor: "red",
  },
});
