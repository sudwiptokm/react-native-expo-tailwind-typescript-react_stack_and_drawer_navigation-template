import React, { useState } from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";

import AddTaskComponent from "../../src/components/modular/AddTaskComponent";
import Gap from "../../src/components/modular/Gap";
import TaskView from "../../src/components/modular/TaskView";
import { taskData } from "../../src/utils/data";
import { Task_Data_Type } from "../../src/utils/types";

type Props = object;

const Index = (props: Props) => {
  const [tasks, setTasks] = useState<Task_Data_Type[]>(taskData);
  const [showAddButton, setShowAddButton] = useState(true);

  const addTask = (name: string) => {
    const task = { name };
    const copy_arr = [...tasks];
    copy_arr.push(task);
    setTasks(copy_arr);
  };

  const removeTask = (id: number) => {
    const copy_arr = [...tasks];
    copy_arr.splice(id, 1);
    setTasks(copy_arr);
  };

  return (
    <SafeAreaView className="bg-gray-900">
      <View className="min-h-screen px-6">
        {/* Main Logo Text */}
        <Text className="text-3xl text-white font-bold text-center">
          Task
          <Text className="text-gray-400"> Manager</Text>
        </Text>

        {/* Task Viewer */}
        <View className="mt-10">
          {tasks.map((task: Task_Data_Type, idx: number) => (
            <View key={idx}>
              <TaskView name={task.name} id={idx} removeTask={removeTask} />
              <Gap height="h-3" />
            </View>
          ))}
        </View>

        {/* Add Task */}
        <View className="mt-10">
          {showAddButton ? (
            <View className=" self-center">
              <TouchableOpacity
                className="flex-row justify-center space-x-4"
                onPress={() => setShowAddButton(false)}
              >
                <Text className="text-gray-400 text-lg">
                  +{"  "}
                  <Text> Add task</Text>
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <AddTaskComponent addTask={addTask} cancel={setShowAddButton} />
          )}
        </View>
        {/* <Button onPress={() => router.push("/(drawer)")} title="Go Test" />
        <Button
          onPress={() => DrawerActions.openDrawer()}
          title="Open Drawer"
        /> */}
      </View>
    </SafeAreaView>
  );
};

export default Index;
