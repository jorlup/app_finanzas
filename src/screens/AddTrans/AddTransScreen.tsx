import { NewTrans } from "@Components/NewTrans";
import { TransItem, Type } from "@Components/TransItem";
import { WavyHeader } from "@Components/WavyHeader";
import { StatusBar } from "expo-status-bar";
import React, { FC, useState } from "react";
import { Alert, Dimensions, FlatList, StyleSheet, View, StatusBar as SB, } from "react-native";

export { Type } from "@Components/TransItem";

interface IItem {
    value: string;
    id: number;
  }

  //TODO: mejorar esto
  interface IProps {
    route: any;
  };

export const AddTransScreen: FC<IProps> = ({route:{params:{type}}}) => {
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
      <NewTrans onPress={onItemAdd} />
      <View style={{ flex: 1 }}>
        <FlatList
          contentContainerStyle={{ padding: 20, marginTop: 10 }}
          data={itemList}
          renderItem={({ item }) => (
            <TransItem item={item} type={type} onPress={onItemDelete} />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      padding: 0,
      margin: 0,
      marginTop: SB.currentHeight ?? 20,
      backgroundColor: "#eee",
      flex: 1
    },
  });
