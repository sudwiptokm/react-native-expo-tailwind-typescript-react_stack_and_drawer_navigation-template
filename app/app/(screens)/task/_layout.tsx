import { Keyboard, SafeAreaView, TouchableWithoutFeedback } from "react-native";

import { Slot } from "expo-router";
import React from "react";

type Props = object;

const _layout = (props: Props) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} className="flex-1">
      <SafeAreaView style={{ flex: 1 }}>
        <Slot />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default _layout;
