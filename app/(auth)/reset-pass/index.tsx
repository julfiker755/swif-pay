import { assets } from "@/assets";
import { getInit } from "@/components/lib";
import { change_sc } from "@/components/schema";
import { Button, FormInput, Heading } from "@/components/ui";
import tw from "@/components/ui/tailwind";
import FavIcon from "@/icon/favIcon";
import { Link } from "expo-router";
import { Formik } from "formik";
import React, { useState } from "react";
import { Image, Modal, Text, View } from "react-native";

export default function ResetPassword() {
  const [isSuccess, setIsSuccess] = useState(false);
  const handlesubmit = (values: any, { resetForm }: any) => {
    console.log("Attempt:", values);
    setTimeout(() => {
      resetForm();
      setIsSuccess(true);
    }, 2000);
  };

  return (
    <View style={tw`flex-1 justify-center px-6`}>
      <Image source={assets.logo} style={tw`w-20 h-20 mx-auto`} />

      <Heading variant="h1" style={tw`mt-2 mb-1 mx-auto`}>
        Reset Password
      </Heading>

      <Heading variant="p" style={tw`mx-auto mb-6`}>
        Enter a new password for your account
      </Heading>

      <Formik
        initialValues={getInit(change_sc)}
        validationSchema={change_sc}
        onSubmit={handlesubmit}
      >
        {(formik) => (
          <>
            <View style={tw`w-full gap-3`}>
              <FormInput
                name="password"
                formik={formik}
                placeholder="New Password"
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
                label="Change password"
                style={tw`rounded-full h-11`}
                onPress={formik.handleSubmit}
              />
            </View>
          </>
        )}
      </Formik>
      {/* --- success modal ---- */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={isSuccess}
        onRequestClose={() => {
          // Android back button press handler (optional)
        }}
      >
        <View style={tw`flex-1 justify-center items-center bg-black/50 p-6`}>
          <View
            style={tw`bg-[#1f222b] p-8 rounded-2xl w-full max-w-sm items-center shadow-xl`}
          >
            <View
              style={tw`w-16 h-16 rounded-full bg-success justify-center items-center`}
            >
              <FavIcon width={70} height={70} name="success" />
            </View>

            <Text style={tw`text-2xl text-white mt-4 mb-2`}>
              You&apos;re All Set!
            </Text>

            <Text style={tw`text-base text-white text-center mb-6`}>
              Your password has been changed successfully!
            </Text>

            <Link href={"/(auth)/login"} asChild>
              <Button style={tw`rounded-full px-10`}>
                <Text style={tw`text-lg text-white font-semibold`}>
                  Back to login
                </Text>
              </Button>
            </Link>
          </View>
        </View>
      </Modal>
    </View>
  );
}
