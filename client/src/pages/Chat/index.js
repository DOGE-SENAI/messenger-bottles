import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import IconEmoji from "react-native-vector-icons/Entypo";
import IconSend from "react-native-vector-icons/Feather";
import { Divider } from "react-native-paper";
import Header from "../../components/Header";
import EmojiPicker from "rn-emoji-keyboard";
import BoxMessages from "../../components/BoxMessage";

const Chat = () => {
  const [isOpenEmojis, setIsOpenEmojis] = useState(false);
  const chatUser = "Herobrine";
  const handleEmoji = (emoji) => {
    console.log(emoji);
  };

  const fakeData = [
    {
      id: 1,
      create_at: "12/12/2012",
      from: "Herobrine",
      message: "Hello there!",
    },
    {
      id: 2,
      create_at: "14/12/2012",
      from: "Steve",
      message: "Hello! How are you?",
    },
    {
      id: 3,
      create_at: "12/12/2022",
      from: "Steve",
      message: "?????",
    },
    {
      id: 4,
      create_at: "12/12/2012",
      from: "Herobrine",
      message: "asdasdsa",
    },
    {
      id: 5,
      create_at: "12/12/2012",
      from: "Herobrine",
      message: "asdasdsa",
    },
    {
      id: 6,
      create_at: "12/12/2012",
      from: "Herobrine",
      message: "asdasdsa",
    },
    {
      id: 7,
      create_at: "12/12/2012",
      from: "Herobrine",
      message: "asdasdsa",
    },
    {
      id: 8,
      create_at: "12/12/2012",
      from: "Herobrine",
      message: "asdasdsa",
    },
    {
      id: 9,
      create_at: "12/12/2012",
      from: "Herobrine",
      message: "asdasdsa",
    },
    {
      id: 10,
      create_at: "12/12/2012",
      from: "Herobrine",
      message: "asdasdsa",
    },
    {
      id: 11,
      create_at: "12/12/2012",
      from: "Herobrine",
      message: "asdasdsa",
    },
    {
      id: 12,
      create_at: "12/12/2012",
      from: "Herobrine",
      message: "asdasdsa",
    },
    {
      id: 13,
      create_at: "12/12/2012",
      from: "Herobrine",
      message: "asdasdsa",
    },
    {
      id: 14,
      create_at: "12/12/2012",
      from: "Herobrine",
      message: "asdasdsa",
    },
    {
      id: 15,
      create_at: "12/12/2012",
      from: "Herobrine",
      message: "asdasdsa",
    },
    {
      id: 16,
      create_at: "12/12/2012",
      from: "Herobrine",
      message: "asdasdsa",
    },
    {
      id: 17,
      create_at: "12/12/2012",
      from: "Herobrine",
      message: "asdasdsa",
    },
    {
      id: 18,
      create_at: "12/12/2012",
      from: "Herobrine",
      message: "asdasdsa",
    },
    {
      id: 19,
      create_at: "12/12/2012",
      from: "Herobrine",
      message: "asdasdsa",
    },
  ];

  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  return (
    <View style={styles.containerMain}>
      <Header type="chat" />

      <ScrollView
        style={styles.scrollview}
        contentContainerStyle={styles.containerMessages}
      >
        {fakeData.map((message) => {
          return (
            <BoxMessages
              key={message.id}
              from={message.from}
              message={message.message}
              sender={message.from === chatUser ? false : true}
            />
          );
        })}
      </ScrollView>

      <View style={styles.containerSendMessage}>
        <Divider />

        <View style={styles.sendMessageOptions}>
          <TextInput
            style={styles.writeMessage}
            caretHidden={false}
            multiline={true}
            editable
            placeholder="Sua Mensagem"
            selectionColor={"rgba(0,0,0,0.5)"}
          />

          <View style={styles.actionsMessages}>
            <TouchableOpacity onPress={() => setIsOpenEmojis(true)}>
              <IconEmoji name="emoji-happy" size={24} color="#000" />
            </TouchableOpacity>
            <EmojiPicker
              onEmojiSelected={handleEmoji}
              open={isOpenEmojis}
              onClose={() => setIsOpenEmojis(false)}
            />

            <TouchableOpacity>
              <IconSend name="send" size={24} color="#000" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerMain: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
  },
  containerMessages: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  containerSendMessage: {
    width: "100%",
    height: 80,
    display: "flex",
    flexDirection: "column",
  },
  writeMessage: {
    flex: 1,
    height: "100%",
    fontSize: 18,
  },
  sendMessageOptions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 12,
    height: "100%",
    padding: 8,
  },
  actionsMessages: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 60,
    marginStart: 8,
  },
  scrollview: {
    width: "96%",
    height: "100%",
  },
});

export default Chat;
