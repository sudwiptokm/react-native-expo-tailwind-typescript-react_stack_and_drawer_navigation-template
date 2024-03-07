import { Text, View } from "react-native";

import { useNavigation } from "expo-router";
import React from "react";

type Props = object;

const Index = (props: Props) => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Index</Text>
      {/* <Button
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        title="Open Drawer"
      /> */}
    </View>
  );
};

export default Index;
