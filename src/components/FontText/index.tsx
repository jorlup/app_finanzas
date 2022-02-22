import React, { FC } from "react";
import {Text, StyleSheet} from "react-native";

interface IProps {
  style?: object;
}

export const FontText: FC<IProps> = ({style, children}) => {
  return (<Text style={{...style,  ...styles.defaultText}}>{children}</Text>);
};

const styles = StyleSheet.create({
  defaultText: {
    fontFamily: 'Roboto_400Regular',
  },
});
