import { DarkTheme, ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { KeyboardProvider } from "react-native-keyboard-controller";
import "react-native-reanimated";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import tw from "../components/ui/tailwind";

export const unstable_settings = {
  initialRouteName: "index",
};

export default function RootLayout() {
  const { top, bottom } = useSafeAreaInsets();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView
        style={[tw`flex-1`, { paddingTop: top, paddingBottom: bottom }]}
      >
        <KeyboardProvider>
          <ThemeProvider value={DarkTheme}>
            <Stack
              screenOptions={{
                headerShown: false,
                statusBarAnimation: "fade",
                statusBarStyle: "light",
              }}
            >
              <Stack.Screen name="index" />
            </Stack>
            <StatusBar style="auto" />
          </ThemeProvider>
        </KeyboardProvider>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}
