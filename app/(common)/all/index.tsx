import { moviesItem } from "@/components/data";
import { MovieCard } from "@/components/reuseable/move-card";
import tw from "@/components/ui/tailwind";
import FavIcon from "@/icon/favIcon";
import { Link, useLocalSearchParams } from "expo-router";
import { FlatList, Text, View } from "react-native";

export default function All() {
  const { status } = useLocalSearchParams();
  return (
    <View style={tw`px-3`}>
      <FlatList
        data={moviesItem}
        numColumns={2}
        renderItem={({ item }: any) => <MovieCard item={item} />}
        keyExtractor={(item: any) => item.id}
        columnWrapperStyle={tw`justify-between mb-4`}
        ListHeaderComponent={
          <View style={tw`flex-row justify-between my-3`}>
            <Text style={tw`text-white text-lg`}>Top 10 Movies This Week</Text>
            <Link href={"/(tabs)/explore"}>
              <FavIcon name="search" />
            </Link>
          </View>
        }
      />
    </View>
  );
}
