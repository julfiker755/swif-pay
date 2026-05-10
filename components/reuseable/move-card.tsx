import tw from "@/components/ui/tailwind";
import React from "react";
import { Image, Text, View } from "react-native";

interface Props {
  item: {
    title: string;
    rating: number;
    thumbnail: string;
  };
}

export function MovieCard({ item }: Props) {
  return (
    <View style={tw`mr-4`}>
      <View style={tw`relative`}>
        <Image
          source={{ uri: item.thumbnail }}
          style={tw`w-36 h-52 rounded-xl`}
          resizeMode="cover"
        />

        {/* Rating badge */}
        <View
          style={tw`absolute top-2 left-2 bg-red-600 px-2 py-0.5 rounded-md`}
        >
          <Text style={tw`text-white text-xs font-bold`}>{item.rating}</Text>
        </View>
      </View>
    </View>
  );
}
