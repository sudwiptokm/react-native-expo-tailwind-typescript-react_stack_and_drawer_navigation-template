import "../global.css";

import { Stack } from "expo-router";
import React from "react";

type Props = object;

const _layout = (props: Props) => {
  return (
    <Stack
      initialRouteName="index"
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: "#121212", paddingHorizontal: 24 },
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="(drawer)" />
      <Stack.Screen name="test" />
      <Stack.Screen name="(app)/home" />
    </Stack>
  );
};

export default _layout;
