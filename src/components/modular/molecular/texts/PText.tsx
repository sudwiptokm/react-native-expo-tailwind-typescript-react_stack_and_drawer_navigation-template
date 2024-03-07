import React from "react";
import { Text } from "react-native";

type Props = {
  children: React.ReactNode;
};

const PText = ({ children }: Props) => {
  return <Text className="text-white">{children}</Text>;
};

export default PText;
