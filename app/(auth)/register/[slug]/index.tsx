import { getInit } from "@/components/lib";
import { ArrowBtn } from "@/components/reuseable/icon-btn";
import { register_sc } from "@/components/schema";
import { Button, FormInput, Heading } from "@/components/ui";
import tw from "@/components/ui/tailwind";
import FavIcon from "@/icon/favIcon";
import { Formik } from "formik";
import React, { useState } from "react";
import { Image, Modal, Pressable, Text, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";

export default function SignUpNext() {
  const [isLocation, setIsLocation] = useState(false);
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
      <ArrowBtn style={tw`mt-5`} label="Sign up as a service user" />
      <View style={tw`flex-1 justify-center mb-[70px]`}>
        <View style={tw`mx-auto my-6`}>
          <Image
            source={require("@/assets/image/logo.png")}
            style={{ width: 170, height: 80, resizeMode: "contain" }}
          />
        </View>

        <View>
          <Heading
            variant="h1"
            style={tw`mb-1 text-3xl text-center mx-auto text-primary`}
          >
            Contact Information
          </Heading>

          <Heading variant="p" style={tw`mb-6 mx-10 text-center`}>
            Provide legal contact info to speed up provider contact
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
                  name="contact_number"
                  formik={formik}
                  placeholder="Contact Number"
                  icon={<FavIcon width={20} height={20} name="phone" />}
                  secure
                />
                <FormInput
                  name="location"
                  formik={formik}
                  placeholder="Your location"
                  icon={<FavIcon width={25} height={25} name="location" />}
                  secure
                />

                <Pressable onPress={() => setIsLocation(!isLocation)}>
                  <Text
                    style={tw`text-lg text-primary text-center flex-row items-center`}
                  >
                    <FavIcon width={13} name="location_primary" /> Use my
                    current location
                  </Text>
                </Pressable>

                <Button
                  style={tw`rounded-full h-11`}
                  onPress={formik.handleSubmit}
                >
                  <View style={tw`flex-row items-center`}>
                    <Text style={tw`text-white text-base`}>Sign up</Text>
                  </View>
                </Button>
              </View>
            </>
          )}
        </Formik>
        {/* ------------- modal--------------- */}
        <Modal
          animationType="fade"
          transparent={true}
          visible={isLocation}
          onRequestClose={() => {
            // Android back button press handler (optional)
          }}
        >
          <View
            style={tw`flex-1 justify-center items-center bg-transparent p-6`}
          >
            <View
              style={tw`bg-white rounded-2xl w-full max-w-sm p-7 items-center shadow-sm`}
            >
              <View style={tw`mx-auto`}>
                <Image
                  source={require("@/assets/image/location3.png")}
                  style={{
                    width: "100%",
                    aspectRatio: 1,
                    resizeMode: "contain",
                  }}
                  height={200}
                />
              </View>

              <Text style={tw`text-xl text-center text-black mt-4 mb-2`}>
                Allow Okejiri to access your location
              </Text>

              <Button
                style={tw`w-full bg-transparent border border-black/20 rounded-full`}
              >
                <Text style={tw`text-green-700`}>Allow</Text>
              </Button>
              <Button
                onPress={() => setIsLocation(false)}
                style={tw`w-full bg-transparent border mt-3 border-black/20 rounded-full`}
              >
                <Text style={tw`text-[#FF3A00]`}>Deny</Text>
              </Button>
            </View>
          </View>
        </Modal>
      </View>
    </KeyboardAwareScrollView>
  );
}
