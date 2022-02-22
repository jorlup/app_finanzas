import { FontText } from "@Components/FontText";
import { WavyHeader } from "@Components/WavyHeader";
import React, { FC } from "react";
import { Button, Dimensions, StyleSheet, View } from "react-native";

interface IProp {
  onClick: () => void;
}

export const BienvenidaScreen: FC<IProp> = ({ onClick }) => {
  return (
    <View style={style.contenedor}>
      <WavyHeader
        customStyles={{
          position: "absolute",
          width: Dimensions.get("window").width,
        }}
      />
      <FontText style={style.textoBienvenida}>Bienvenido...</FontText>
      <Button title="Agregar Transaccion" onPress={onClick} />
    </View>
  );
};

const style = StyleSheet.create({
  contenedor: {
    flex: 1,
    alignItems: "center",
    //justifyContent: "center",
    padding: 60,
  },
  textoBienvenida: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
    marginVertical: 50,
  },
});
