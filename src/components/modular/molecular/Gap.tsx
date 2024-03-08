import { View, Text } from "react-native";
import React from "react";

type Props = {
  height?: string;
  width?: string;
};

const Gap = (props: Props) => {
  return <View className={`${props.height} ${props.width}`}></View>;
};

export default Gap;
