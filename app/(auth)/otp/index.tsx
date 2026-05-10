import { assets } from "@/assets";
import { otp_sc } from "@/components/schema";
import { Button, Heading } from "@/components/ui";
import { OtpInput } from "@/components/ui/otp-input";
import tw from "@/components/ui/tailwind";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Formik } from "formik";
import React from "react";
import { Image, Text, View } from "react-native";

export default function OtpScreen() {
  const { email } = useLocalSearchParams();
  const router = useRouter();

  const handleSubmit = (values: any) => {
    console.log("OTP:", values.otp);
    router.push({
      pathname: "/(auth)/reset-pass",
      params: { otp: values.otp, email: email },
    });
  };

  return (
    <View style={tw`flex-1 justify-center px-6`}>
      <Image source={assets.logo} style={tw`w-20 h-20 mx-auto`} />
      <Heading variant="h1" style={tw`mt-2 mb-1 mx-auto`}>
        Enter OTP
      </Heading>

      <Heading variant="p" style={tw`mx-auto mb-6 text-center`}>
        {`We've sent a 4-digit OTP to\n${email}`}
      </Heading>

      <Formik
        initialValues={{ otp: "" }}
        validationSchema={otp_sc}
        onSubmit={handleSubmit}
      >
        {(formik) => (
          <View>
            <OtpInput name="otp" formik={formik} />
            <Button
              label="Verify OTP"
              style={tw`rounded-full h-11 mt-3`}
              onPress={formik.handleSubmit}
            />

            <View style={tw`flex-row justify-center items-center mt-6`}>
              <Text style={tw`text-base text-white mr-1`}>
                Didn&apos;t receive code?
              </Text>
              <Text style={tw`text-base text-primary underline`}>Resend</Text>
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
}
