import React from "react";
import { Pressable } from "react-native";
import { twMerge } from "tailwind-merge";
import PText from "../texts/PText";

type Props = {
  title: string;
  onPress: () => void;
  variant?: "solid" | "outline";
  className?: string;
};

const variantClassNames = {
  solid: "bg-primary",
  outline: "border border-primary",
};

const PrimaryButton = (props: Props) => {
  const cn = variantClassNames[props.variant || "solid"];

  return (
    <Pressable
      className={twMerge(
        "py-2 items-center rounded-lg px-4",
        cn,
        props.className
      )}
      onPress={props.onPress}
    >
      <PText className="font-semibold">{props.title}</PText>
    </Pressable>
  );
};

export default PrimaryButton;
