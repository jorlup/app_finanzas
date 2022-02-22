import AppLoading from "expo-app-loading";
import {
  useFonts,
  Roboto_100Thin,
  Roboto_100Thin_Italic,
  Roboto_300Light,
  Roboto_300Light_Italic,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_500Medium,
  Roboto_500Medium_Italic,
  Roboto_700Bold,
  Roboto_700Bold_Italic,
  Roboto_900Black,
  Roboto_900Black_Italic,
} from "@expo-google-fonts/roboto";
import { AddTransScreen } from "@Screens/AddTrans/AddTransScreen";
import { useState } from "react";
import { BienvenidaScreen } from "@Screens/Bienvenida/BienvenidaScreen";

enum Screen {
  AddTrans = "AddTrans",
  Bienvenida = "Bienvenida",
}

export default function App() {
  const [screen, setScreen] = useState(Screen.Bienvenida);

  let [fontsLoaded] = useFonts({
    Roboto_100Thin,
    Roboto_100Thin_Italic,
    Roboto_300Light,
    Roboto_300Light_Italic,
    Roboto_400Regular,
    Roboto_400Regular_Italic,
    Roboto_500Medium,
    Roboto_500Medium_Italic,
    Roboto_700Bold,
    Roboto_700Bold_Italic,
    Roboto_900Black,
    Roboto_900Black_Italic,
  });

  const onClick = () => {setScreen(Screen.AddTrans)};

  // Espera por carga de fuentes
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  if (screen === Screen.AddTrans) {
    return <AddTransScreen />;
  } else if (screen === Screen.Bienvenida) {
    return <BienvenidaScreen onClick={onClick}/>;
  }
}
