import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import Contact from "../../components/Contact";
import Header from "../../components/Header";

const ListContacts = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.containerMain}>
      <Header type="simple" />

      <ScrollView style={styles.scrollview}>
        <View style={styles.content}>
          <Contact partner="Fulano 1" />
          <Contact partner="Fulano 2" />
          <Contact partner="Fulano 3" />
          <Contact partner="Fulano 4" />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  containerMain: {
    display: "flex",
    width: "100%",
    height: "100%",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginTop: 20,
  },
  scrollview: {
    width: "80%",
  },
});

export default ListContacts;
