import { Pressable, View } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { RadioButton } from "react-native-paper";
import { TaskDTO } from "../../../models/task/TaskSchema";
import TaskPill from "../molecular/pills/TaskPill";
import PText from "../molecular/texts/PText";

type Props = {
  task: TaskDTO;
};

const TaskView = ({ task }: Props) => {
  const [checked, setChecked] = React.useState(task.isCompleted);
  return (
    <View className="flex-row items-center gap-x-4">
      <View
        className={`rounded-full border-2 ${checked ? "border-primary" : "border-white"}`}
      >
        <RadioButton
          value="status"
          status={checked ? "checked" : "unchecked"}
          onPress={() => setChecked((prev) => !prev)}
        />
      </View>
      <Pressable
        className="bg-card_bg/20 flex-1 py-2 px-4 rounded-lg"
        onPress={() => router.push("app/task/edit-task/" + task.id)}
      >
        <View className="flex-row items-center gap-x-4">
          <View className="flex-1">
            <PText className="text-lg font-bold">{task.name}</PText>
            {task.description && (
              <PText className="text-sm text-gray-400">
                {task.description}
              </PText>
            )}
            <PText className="text-sm text-gray-400">
              {task.startTime} - {task.endTime}
            </PText>
          </View>

          <View className="flex-col justify-between items-end gap-y-4">
            <TaskPill variant={task.priority} />
            <View className="flex-row items-center gap-x-1">
              <Ionicons name="documents-outline" size={16} color="white" />
              <PText className="font-medium mr-2">
                {task.subTasks?.length}
              </PText>
              <Ionicons name="book-outline" size={16} color="white" />
              <PText className="font-medium">{task.notes?.length}</PText>
            </View>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default TaskView;
