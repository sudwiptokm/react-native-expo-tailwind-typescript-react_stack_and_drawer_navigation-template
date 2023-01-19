import { View, Text, Button } from "react-native";
import React from "react";

type Props = {
  navigation: { openDrawer: () => void; navigate: (name: string) => void };
};

const HomeScreen = ({ navigation }: Props) => {
  return (
    <View className="flex-1 items-center justify-center">
      <Text>HomeScreen</Text>
      <Button
        title="Go to Test Screen"
        onPress={() => navigation.navigate("TestScreen" as never)}
      />
      <Button title="Open Drawer" onPress={() => navigation.openDrawer()} />
    </View>
  );
};

export default HomeScreen;
