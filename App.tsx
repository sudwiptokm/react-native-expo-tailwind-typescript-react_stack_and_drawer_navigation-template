import "react-native-gesture-handler";

import CustomDrawerContent from "./src/components/complex/CustomDrawerContent";
import { Dimensions } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Root from "./src/screens/Root";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          drawerStyle: {
            width: Dimensions.get("window").width * 0.7,
          },
        }}
        drawerContent={() => <CustomDrawerContent />}
      >
        <Drawer.Screen
          name="Root"
          component={Root}
          options={{
            headerShown: false,
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
