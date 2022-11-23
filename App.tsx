import React from "react";
import { StyleSheet, View } from "react-native";
import PickerButton from "./src/components/Picker";

export default function App() {
  return (
    <View style={styles.container}>
      <PickerButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
