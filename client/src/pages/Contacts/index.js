import React from "react";
import { StyleSheet, View } from "react-native";
import Header from "../../components/Header";

const Contact = () => {
  return (
    <View style={styles.containerMain}>
      <Header type="simple" />
    </View>
  );
};

const styles = StyleSheet.create({
  containerMain: {
    display: "flex",
    width: "100%",
    alignItems: "center",
  },
});

export default Contact;
