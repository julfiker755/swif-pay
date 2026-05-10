import { assets } from "@/assets";
import { Button, Heading } from "@/components/ui";
import tw from "@/components/ui/tailwind";
import { Link } from "expo-router";
import { ImageBackground, StatusBar, Text, View } from "react-native";

export default function Index() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <ImageBackground
        source={assets.bg}
        resizeMode="cover"
        style={tw`flex-1 justify-end`}
      >
        <View style={tw`absolute inset-0 bg-black/5`} />

        <View style={tw`px-6 pb-10`}>
          <Heading variant="h1" style={tw`text-center text-white`}>
            Welcome to Mova
          </Heading>

          <Heading style={tw`text-center text-white mt-3`}>
            The best movie streaming app of the century{"\n"}
            to make your days great!
          </Heading>

          <View style={tw`flex-row justify-center mt-5`}>
            {[0, 1, 2].map((_, idx) => (
              <View
                key={idx}
                style={tw`w-2 h-2 rounded-full ${idx === 1 ? "bg-primary w-6" : "bg-gray-400"} mx-1`}
              />
            ))}
          </View>
          <Link style={tw`mt-5`} href={"/(auth)/login"} asChild>
            <Button style={tw`rounded-full w-full h-12`}>
              <Text style={tw`text-lg text-white font-semibold`}>
                Get Started
              </Text>
            </Button>
          </Link>
        </View>
      </ImageBackground>
    </>
  );
}
