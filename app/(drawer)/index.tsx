import { DrawerActions } from "@react-navigation/native";
import { useNavigation } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

import Button from "../../src/components/modular/Button";

type Props = object;

const Index = (props: Props) => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Index</Text>
      <Button
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        title="Open Drawer"
      />
    </View>
  );
};

export default Index;
