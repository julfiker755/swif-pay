import { assets } from "@/assets";
import { getInit } from "@/components/lib";
import { Login_sc } from "@/components/schema";
import { Box, Button, Divider, FormInput, Heading } from "@/components/ui";
import tw from "@/components/ui/tailwind";
import FavIcon from "@/icon/favIcon";
import { Checkbox } from "expo-checkbox";
import { Link, useRouter } from "expo-router";
import { Formik } from "formik";
import React from "react";
import { Image, Platform, Text, View } from "react-native";
import { KeyboardAvoidingView } from "react-native-keyboard-controller";

export default function Login() {
  const router = useRouter();
  const handlesubmit = (values: any, { resetForm }: any) => {
    console.log("Login Attempt:", values);

    router.push("/(tabs)/home");

    // setTimeout(() => {
    //   resetForm();
    // }, 2000);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={tw`flex-1`}
    >
      <View style={tw`flex-1 justify-center px-6`}>
        <Image source={assets.logo} style={tw`w-20 h-20 mx-auto`} />

        <Heading variant="h1" style={tw`mt-2 mb-1 mx-auto`}>
          Movexa
        </Heading>

        <Heading variant="p" style={tw`mx-auto mb-6`}>
          Unlimited movies and series anytime
        </Heading>

        <Formik
          initialValues={getInit(Login_sc)}
          // validationSchema={Login_sc}
          onSubmit={handlesubmit}
        >
          {(formik) => (
            <>
              <View style={tw`w-full gap-3`}>
                <FormInput
                  name="email"
                  formik={formik}
                  placeholder="Email"
                  icon={<FavIcon name="email" />}
                />

                <FormInput
                  name="password"
                  formik={formik}
                  placeholder="Password"
                  icon={<FavIcon name="password" />}
                  secure
                />
                <View style={tw`flex-row justify-between items-center`}>
                  <View style={tw`flex-row items-center`}>
                    <Checkbox
                      style={tw`w-4 h-4 border border-input_foreground`}
                    />
                    <Text style={tw`text-sm text-white ml-1`}>Remember me</Text>
                  </View>

                  <Link href={`/(auth)/forgot-pass`} asChild>
                    <Text style={tw`text-sm text-white underline`}>
                      Forgot Password?
                    </Text>
                  </Link>
                </View>

                <Button
                  label="Sign in"
                  style={tw`rounded-full h-11`}
                  onPress={formik.handleSubmit}
                />
              </View>
            </>
          )}
        </Formik>
        <Divider>or continue with</Divider>
        <Box style={tw`mx-auto bg-input border rounded-full`}>
          <FavIcon name="google" />
        </Box>
        <View style={tw`flex-row justify-center items-center mt-6`}>
          <Text style={tw`text-base text-white mr-1`}>
            Don&apos;t have an account ?
          </Text>
          <Link href={`/(auth)/register`} asChild>
            <Text style={tw`text-base text-primary underline`}>Sign up</Text>
          </Link>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
