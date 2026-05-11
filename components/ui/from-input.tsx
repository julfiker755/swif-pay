import tw from "@/components/ui/tailwind";
import FavIcon from "@/icon/favIcon";
import { FormikProps } from "formik";
import React, { useRef, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

type FormValues = Record<string, any>;

interface FormInputProps<T extends FormValues> {
  name: keyof T & string;
  formik: FormikProps<T>;
  placeholder?: string;
  icon?: any;
  secure?: boolean;
  [key: string]: any;
}

export const FormInput = <T extends FormValues>({
  name,
  formik,
  placeholder,
  icon,
  secure,
  ...props
}: FormInputProps<T>) => {
  const [show, setShow] = useState(false);
  const inputRef = useRef<TextInput>(null);

  const { values, errors, touched, handleChange, handleBlur } = formik;
  const error =
    touched[name] && errors[name] ? String(errors[name]) : undefined;

  return (
    <View>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => inputRef.current?.focus()}
        style={[
          tw`h-14 flex-row items-center px-4 rounded-full border border-[#000000]/20`,
        ]}
      >
        {icon && icon}
        <TextInput
          ref={inputRef}
          value={String(values[name] || "")}
          onChangeText={handleChange(name)}
          onBlur={handleBlur(name)}
          placeholder={placeholder}
          placeholderTextColor="#6b7281"
          secureTextEntry={secure && !show}
          style={tw`flex-1 text-black text-base`}
          {...props}
        />
        {secure && (
          <TouchableOpacity onPress={() => setShow(!show)}>
            {show ? <FavIcon name="eye" /> : <FavIcon name="eyeOff" />}
          </TouchableOpacity>
        )}
      </TouchableOpacity>
      {error && (
        <Text style={tw`text-red-500 text-right text-xs mt-1 mr-2`}>
          {error}
        </Text>
      )}
    </View>
  );
};
