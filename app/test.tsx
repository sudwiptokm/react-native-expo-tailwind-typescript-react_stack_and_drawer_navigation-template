import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = {};

const test = (props: Props) => {
  return (
    <SafeAreaView>
      <Text>test</Text>
      {/* <Button onPress={() => router.push("/")} title="Go Home" /> */}
    </SafeAreaView>
  );
};

export default test;
