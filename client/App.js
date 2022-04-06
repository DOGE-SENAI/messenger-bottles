import { StyleSheet } from "react-native";
import { Provider } from "react-native-paper";
import Routes from "./routes";
import ConfigUser from "./src/pages/ConfigUser";
import Config from "./src/pages/ConfigUser";
import SignIn from "./src/pages/SignIn";
import SignUp from "./src/pages/SignUp";
import Welcome from "./src/pages/Welcome";

export default function App() {
  return (
    <Provider>
      <ConfigUser />
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
