import React from "react";
import {
    Text,
    View,
  } from "react-native";

export function TransItem({item, onPress}: {item: any, onPress: any}) {
  return (
    <View>
      <Text> {item?.value} </Text>
    </View>
  );
}
