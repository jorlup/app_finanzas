import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
} from "react-native";
import {TransItem} from "@Components/TransItem";

interface IItem {
  value: string;
  id: number;
}

export default function App() {
  const [textInput, SetTextInput] = useState<string>("");
  const [itemList, SetItemList] = useState<IItem[]>([]);

  const handleOnPress = () => {
    if (textInput.length > 0) {
      SetTextInput("");
      SetItemList([
        ...itemList,
        {
          value: textInput,
          id: Math.random(),
        } as IItem,
      ]);
    }
  };

  const handleOnChangeText = (text: string): void => {
    SetTextInput(text);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={handleOnChangeText}
          value={textInput}
        />
        <Button onPress={handleOnPress} title="Add" color="#841584" />
      </View>
      <View>
        <FlatList
          data={itemList}
          renderItem={({ item }) => (<TransItem item={item} onPress={undefined} />)}
          keyExtractor={item => item.id.toString()}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 50 },
  inputContainer: {
    flexDirection: "row",
  },
  input: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    flex: 1,
    marginRight: 10,
  },
  item: {
    borderColor: "black",
    borderWidth: 1,
    marginVertical: 10,
    padding: 10,
  },
});
