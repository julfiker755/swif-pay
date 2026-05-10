import { assets } from "@/assets";
import { getInit } from "@/components/lib";
import { email_sc } from "@/components/schema";
import { Button, FormInput, Heading } from "@/components/ui";
import tw from "@/components/ui/tailwind";
import FavIcon from "@/icon/favIcon";
import { useRouter } from "expo-router";
import { Formik } from "formik";
import React from "react";
import { Image, View } from "react-native";

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
    <View style={tw`flex-1 justify-center px-6`}>
      <Image source={assets.logo} style={tw`w-20 h-20 mx-auto`} />

      <Heading variant="h1" style={tw`mt-2 mb-1 mx-auto`}>
        Forgot password ?
      </Heading>

      <Heading variant="p" style={tw`mx-auto mb-6 text-center`}>
        Enter the email address that you used to create your account. We will
        send an OTP to reset your password.
      </Heading>

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
                label="Get OTP"
                style={tw`rounded-full h-11`}
                onPress={formik.handleSubmit}
              />
            </View>
          </>
        )}
      </Formik>
    </View>
  );
}
