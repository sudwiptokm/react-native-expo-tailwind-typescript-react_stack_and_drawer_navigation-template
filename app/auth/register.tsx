import { Pressable, View } from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { TextInput } from "react-native-paper";
import Hr from "../../src/components/modular/molecular/Hr";
import PrimaryButton from "../../src/components/modular/molecular/buttons/PrimaryButton";
import PText from "../../src/components/modular/molecular/texts/PText";

type Props = object;

const Register = (props: Props) => {
  const [name, setName] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [confirmPassword, setConfirmPassword] = React.useState<string>("");

  // Secure Text Entry
  const [secureTextEntry1, setSecureTextEntry1] = React.useState<boolean>(true);
  const [secureTextEntry2, setSecureTextEntry2] = React.useState<boolean>(true);

  // Show Error
  const [showError, setShowError] = React.useState<boolean>(false);
  const [nameError, setNameError] = React.useState<boolean>(false);
  const [emailError, setEmailError] = React.useState<boolean>(false);
  const [passwordError, setPasswordError] = React.useState<boolean>(false);

  // Functions
  const validateName = () => {
    if (name === "") {
      setNameError(true);
    } else {
      setNameError(false);
    }
  };

  // email regex validation
  const validateEmail = () => {
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };

  // password length validation
  const validatePassword = () => {
    if (password.length < 8) {
      setPasswordError(true);
      setShowError(true);
    } else {
      setPasswordError(false);
    }
  };

  // Form Validation
  const validateForm = () => {
    validateName();
    validateEmail();
    validatePassword();
  };

  // Submit Form
  const submitForm = () => {
    validateForm();
    if (!nameError && !emailError && !passwordError && !showError) {
      console.log("Form Submitted");
    }
  };

  // Google Login
  const loginWithGoogle = () => {
    console.log("Google Login");
  };

  return (
    <View className="px-6">
      <PText className="font-medium text-xl text-center">Register</PText>

      {/* Form */}
      <View className="gap-y-6 my-6">
        {/* Name Field */}
        <View>
          <TextInput
            mode="outlined"
            label="Name"
            value={name}
            onChangeText={setName}
            error={nameError}
            onBlur={validateName}
          />
          {nameError && (
            <PText className="text-red-400 mt-1">Name is required</PText>
          )}
        </View>

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
        <View>
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
            error={passwordError}
            onBlur={validatePassword}
          />
          {passwordError && (
            <PText className="text-red-400 mt-1">
              Password should be of minimum 8 characters
            </PText>
          )}
        </View>

        {/* Confirm Password Field */}
        <TextInput
          mode="outlined"
          label="Confirm Password"
          value={confirmPassword}
          onChangeText={(text) => {
            setConfirmPassword(text);
            if (text !== password) {
              setShowError(true);
            } else {
              setShowError(false);
            }
          }}
          secureTextEntry={secureTextEntry2}
          right={
            !secureTextEntry2 ? (
              <TextInput.Icon
                icon="eye"
                onPress={() => setSecureTextEntry2((prev) => !prev)}
              />
            ) : (
              <TextInput.Icon
                icon="eye-off"
                onPress={() => setSecureTextEntry2((prev) => !prev)}
              />
            )
          }
          error={showError}
        />

        {/* Register Button */}
        <PrimaryButton title="Register" onPress={submitForm} />
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
          <PText>Register with Google</PText>
        </Pressable>

        {/* Already Have Account */}
        <View className="flex-row justify-center items-center mt-8 gap-1">
          <PText>Already have an account?</PText>
          <Pressable onPress={() => router.push("/auth/login")}>
            <PText className="text-primary">Login</PText>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Register;
