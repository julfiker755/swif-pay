import { ArrowBtn } from "@/components/reuseable/icon-btn";
import { otp_sc } from "@/components/schema";
import { Button, Heading } from "@/components/ui";
import { OtpInput } from "@/components/ui/otp-input";
import tw from "@/components/ui/tailwind";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Formik } from "formik";
import React from "react";
import { Image, Text, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";

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
        <View>
          <Heading variant="h1" style={tw`mb-1 text-3xl mx-auto text-primary`}>
            Verify Code
          </Heading>

          <Heading variant="p" style={tw`mx-auto mb-6 text-center`}>
            {`We've sent a 4-digit OTP to\n${email}`}
          </Heading>
        </View>

        <Formik
          initialValues={{ otp: "" }}
          validationSchema={otp_sc}
          onSubmit={handleSubmit}
        >
          {(formik) => (
            <View>
              <View style={tw`mx-7`}>
                <OtpInput name="otp" formik={formik} />
              </View>
              <Button
                label="Verify OTP"
                style={tw`rounded-full h-11 mt-6`}
                onPress={formik.handleSubmit}
              />

              <View style={tw`flex-row justify-center items-center mt-6`}>
                <Text style={tw`text-base text-black mr-1`}>
                  Didn&apos;t receive code?
                </Text>
                <Text style={tw`text-base text-primary underline`}>Resend</Text>
              </View>
            </View>
          )}
        </Formik>
      </View>
    </KeyboardAwareScrollView>
  );
}
