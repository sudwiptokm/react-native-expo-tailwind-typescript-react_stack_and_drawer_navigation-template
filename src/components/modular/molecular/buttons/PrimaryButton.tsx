import React from "react";
import { Pressable } from "react-native";
import { twMerge } from "tailwind-merge";

import PText from "../texts/PText";

type Props = {
  title: string;
  onPress: () => void;
  variant?: "solid" | "outline";
  fullWidth?: boolean;
};

const variantClassNames = {
  solid: "bg-primary",
  outline: "border border-primary",
};

const PrimaryButton = (props: Props) => {
  const className = variantClassNames[props.variant || "solid"];

  return (
    <Pressable
      className={twMerge(
        "py-2 items-center rounded-lg px-4",
        className,
        props.fullWidth && "flex-1",
      )}
      onPress={props.onPress}
    >
      <PText className="font-semibold">{props.title}</PText>
    </Pressable>
  );
};

export default PrimaryButton;
