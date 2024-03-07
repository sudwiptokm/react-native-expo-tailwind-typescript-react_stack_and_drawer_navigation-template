import React from "react";
import { SafeAreaView } from "react-native";

import PText from "../src/components/modular/molecular/texts/PText";

type Props = object;

const Index = (props: Props) => {
  return (
    <SafeAreaView>
      <PText className="text-center text-3xl font-bold mt-6">
        Welcome to ZenCheck
      </PText>
      <PText className="text-center mt-6">
        Please login or create new account to continue
      </PText>
    </SafeAreaView>
  );
};

export default Index;
