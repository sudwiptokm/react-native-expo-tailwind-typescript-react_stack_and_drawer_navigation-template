import { Text, TouchableOpacity } from "react-native";

import React from "react";

type Props = {
  name: string;
  id: number;
  removeTask: (val: number) => void;
};

const TaskView = (props: Props) => {
  return (
    <TouchableOpacity className="border border-gray-600 rounded-sm p-2 flex-row justify-between items-start">
      <Text className="text-white">{props.name}</Text>
      <TouchableOpacity
        className="flex-row justify-center items-center px-2"
        onPress={() => props.removeTask(props.id)}
      >
        <Text className="text-red-600">DEL</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default TaskView;
