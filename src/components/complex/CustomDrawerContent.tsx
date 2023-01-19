import { View, Text } from "react-native";
import React from "react";

type Props = {};

const CustomDrawerContent = (props: Props) => {
  return (
    <View className="flex-1 justify-center items-center bg-red-100">
      <Text>CustomDrawerContent</Text>
    </View>
  );
};

export default CustomDrawerContent;
