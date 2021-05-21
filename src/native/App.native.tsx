import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Logo from "../assets/logo.native";

import Button from "../components/Button";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Text>Left</Text>
      </View>
      <View style={styles.right}>
        <Logo width={100} height={100} />
        <Text>Open up App.tsx to start working on your app! FFFFF</Text>
        <Button />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "row",
    flexGrow: 1,
  },
  left: {
    flex: 0.5,
    backgroundColor: "#fff7ff",
    alignItems: "center",
    justifyContent: "center",
  },
  right: {
    flex: 1,
    backgroundColor: "#a094b7",
    alignItems: "center",
    justifyContent: "center",
  },
});
