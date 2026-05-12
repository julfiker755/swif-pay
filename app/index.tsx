import { Heading } from "@/components/ui";
import tw from "@/components/ui/tailwind";
import FavIcon from "@/icon/favIcon";
import { useRouter } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const router = useRouter();
  return (
    <>
      <View style={tw`flex-1`}>
        <View style={tw`mx-auto mt-4`}>
          <Image
            source={require("../assets/image/logo.png")}
            style={{ width: 170, height: 80, resizeMode: "contain" }}
          />
        </View>
        <View style={tw`mx-auto`}>
          <Image
            source={require("../assets/image/login-img.png")}
            style={{ width: 350, height: 300, resizeMode: "contain" }}
          />
        </View>
        <View style={tw`px-6`}>
          <Heading variant="h1" style={tw`text-center text-black`}>
            Choose your role
          </Heading>

          <Heading style={tw`text-center text-black mt-3`}>
            Book trusted services as a User, or list and manage your offerings
            as a Service Provider on swifpay.
          </Heading>
          <View style={tw`gap-4 mt-6`}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={tw`bg-white rounded-3xl px-4 py-2 flex-row items-center justify-between`}
              onPress={() => {
                router.push({
                  pathname: "/(auth)/login",
                  params: {
                    role: "user",
                  },
                });
              }}
            >
              <View style={tw`flex-row items-center gap-2`}>
                <View
                  style={tw`size-14 rounded-full bg-primary items-center justify-center`}
                >
                  <FavIcon width={30} height={30} name="user1" />
                </View>

                <Text style={tw`text-black text-2xl font-medium`}>
                  Service user
                </Text>
              </View>

              <FavIcon name="arrowTopRight" />
            </TouchableOpacity>

            {/* Service Provider */}
            <TouchableOpacity
              activeOpacity={0.8}
              style={tw`bg-white rounded-3xl px-4 py-2 flex-row items-center justify-between`}
              onPress={() => {
                router.push({
                  pathname: "/(auth)/login",
                  params: {
                    role: "provider",
                  },
                });
              }}
            >
              <View style={tw`flex-row items-center gap-2`}>
                <View
                  style={tw`size-14 rounded-full bg-primary items-center justify-center`}
                >
                  <FavIcon width={30} height={30} name="provider" />
                </View>

                <Text style={tw`text-black text-2xl font-medium`}>
                  Service provider
                </Text>
              </View>

              <FavIcon name="arrowTopRight" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}
