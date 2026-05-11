import FavIcon from "@/icon/favIcon";
import { useRouter } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import tw from "../ui/tailwind";

interface arrowBtnProps {
  style?: any;
  label?: string;
  labelStyle?: any;
  boxStyle?: any;
}

export function ArrowBtn({
  style,
  label,
  labelStyle,
  boxStyle,
}: arrowBtnProps) {
  const router = useRouter();

  return (
    <TouchableOpacity
      onPress={() => router.back()}
      style={[tw`flex-row items-center gap-2`, style]}
    >
      <View
        style={[
          tw`bg-white size-14 rounded-full items-center justify-center`,
          boxStyle,
        ]}
      >
        <FavIcon name="leftArrow" />
      </View>
      {label && (
        <Text style={[tw`text-black text-2xl font-medium`, labelStyle]}>
          {label}
        </Text>
      )}
    </TouchableOpacity>
  );
}
