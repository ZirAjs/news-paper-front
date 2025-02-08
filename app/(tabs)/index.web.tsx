import { Text, View, StyleSheet, FlatList } from "react-native";
import { Link } from "expo-router";

import { ThemedContainer } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedDivider } from "@/components/ThemedDivider";

export default function Index() {
  return (
    <ThemedContainer style={styles.container}>
      <ThemedContainer>
        <ThemedText type="title">최신논문</ThemedText>
        <ThemedDivider />
        <FlatList
          data={[
            { title: "article1", description: "keyword1, keyword2, ..." },
            { title: "article2", description: "keyword1, keyword2, ..." },
          ]}
          renderItem={({ item }) => (
            <ThemedContainer>
              <ThemedText type="subtitle">{item.title}</ThemedText>
              <ThemedText type="defaultSemiBold">{item.description}</ThemedText>
            </ThemedContainer>
          )}
        />
      </ThemedContainer>
      <ThemedContainer>
        <ThemedText type="title">ARXIV</ThemedText>
        <ThemedDivider />
        <FlatList
          data={[
            { title: "article1", description: "keyword1, keyword2, ..." },
            { title: "article2", description: "keyword1, keyword2, ..." },
          ]}
          renderItem={({ item }) => (
            <ThemedContainer>
              <ThemedText type="subtitle">{item.title}</ThemedText>
              <ThemedText type="defaultSemiBold">{item.description}</ThemedText>
            </ThemedContainer>
          )}
        />
      </ThemedContainer>
    </ThemedContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  button: {
    fontSize: 20,
    textDecorationLine: "underline",
  },
  news_box: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
});
