import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";

import { ThemedContainer } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";

export default function Index() {
  return (
    <View style={styles.container}>
      <ThemedContainer>Theme</ThemedContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
  },
  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#fff",
  },
});
