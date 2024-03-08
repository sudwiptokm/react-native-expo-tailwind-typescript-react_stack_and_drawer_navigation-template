import { router, useNavigation } from "expo-router";
import React, { useState } from "react";
import {
  Pressable,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Button, FAB } from "react-native-paper";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { DrawerActions } from "@react-navigation/native";
import AddTaskComponent from "../../../src/components/modular/AddTaskComponent";
import TaskView from "../../../src/components/modular/TaskView";
import Gap from "../../../src/components/modular/molecular/Gap";
import HomeHeader from "../../../src/components/modular/molecular/headers/HomeHeader";
import { taskData } from "../../../src/utils/data";
import { Task_Data_Type } from "../../../src/utils/types";

type Props = object;

const colors = ["#330C2F", "#7b287d", "#7067CF", "#B7C0EE", "#CBF3D2"];

const Index = (props: Props) => {
  const navigation = useNavigation();

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

  // functions
  const storeData = async (value: string) => {
    try {
      await AsyncStorage.setItem("color", value);
    } catch (e) {
      // saving error
      console.log({ e });
    }
  };

  return (
    <SafeAreaView>
      <View className="min-h-screen px-6">
        {/* Main Logo Text */}
        <HomeHeader navigation={navigation} />

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
        <Button
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
          compact
        >
          Open Drawer
        </Button>
        <Button onPress={() => router.push("app/test")} mode="contained-tonal">
          Test
        </Button>

        <View className="flex-row justify-center mt-10">
          {colors.map((color, idx) => (
            <Pressable
              key={idx}
              className="w-8 h-8 rounded-full mx-2"
              style={{ backgroundColor: color }}
              onPress={() => {
                console.log({ color });
                storeData(color);
              }}
            />
          ))}
        </View>
      </View>
      <FAB
        icon="plus"
        onPress={() => router.push("app/task/create-task")}
        className="absolute right-0 bottom-10 m-4 bg-surface"
        variant="surface"
      />
    </SafeAreaView>
  );
};

export default Index;
