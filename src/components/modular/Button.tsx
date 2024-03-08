import React from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

enum Variant {
  solid = "solid",
  outline = "outline",
}

type Props = {
  title: string;
  onPress: () => void;
  variant?: string;
};

export default function Button(props: Props) {
  return (
    <TouchableOpacity
      className={`${
        props.variant === Variant.outline
          ? "border border-gray-600"
          : "bg-gray-400 text-gray-800"
      } p-2 rounded-md w-min`}
      onPress={props.onPress}
    >
      <Text
        className={`${
          props.variant === Variant.outline ? "text-white" : "text-gray-800"
        }`}
      >
        {props.title}
      </Text>
    </TouchableOpacity>
  );
}
