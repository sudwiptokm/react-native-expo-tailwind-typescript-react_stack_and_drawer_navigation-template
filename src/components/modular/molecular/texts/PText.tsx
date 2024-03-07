import React from "react";
import { Text } from "react-native";

import { twMerge } from "../../../../../node_modules/tailwind-merge/src/lib/tw-merge";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const PText = ({ children, className }: Props) => {
  return (
    <Text className={twMerge("text-white text-base leading-6", className)}>
      {children}
    </Text>
  );
};

export default PText;
