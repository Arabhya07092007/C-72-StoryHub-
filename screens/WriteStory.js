import * as React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
  ToastAndroid,
} from "react-native";
import { Header } from "react-native-elements";
import db from "../config";
import firebase from "firebase";

export default class ReadStory extends React.Component {
  constructor() {
    super();
    this.state = {
      storyTitle: "",
      author: "",
      story: "",
    };
  }

  submitStory = () => {
    if (this.state.storyTitle && this.state.story && this.state.author !== "") {
      ToastAndroid.showWithGravityAndOffset(
        "Your response has been recorded!",
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
        25,
        50
      );

      db.collection("Stories").add({
        storyTitle: this.state.storyTitle,
        author: this.state.author,
        story: this.state.story,
      });

      this.setState({
        storyTitle: "",
        author: "",
        story: "",
      });
    }
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.cont} behavior="padding" enabled>
        <Header
          backgroundColor="#8C76A4"
          centerComponent={{
            text: "Write story",
            style: { fontSize: 30, color: "#F9F5F3", fontWeight: "bold" },
          }}
        />

        <TextInput
          style={[styles.txt, { padding: 5 }]}
          underLineColorAndroid="transparent"
          placeholder="Title"
          placeholderTextColor="#3C5BA6"
          value={this.state.storyTitle}
          onChangeText={(text) => {
            this.setState({ storyTitle: text });
          }}
        />

        <TextInput
          style={[styles.txt, { padding: 5 }]}
          underLineColorAndroid="transparent"
          placeholder="Author"
          placeholderTextColor="#3C5BA6"
          value={this.state.author}
          onChangeText={(text) => {
            this.setState({ author: text });
          }}
        />

        <TextInput
          style={[styles.txt, { textAlignVertical: "top", padding: 5 }]}
          multiline={true}
          underLineColorAndroid="transparent"
          placeholder="Story"
          placeholderTextColor="#3C5BA6"
          value={this.state.story}
          onChangeText={(text) => {
            this.setState({ story: text });
          }}
        />

        <TouchableOpacity style={styles.btn} onPress={this.submitStory}>
          <Text style={styles.btnText}>Submit</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  cont: {
    flex: 1,
  },
  txt: {
    borderBottomWidth: 2,
    // borderRadius: 10,
    margin: 20,
    fontSize: 30,
  },
  btn: {
    width: "50%",
    backgroundColor: "lightgreen",
    borderRadius: 5,
    justifyContent: "center",
    alignSelf: "center",
  },
  btnText: {
    fontSize: 25,
    padding: 10,
    textAlign: "center",
  },
});
