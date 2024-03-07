import "../global.css";

import { Stack } from "expo-router";
import React from "react";
import {
  MD3DarkTheme as DefaultTheme,
  PaperProvider,
} from "react-native-paper";

type Props = object;

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#89C223",
    secondary: "yellow",
  },
};

const Stacks = (props: Props) => {
  return (
    <Stack
      initialRouteName="index"
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: "#121212", paddingHorizontal: 24 },
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="auth" />
    </Stack>
  );
};

const _layout = (props: Props) => {
  return (
    <PaperProvider theme={theme}>
      <Stacks />
    </PaperProvider>
  );
};

export default _layout;
