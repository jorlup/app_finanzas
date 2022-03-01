import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import React from "react";
import { View, Image, TouchableOpacity} from "react-native";
import {styles} from "./styles";
import { FontText } from "../FontText";

const imgBill = require("../../../assets/bill.png");
const imgIncome = require("../../../assets/income.png");

export enum Type{
  bill = "bill",
  income = "income"
}

export function TransItem({ item, type, onPress }: { item: any; onPress: any; type: Type }) {
  return (
    <View style={styles.transItem}>
      <Image style={styles.imgItem} source={(type == Type.bill) ? imgBill : imgIncome}/>
      <View style={{flex:1}}>
        <FontText style={styles.desItem}> {item?.value} </FontText>
        <FontText style={styles.dateItem}> {item?.value} </FontText>
      </View>
      <TouchableOpacity onPress={()=> onPress(item.id)}>
        <FontAwesomeIcon icon={faTrashCan} style={{marginRight:10}} color="red" />
      </TouchableOpacity>
    </View>
  );
}


