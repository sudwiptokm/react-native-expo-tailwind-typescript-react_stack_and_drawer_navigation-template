import { Drawer } from "expo-router/drawer";
import React from "react";
import CustomDrawerContent from "../../src/components/complex/CustomDrawerContent";

type Props = object;

const Layout = (props: Props) => {
  return (
    <Drawer
      screenOptions={{
        headerShown: false,
      }}
      drawerContent={(props) => <CustomDrawerContent props={props} />}
    >
      <Drawer.Screen name="(screens)" />
    </Drawer>
  );
};

export default Layout;
