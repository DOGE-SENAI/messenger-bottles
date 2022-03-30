<<<<<<< HEAD
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Header from "../Header";

export default function Contact() {
  return (
    <View>
      <Header title="Chat" selfProfile={true} otherProfile={true} arrow={true}>
        asas
      </Header>

      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
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
});
=======
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Header from "../Header";

export default function Contact() {
  return (
    <View>
      <Header title="Chat" selfProfile={true} otherProfile={true} arrow={true}>
        asas
      </Header>

      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
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
});
>>>>>>> 3c035e3adcb022535fd8c9427c87c49e2127ebd5
