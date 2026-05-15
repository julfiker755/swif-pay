import { getInit } from "@/components/lib";
import { ArrowBtn } from "@/components/reuseable/icon-btn";
import { Login_sc } from "@/components/schema";
import { Box, Button, Divider, FormInput, Heading } from "@/components/ui";
import tw from "@/components/ui/tailwind";
import FavIcon from "@/icon/favIcon";
import { Checkbox } from "expo-checkbox";
import { Link, useLocalSearchParams, useRouter } from "expo-router";
import { Formik } from "formik";
import React from "react";
import { Image, Text, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";

export default function Login() {
  const params = useLocalSearchParams();
  const router = useRouter();
  const handlesubmit = (values: any, { resetForm }: any) => {
    console.log("Login Attempt:", values);

    // router.push("/(tabs)/home");
    router.push({
      pathname: "/(auth)/register/[slug]/index",
      params: { slug: "bacon" },
    });
    resetForm();
    // setTimeout(() => {
    //   resetForm();
    // }, 2000);
  };

  return (
    <KeyboardAwareScrollView
      bottomOffset={20}
      contentContainerStyle={tw`flex-grow px-4`}
    >
      <ArrowBtn
        style={tw`mt-5`}
        label={
          params.role === "user"
            ? "Login as a service user"
            : "Login as a service provider"
        }
      />
      <View style={tw`flex-1 justify-center`}>
        <View style={tw`mx-auto my-6`}>
          <Image
            source={require("@/assets/image/logo.png")}
            style={{ width: 170, height: 80, resizeMode: "contain" }}
          />
        </View>

        <Heading
          variant="h1"
          style={tw`mt-2 text-4xl mb-1 mx-auto text-primary`}
        >
          Welcome back
        </Heading>

        <Heading variant="p" style={tw`mx-auto mb-6`}>
          Use your credentials to sign in
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
                <View style={tw`flex-row justify-between items-center my-1`}>
                  <View style={tw`flex-row items-center`}>
                    <Checkbox
                      style={tw`w-4 h-4 border border-input_foreground`}
                    />
                    <Text style={tw`text-sm text-black ml-1`}>Remember me</Text>
                  </View>

                  <Link href={`/(auth)/forgot-pass`} asChild>
                    <Text style={tw`text-sm text-primary underline`}>
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
        <Box style={tw`mx-auto`}>
          <FavIcon width={40} height={40} name="google" />
        </Box>
        <View style={tw`flex-row justify-center items-center mt-6`}>
          <Text style={tw`text-base text-black mr-1`}>
            Don&apos;t have an account ?
          </Text>
          <Link href={`/(auth)/register`} asChild>
            <Text style={tw`text-base text-black underline`}>Sign up</Text>
          </Link>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}
