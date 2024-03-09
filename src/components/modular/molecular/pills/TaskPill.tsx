import React from "react";
import { View } from "react-native";
import { capitalize } from "../../../../utils/helperFunctions";
import PText from "../texts/PText";

type Props = {
  variant?: "high" | "medium" | "low";
};

const variantBgClasses = {
  high: "bg-red-100",
  medium: "bg-yellow-100",
  low: "bg-teal-100",
};

const variantTextClasses = {
  high: "text-red-700",
  medium: "text-yellow-700",
  low: "text-teal-700",
};

const TaskPill = ({ variant }: Props) => {
  return (
    <View
      className={`${variant ? variantBgClasses[variant] : "bg-gray-50"} px-2 rounded-full`}
    >
      <PText
        className={`${variant ? variantTextClasses[variant] : "text-gray-800"} text-sm`}
      >
        {capitalize(variant ?? "null")}
      </PText>
    </View>
  );
};

export default TaskPill;
