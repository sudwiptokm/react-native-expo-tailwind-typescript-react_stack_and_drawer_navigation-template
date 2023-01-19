import { View, Text, Button } from "react-native";
import React from "react";
import { StackScreenProps } from "@react-navigation/stack";

type Props = {};

const TestScreen = ({ navigation }: StackScreenProps<Props>) => {
  return (
    <View className="flex-1 items-center justify-center">
      <Text>TestScreen</Text>
      <Button
        title="Go to Home Screen"
        onPress={() => navigation.navigate("HomeScreen" as never)}
      />
    </View>
  );
};

export default TestScreen;
