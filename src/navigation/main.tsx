import React from "react";
import { AddTransScreen, Type } from "@Screens/AddTrans/AddTransScreen";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { BienvenidaScreen } from "@Screens/Bienvenida/BienvenidaScreen";

const Tab = createMaterialBottomTabNavigator();

export default function MainNav() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#f0edf6"
      inactiveColor="#3e2465"
      barStyle={{ backgroundColor: "#694fad"}}
    >
      <Tab.Screen name="Home" component={BienvenidaScreen}
      options={{
        tabBarColor: "#694fad",
        // tabBarIcon: ({ color }) => (
        //   // <MaterialCommunityIcons name="account" color={color} size={26} />
        // ),
      }}
       />
      <Tab.Screen name="Bill" component={AddTransScreen} 
      initialParams={{ type: Type.bill }}
      options={{
        tabBarColor: "red",
      }}
      />
      <Tab.Screen name="Income" component={AddTransScreen} 
      initialParams={{ type: Type.income }}
      options={{
        tabBarColor: "red",
      }}
      />
    </Tab.Navigator>
  );
}