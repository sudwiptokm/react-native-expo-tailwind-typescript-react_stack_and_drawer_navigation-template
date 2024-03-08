import { Pressable, View } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import PText from "../texts/PText";

type Props = {
  title: string;
};

const SecondaryHeader = (props: Props) => {
  return (
    <View className="mt-6">
      <PText className="text-2xl font-semibold text-center">
        {props.title}
      </PText>
      <Pressable
        onPress={() => {
          router.back();
        }}
        className="absolute left-0"
      >
        <MaterialIcons name="arrow-back" size={28} color="white" />
      </Pressable>
    </View>
  );
};

export default SecondaryHeader;
