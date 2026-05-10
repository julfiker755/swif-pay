import { assets } from "@/assets";
import { getInit } from "@/components/lib";
import { register_sc } from "@/components/schema";
import { Button, FormInput, Heading } from "@/components/ui";
import tw from "@/components/ui/tailwind";
import FavIcon from "@/icon/favIcon";
import { Link } from "expo-router";
import { Formik } from "formik";
import React from "react";
import { Image, Platform, Text, View } from "react-native";
import { KeyboardAvoidingView } from "react-native-keyboard-controller";

export default function SignUp() {
  const handlesubmit = (values: any, { resetForm }: any) => {
    console.log("Login Attempt:", values);
    setTimeout(() => {
      resetForm();
    }, 2000);
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
          initialValues={getInit(register_sc)}
          validationSchema={register_sc}
          onSubmit={handlesubmit}
        >
          {(formik) => (
            <>
              <View style={tw`w-full gap-3`}>
                <FormInput
                  name="name"
                  formik={formik}
                  placeholder="Your Full Name"
                  icon={<FavIcon name="user" />}
                />
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
                <FormInput
                  name="c_password"
                  formik={formik}
                  placeholder="Confirm Password"
                  icon={<FavIcon name="password" />}
                  secure
                />
                <Button
                  label="Sign up"
                  style={tw`rounded-full h-11`}
                  onPress={formik.handleSubmit}
                />
              </View>
            </>
          )}
        </Formik>
        <View style={tw`flex-row justify-center items-center mt-6`}>
          <Text style={tw`text-base text-white mr-1`}>
            Already have an account ?
          </Text>
          <Link href={`/(auth)/login`} asChild>
            <Text style={tw`text-base text-primary underline`}>Sign in</Text>
          </Link>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
