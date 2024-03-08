import { router } from "expo-router";
import React from "react";
import { SafeAreaView } from "react-native";
import { Button } from "react-native-paper";
import PText from "../../../src/components/modular/molecular/texts/PText";

type Props = object;

const test = (props: Props) => {
  return (
    <SafeAreaView>
      <PText>test</PText>
      <Button onPress={() => router.back()}>Back</Button>
    </SafeAreaView>
  );
};

export default test;
