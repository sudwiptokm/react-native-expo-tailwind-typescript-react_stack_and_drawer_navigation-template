import { router, useNavigation } from "expo-router";
import { SafeAreaView, ScrollView, View } from "react-native";

import React from "react";
import { FAB } from "react-native-paper";
import TaskView from "../../../src/components/modular/atomic/TaskView";
import HomeHeader from "../../../src/components/modular/molecular/headers/HomeHeader";
import { useAppSelector } from "../../../src/redux/hooks";
import { selectAllTasks } from "../../../src/redux/slices/TaskSlice";

type Props = object;

const Index = (props: Props) => {
  const navigation = useNavigation();

  const tasks = useAppSelector(selectAllTasks);

  console.log({ tasks });

  return (
    <SafeAreaView className="">
      <View className="min-h-screen px-6">
        {/* Main Logo Text */}
        <HomeHeader navigation={navigation} />

        {/* Task View */}
        <ScrollView className="mt-12">
          <View className="gap-y-6">
            {tasks.map((task, index) => (
              <TaskView task={task} key={task.id} />
            ))}
          </View>
        </ScrollView>
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
