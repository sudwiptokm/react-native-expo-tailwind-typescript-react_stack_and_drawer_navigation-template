import { Slot, router } from "expo-router";
import {
  Keyboard,
  Pressable,
  SafeAreaView,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import { MaterialIcons } from "@expo/vector-icons";
import React from "react";

type Props = object;

const Layout = (props: Props) => {
  // const route = useRouteInfo();
  // console.log({ route: route.segments });

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} className="flex-1">
      <SafeAreaView className="flex-1">
        <View className="flex-row items-start justify-start mb-6">
          <Pressable
            onPress={() => router.back()}
            className="items-center justify-center"
          >
            <MaterialIcons name="chevron-left" size={32} color="white" />
          </Pressable>
        </View>
        <View className="flex-1">
          <Slot />
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default Layout;
