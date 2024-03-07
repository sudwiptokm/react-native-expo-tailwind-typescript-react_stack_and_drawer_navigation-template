import { MaterialIcons } from "@expo/vector-icons";
import { Slot, router } from "expo-router";
import React from "react";
import { Pressable, SafeAreaView } from "react-native";

type Props = object;

const Layout = (props: Props) => {
  return (
    <SafeAreaView>
      <Pressable onPress={() => router.back()}>
        <MaterialIcons name="chevron-left" size={32} color="white" />
      </Pressable>
      <Slot />
    </SafeAreaView>
  );
};

export default Layout;
