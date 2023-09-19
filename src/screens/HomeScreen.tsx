import { View, Text, Button, SafeAreaView, StatusBar } from "react-native";
import React, { useState } from "react";
import TaskView from "../components/modular/TaskView";
import { taskData } from "../utils/data";
import { Task_Data_Type } from "../utils/types";
import Gap from "../components/modular/Gap";
import { TouchableOpacity } from "react-native-gesture-handler";
import AddTaskComponent from "../components/modular/AddTaskComponent";

type Props = {
  navigation: { openDrawer: () => void; navigate: (name: string) => void };
};

const HomeScreen = ({ navigation }: Props) => {
  const [tasks, setTasks] = useState<Task_Data_Type[]>(taskData);
  const [showAddButton, setShowAddButton] = useState(true);

  const addTask = (name: string) => {
    let task = { name: name };
    let copy_arr = [...tasks];
    copy_arr.push(task);
    setTasks(copy_arr);
  };

  const removeTask = (id: number) => {
    let copy_arr = [...tasks];
    copy_arr.splice(id, 1);
    setTasks(copy_arr);
  };

  return (
    <SafeAreaView className="bg-gray-900">
      <StatusBar barStyle="light-content" />
      <View className="min-h-screen bg-gray-900 px-6">
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
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
