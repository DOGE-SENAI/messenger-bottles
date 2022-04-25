import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button, StyleSheet, View } from "react-native";
import Contact from "../../components/Contact";
import Header from "../../components/Header";

const ListContacts = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.containerMain}>
      <Header type="simple" />

      <View style={styles.content}>
        <Contact />
      </View>
      {/* <Button title="chat page" onPress={() => navigation.navigate("chat")} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  containerMain: {
    display: "flex",
    width: "100%",
    alignItems: "center",
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
    width: "60%",
    marginTop: 20,
  },
});

export default ListContacts;
