import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  StatusBar as SB,
  Dimensions,
  Alert 
} from "react-native";
import { TransItem, Type } from "./src/components/TransItem";
import { WavyHeader } from "./src/components/WavyHeader";
import { NewTrans } from "./src/components/NewTrans";

interface IItem {
  value: string;
  id: number;
}

export default function App() {
  const [itemList, SetItemList] = useState<IItem[]>([]);

  const onItemAdd = (data:String) => {
      SetItemList([
        ...itemList,
        {
          value: data,
          id: Math.random(),
        } as IItem,
      ]);}

  const onItemDelete = (id:number) => {
    Alert.alert('Alerta', 'Esta seguro de borrar el elemento?', [
      {
        text: 'Cancelar',
        onPress: () => {},
        style: 'cancel',
      },
      { text: 'OK', onPress: () => SetItemList(itemList.filter((item) => item.id !== id)) },
    ]);
    
  }

  return (
    <View style={styles.container}>
      <WavyHeader
        customStyles={{
          position: "absolute",
          width: Dimensions.get("window").width,
        }}
      />
      <NewTrans onPress={onItemAdd}/>
      <View style={{flex: 1}}>
        <FlatList
          contentContainerStyle={{ padding: 20, marginTop: 10 }}
          data={itemList}
          renderItem={({ item }) => (
            <TransItem item={item} type={Type.income} onPress={onItemDelete} />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 0,
    margin: 0,
    marginTop: SB.currentHeight ?? 20,
    backgroundColor: "#eee",
    flex: 1
  },
});
