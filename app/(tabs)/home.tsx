import { assets } from "@/assets";
import { movies } from "@/components/data";
import { AutoSliderCarousel } from "@/components/reuseable/carousel";
import { MovieCard } from "@/components/reuseable/move-card";
import { Button } from "@/components/ui";
import tw from "@/components/ui/tailwind";
import FavIcon from "@/icon/favIcon";
import { Link, useRouter } from "expo-router";
import React from "react";
import {
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Home() {
  const router = useRouter();
  return (
    <ScrollView style={tw`flex-1`} showsVerticalScrollIndicator={false}>
      <View style={tw`flex-1`}>
        <ImageBackground
          source={require("@/assets/demo/move.png")}
          resizeMode="cover"
          style={tw`h-52 w-full justify-between`}
        >
          <View style={tw`p-4`}>
            <View style={tw`flex-row justify-between items-center`}>
              <Image style={tw`w-7 h-7`} source={assets.logo} />
              <View style={tw`flex-row gap-x-3`}>
                <Link href={"/(tabs)/explore"}>
                  <FavIcon name="search" />
                </Link>
                <Link href={"/(common)/notification"}>
                  <FavIcon name="noti" />
                </Link>
              </View>
            </View>
          </View>
          <View style={tw`p-4`}>
            <Text style={tw`text-2xl font-bold text-white`}>Dr. Strange 2</Text>
            <Text style={tw`text-white`}>
              Action ,SuperHero ,Science Fiction
            </Text>
            <View style={tw`mt-1`}>
              <Button style={tw`w-20 h-8 rounded-full`}>
                <View style={tw`flex-row items-center`}>
                  <FavIcon name="play" />
                  <Text style={tw`text-white text-base`}> Play</Text>
                </View>
              </Button>
            </View>
          </View>
        </ImageBackground>
        <View style={tw`px-4`}>
          <View style={tw`flex-row justify-between mb-3 mt-4`}>
            <Text style={tw`text-white text-lg`}>Top 10 Movies This Week</Text>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => {
                router.push({
                  pathname: "/(common)/all",
                  params: { status: "top" },
                });
              }}
              style={tw`z-10`}
            >
              <Text style={tw`text-primary text-lg`}>See all</Text>
            </TouchableOpacity>
          </View>
          <AutoSliderCarousel
            data={movies}
            renderItem={({ item }: any) => <MovieCard item={item} />}
            keyExtractor={(item: any) => item.id}
            itemWidth={160}
            interval={3000}
          />
        </View>
        <View style={tw`px-4 mt-3`}>
          <View style={tw`flex-row justify-between my-3`}>
            <Text style={tw`text-white text-lg`}>New Releases</Text>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => {
                router.push({
                  pathname: "/(common)/all",
                  params: { status: "top" },
                });
              }}
              style={tw`z-10`}
            >
              <Text style={tw`text-primary text-lg`}>See all</Text>
            </TouchableOpacity>
          </View>
          <AutoSliderCarousel
            data={movies}
            renderItem={({ item }: any) => <MovieCard item={item} />}
            keyExtractor={(item: any) => item.id}
            itemWidth={160}
            interval={3000}
          />
        </View>
        <View style={tw`px-4 mb-10 mt-3`}>
          <View style={tw`flex-row justify-between my-3`}>
            <Text style={tw`text-white text-lg`}>All Movie</Text>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => {
                router.push({
                  pathname: "/(common)/all",
                  params: { status: "all" },
                });
              }}
              style={tw`z-10`}
            >
              <Text style={tw`text-primary text-lg`}>See all</Text>
            </TouchableOpacity>
          </View>
          <AutoSliderCarousel
            data={movies}
            renderItem={({ item }: any) => <MovieCard item={item} />}
            keyExtractor={(item: any) => item.id}
            itemWidth={160}
            interval={3000}
          />
        </View>
      </View>
    </ScrollView>
  );
}
