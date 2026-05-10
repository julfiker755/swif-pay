import tw from "@/components/ui/tailwind";
import { FormikProps } from "formik";
import React, { useRef } from "react";
import { NativeSyntheticEvent, Text, TextInput, View } from "react-native";

const OTP_LENGTH = 4;

interface OtpInputProps<T> {
  formik: FormikProps<T>;
  name: keyof T & string;
}

export const OtpInput = <T,>({ formik, name }: OtpInputProps<T>) => {
  const inputs = useRef<TextInput[]>([]);

  const handleChange = (text: string, index: number) => {
    const otp = (formik.values[name] as string) || "";
    const otpArray = otp.split("");
    otpArray[index] = text;
    formik.setFieldValue(name, otpArray.join(""));

    // Move focus to next input
    if (text && index < OTP_LENGTH - 1) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (e: NativeSyntheticEvent<any>, index: number) => {
    const otp = (formik.values[name] as string) || "";
    if (e.nativeEvent.key === "Backspace" && index > 0 && !otp[index]) {
      inputs.current[index - 1]?.focus();
    }
  };

  const otpArray = Array.from(
    { length: OTP_LENGTH },
    (_, i) => ((formik.values[name] as string) || "")[i] || "",
  );

  return (
    <View>
      <View style={tw`flex-row justify-between`}>
        {otpArray.map((digit, index) => (
          <TextInput
            key={index}
            ref={(ref) => {
              if (ref) inputs.current[index] = ref;
            }}
            style={tw`w-14 h-14 border-[1px] text-white rounded-xl text-center bg-input text-2xl`}
            keyboardType="number-pad"
            maxLength={1}
            value={digit}
            onChangeText={(text) => handleChange(text, index)}
            onKeyPress={(e) => handleKeyPress(e, index)}
          />
        ))}
      </View>
      {formik.touched[name] && formik.errors[name] && (
        <Text style={tw`text-sm text-right text-red-600 mt-2 ml-1`}>
          {formik.errors[name] as string}
        </Text>
      )}
    </View>
  );
};
