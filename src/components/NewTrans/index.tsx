import React, { FC } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

interface INewTransProps {
    onPress: (data:String) => void;
}

export const NewTrans: FC<INewTransProps> = ({onPress}) => {

  const [textInput, setTextInput] = React.useState<string>("");

  const handleOnPress = () => {
    if (textInput.length > 0) {
        onPress(textInput);
        setTextInput("");
    }
  };

  const handleOnChangeText = (text: string): void => {
    setTextInput(text);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        onChangeText={handleOnChangeText}
        value={textInput}
      />
      <Button onPress={handleOnPress} title="Add" color="#9c27b0" />
    </View>
  );
};

const styles = StyleSheet.create({
  NewTrans: {},
  inputContainer: {
    flexDirection: "row",
    padding:30,
  },
  input: {
    borderBottomColor: "#fff",
    color: "#fff",
    borderBottomWidth: 1.5,
    flex: 1,
    marginRight: 20,
  },
});
