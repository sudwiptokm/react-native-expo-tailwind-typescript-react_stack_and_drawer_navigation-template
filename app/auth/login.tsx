import { Pressable, View } from "react-native";
import { Button, TextInput } from "react-native-paper";

import { AntDesign } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import Gap from "../../src/components/modular/Gap";
import Hr from "../../src/components/modular/molecular/Hr";
import PrimaryButton from "../../src/components/modular/molecular/buttons/PrimaryButton";
import PText from "../../src/components/modular/molecular/texts/PText";

type Props = object;

const Login = (props: Props) => {
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  // Secure Text Entry
  const [secureTextEntry1, setSecureTextEntry1] = React.useState<boolean>(true);

  // Show Error
  const [emailError, setEmailError] = React.useState<boolean>(false);

  // Functions
  // email regex validation
  const validateEmail = () => {
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };

  // Submit Form
  const submitForm = () => {
    validateEmail();
    if (!emailError) {
      console.log("Form Submitted");
    }
  };

  // Google Login
  const loginWithGoogle = () => {
    console.log("Google Login");
  };

  return (
    <View>
      <PText className="font-medium text-3xl text-primary text-center mb-20">
        Welcome Back
      </PText>
      <PText className="font-medium text-xl text-center">Login</PText>

      {/* Form */}
      <View className="gap-y-6 my-6">
        {/* Email Field */}
        <View>
          <TextInput
            mode="outlined"
            label="Email"
            value={email}
            onChangeText={setEmail}
            error={emailError}
            onBlur={validateEmail}
          />
          {emailError && (
            <PText className="text-red-400 mt-1">
              Provide valid email address
            </PText>
          )}
        </View>

        {/* Password Field */}
        <TextInput
          mode="outlined"
          label="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={secureTextEntry1}
          right={
            !secureTextEntry1 ? (
              <TextInput.Icon
                icon="eye"
                onPress={() => setSecureTextEntry1((prev) => !prev)}
              />
            ) : (
              <TextInput.Icon
                icon="eye-off"
                onPress={() => setSecureTextEntry1((prev) => !prev)}
              />
            )
          }
        />

        {/* Login Button */}
        <PrimaryButton title="Login" onPress={submitForm} />
      </View>

      {/* Social Logins */}
      <View className="mt-12">
        <View className="flex-row items-center gap-x-2">
          <Hr />
          <PText className="text-center">Or</PText>
          <Hr />
        </View>

        {/* Google */}
        <Pressable
          className="flex flex-row justify-center items-center gap-x-4 mt-8 border border-primary rounded py-4"
          onPress={loginWithGoogle}
        >
          <AntDesign name="google" size={24} color="white" />
          <PText>Login with Google</PText>
        </Pressable>

        {/* Already Have Account */}
        <View className="flex-row justify-center items-center mt-8 gap-1">
          <PText>New to ZenCheck?</PText>
          <Pressable onPress={() => router.push("/auth/register")}>
            <PText className="text-primary">Register</PText>
          </Pressable>
        </View>

        <Gap height="h-5" />
        <Button mode="contained">Go to home</Button>
      </View>
    </View>
  );
};

export default Login;
