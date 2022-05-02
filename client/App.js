import { StyleSheet } from "react-native";
import { Provider } from "react-native-paper";
import Routes from "./routes";

export default function App() {
  return (
    <Provider>
      <Routes />
    </Provider>
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
