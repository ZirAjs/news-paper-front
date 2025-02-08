import { FlatList, TextInput } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { ThemedContainer } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { useState } from "react";

export default function List() {
  const [selectedSort, setSelectedSort] = useState();
  return (
    <ThemedContainer>
      <ThemedContainer style={{ flexDirection: "row" }}>
        <Picker
          selectedValue={selectedSort}
          onValueChange={(itemValue, itemIndex) => {
            setSelectedSort(itemValue);
          }}
        >
          <Picker.Item label="Recent" />
          <Picker.Item label="Publisher" />
        </Picker>
        <TextInput placeholder="Search" style={{ flex: 1 }} />
      </ThemedContainer>
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
  );
}
