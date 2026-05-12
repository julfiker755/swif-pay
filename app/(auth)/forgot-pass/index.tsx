import { getInit } from "@/components/lib";
import { ArrowBtn } from "@/components/reuseable/icon-btn";
import { email_sc } from "@/components/schema";
import { Button, FormInput, Heading } from "@/components/ui";
import tw from "@/components/ui/tailwind";
import FavIcon from "@/icon/favIcon";
import { useRouter } from "expo-router";
import { Formik } from "formik";
import React from "react";
import { Image, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";

export default function ForgotPassword() {
  const router = useRouter();
  const handlesubmit = (values: any, { resetForm }: any) => {
    console.log("Login Attempt:", values);
    router.push({
      pathname: "/(auth)/otp",
      params: { email: values.email },
    });
  };

  return (
    <KeyboardAwareScrollView
      bottomOffset={20}
      contentContainerStyle={tw`flex-grow px-4`}
    >
      <ArrowBtn style={tw`mt-5`} />
      <View style={tw`flex-1 justify-center mb-[70px]`}>
        <View style={tw`mx-auto my-4`}>
          <Image
            source={require("@/assets/image/logo.png")}
            style={{ width: 170, height: 80, resizeMode: "contain" }}
          />
        </View>

        <View style={tw`py-2`}>
          <Heading variant="h1" style={tw`mb-1 text-3xl mx-auto text-primary`}>
            Forgot Password ?
          </Heading>

          <Heading variant="p" style={tw`mx-auto mb-6 text-center`}>
            Enter your email address that you provided during sign up. We will
            send you a 6 digit code through that email.
          </Heading>
        </View>

        <Formik
          initialValues={getInit(email_sc)}
          validationSchema={email_sc}
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
                <Button
                  label="Send"
                  style={tw`rounded-full h-11`}
                  onPress={formik.handleSubmit}
                />
              </View>
            </>
          )}
        </Formik>
      </View>
    </KeyboardAwareScrollView>
  );
}
