import * as React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  StyleSheet,
} from "react-native";

export default class WriteStory extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <View style={styles.cont}>
        <Text style={styles.txt}>Read story screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    justifyContent: "center",
  },
  txt: {
    textAlign: "center",
  },
});
