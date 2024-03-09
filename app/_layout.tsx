import "../global.css";

import {
  MD3DarkTheme as DefaultTheme,
  PaperProvider,
} from "react-native-paper";
import { enGB, registerTranslation } from "react-native-paper-dates";

import { Stack } from "expo-router";
import React from "react";
import { Provider } from "react-redux";
import { store } from "../src/redux/store";

registerTranslation("en-GB", enGB);

type Props = object;

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#89C223",
    secondary: "yellow",
    elevation: {
      level2: "#252B2A",
    },
  },
};

const Stacks = (props: Props) => {
  return (
    <Stack
      initialRouteName="app"
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: "#121212" },
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="auth" />
      <Stack.Screen name="app" />
    </Stack>
  );
};

const _layout = (props: Props) => {
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <Stacks />
      </PaperProvider>
    </Provider>
  );
};

export default _layout;
