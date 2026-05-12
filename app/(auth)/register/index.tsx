import { getInit } from "@/components/lib";
import { ArrowBtn } from "@/components/reuseable/icon-btn";
import { register_sc } from "@/components/schema";
import { Button, FormInput, Heading } from "@/components/ui";
import tw from "@/components/ui/tailwind";
import FavIcon from "@/icon/favIcon";
import { Link } from "expo-router";
import { Formik } from "formik";
import React from "react";
import { Image, Text, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";

export default function SignUp() {
  const handlesubmit = (values: any, { resetForm }: any) => {
    console.log("Login Attempt:", values);
    setTimeout(() => {
      resetForm();
    }, 2000);
  };

  return (
    <KeyboardAwareScrollView
      bottomOffset={20}
      contentContainerStyle={tw`flex-grow px-2`}
    >
      <ArrowBtn style={tw`mt-5`} />
      <View style={tw`flex-1 justify-center mb-[70px]`}>
        <View style={tw`mx-auto my-6`}>
          <Image
            source={require("@/assets/image/logo.png")}
            style={{ width: 170, height: 80, resizeMode: "contain" }}
          />
        </View>

        <View>
          <Heading variant="h1" style={tw`mb-1 text-3xl mx-auto text-primary`}>
            User Sign Up
          </Heading>

          <Heading variant="p" style={tw`mx-auto mb-6 text-center`}>
            Use your credentials to create a new account
          </Heading>
        </View>

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
                  style={tw`rounded-full h-11`}
                  onPress={formik.handleSubmit}
                >
                  <View style={tw`flex-row items-center`}>
                    <Text style={tw`text-white text-base`}> Continue</Text>
                    <Text style={tw`ml-2`}>
                      <FavIcon width={13} height={13} name="arrowRight" />
                    </Text>
                  </View>
                </Button>
              </View>
            </>
          )}
        </Formik>
        <View style={tw`flex-row justify-center items-center mt-6`}>
          <Text style={tw`text-base text-black mr-1`}>
            Already have an account ?
          </Text>
          <Link href={`/(auth)/login`} asChild>
            <Text style={tw`text-base text-primary underline`}>Sign in</Text>
          </Link>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}
