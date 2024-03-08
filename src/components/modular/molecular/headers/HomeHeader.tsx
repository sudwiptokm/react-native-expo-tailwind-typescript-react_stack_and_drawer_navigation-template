import { DrawerActions, NavigationProp } from "@react-navigation/native";
import { Pressable, View } from "react-native";
import { Menu } from "react-native-paper";

import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import PText from "../texts/PText";

type Props = {
  navigation: NavigationProp<ReactNavigation.RootParamList>;
};

const HomeHeader = (props: Props) => {
  const [visible, setVisible] = React.useState(false);
  return (
    <View className="flex-row justify-between items- mt-6">
      <Pressable
        onPress={() => {
          props.navigation.dispatch(DrawerActions.openDrawer());
        }}
      >
        <MaterialIcons name="menu" size={24} color="white" />
      </Pressable>
      <PText className="text-2xl font-semibold">Your Tasks</PText>

      <Menu
        visible={visible}
        onDismiss={() => setVisible(false)}
        anchor={
          <Pressable onPress={() => setVisible(true)}>
            <MaterialIcons name="filter-list" size={24} color="white" />
          </Pressable>
        }
        anchorPosition="bottom"
      >
        <Menu.Item onPress={() => {}} title="By Date" />
        <Menu.Item onPress={() => {}} title="By Priority" />
        <Menu.Item onPress={() => {}} title="By Type" />
      </Menu>
    </View>
  );
};

export default HomeHeader;
