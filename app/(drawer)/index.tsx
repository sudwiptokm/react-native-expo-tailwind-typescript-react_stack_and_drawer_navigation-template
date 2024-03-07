import { Text, View } from "react-native";

import { DrawerActions } from "@react-navigation/native";
import { useNavigation } from "expo-router";
import React from "react";
import Button from "../../src/components/modular/Button";

type Props = {};

const index = (props: Props) => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>index</Text>
      <Button
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        title="Open Drawer"
      />
    </View>
  );
};

export default index;
