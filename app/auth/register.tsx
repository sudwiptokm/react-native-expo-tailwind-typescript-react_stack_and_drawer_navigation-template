import React from "react";
import { View } from "react-native";

import PText from "../../src/components/modular/molecular/texts/PText";

type Props = object;

const Register = (props: Props) => {
  return (
    <View>
      <PText className="font-medium text-xl text-center">Register</PText>
    </View>
  );
};

export default Register;
