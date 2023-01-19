import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Root from "./src/screens/Root";
import CustomDrawerContent from "./src/components/complex/CustomDrawerContent";
import { Dimensions } from "react-native";

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
        useLegacyImplementation
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
