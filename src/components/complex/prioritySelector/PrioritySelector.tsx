import { Pressable, View } from "react-native";

import React from "react";
import { capitalize } from "../../../utils/helperFunctions";
import PText from "../../modular/molecular/texts/PText";

const priorities = ["high", "medium", "low"];

type Props = {
  current?: "high" | "medium" | "low";
  setPriority: React.Dispatch<React.SetStateAction<"high" | "medium" | "low">>;
};

const priorityClasses = {
  high: "text-red-500",
  medium: "text-yellow-500",
  low: "text-teal-500",
};

const PrioritySelector = (props: Props) => {
  return (
    <View className="flex-1">
      <PText className="text-lg font-semibold mb-2">Priority</PText>
      <View className="flex-row justify-between items-center flex-1">
        {priorities.map((priority) => (
          <Pressable
            className={`px-8 py-4 rounded-xl bg-surface ${props.current === priority && "rounded-b-0 border-b-2 border-primary"}`}
            onPress={() =>
              props.setPriority(priority as "high" | "medium" | "low")
            }
          >
            <PText
              className={`text-center font-medium text-lg ${priorityClasses[priority]}`}
            >
              {capitalize(priority)}
            </PText>
          </Pressable>
        ))}
      </View>
    </View>
  );
};

export default PrioritySelector;
