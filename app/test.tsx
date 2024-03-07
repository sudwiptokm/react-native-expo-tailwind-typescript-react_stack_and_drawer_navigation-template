import { router } from "expo-router";
import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../src/components/modular/Button";

type Props = {};

const test = (props: Props) => {
  return (
    <SafeAreaView>
      <Text>test</Text>
      <Button onPress={() => router.push("/")} title="Go Home" />
    </SafeAreaView>
  );
};

export default test;
