import { moviesItem } from "@/components/data";
import { MovieCard } from "@/components/reuseable/move-card";
import { Box } from "@/components/ui";
import tw from "@/components/ui/tailwind";
import FavIcon from "@/icon/favIcon";
import React, { useMemo, useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";

export default function Explore() {
  const [search, setSearch] = useState("");

  const filteredMovies = useMemo(() => {
    if (!search) return moviesItem;

    return moviesItem.filter((item: any) =>
      item.title.toLowerCase().includes(search.toLowerCase()),
    );
  }, [search]);

  return (
    <FlatList
      data={filteredMovies}
      numColumns={2}
      keyExtractor={(item: any) => item.id.toString()}
      renderItem={({ item }) => <MovieCard item={item} />}
      columnWrapperStyle={tw`justify-between mb-4`}
      contentContainerStyle={tw`p-2`}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={
        <View style={tw`flex-row items-center gap-2 mb-5`}>
          <View
            style={tw`flex-1 h-14 flex-row items-center px-4 rounded-xl border bg-input`}
          >
            <FavIcon name="search_gray" />
            <TextInput
              value={search}
              onChangeText={setSearch}
              placeholder="Search"
              placeholderTextColor="#6b7281"
              style={tw`flex-1 text-white text-base ml-2`}
            />
          </View>

          <TouchableOpacity>
            <Box
              style={tw`bg-input w-14 h-14 rounded-xl items-center justify-center`}
            >
              <FavIcon width={30} height={40} name="s_apply" />
            </Box>
          </TouchableOpacity>
        </View>
      }
    />
  );
}
