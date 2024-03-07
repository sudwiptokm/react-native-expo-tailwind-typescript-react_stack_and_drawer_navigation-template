import { ExpoConfig } from "expo/config";

// In SDK 46 and lower, use the following import instead:
// import { ExpoConfig } from '@expo/config-types';

const config: ExpoConfig = {
  name: "my-app",
  slug: "my-app",
  scheme: "my-circle",
  plugins: ["expo-router"],
  userInterfaceStyle: "dark",
  backgroundColor: "#121212",
};

export default config;
