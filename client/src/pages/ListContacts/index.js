import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import Contact from "../../components/Contact";
import Header from "../../components/Header";
import { FAB } from "react-native-paper";

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

      <FAB
        style={styles.fab}
        icon="plus"
        animated
        onPress={() => navigation.navigate("chat")}
      />
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
  fab: {
    position: "absolute",
    margin: 16,
    right: 20,
    bottom: 20,
    width: 60,
    height: 60,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#7DBDED",
  },
});

export default ListContacts;
