import tw from "@/components/ui/tailwind";
import { tabIcon } from "@/icon/tab-icon";
import {
    BottomTabBarProps,
    BottomTabNavigationOptions,
} from "@react-navigation/bottom-tabs";
import { Tabs } from "expo-router";
import React, { memo } from "react";
import { TouchableOpacity, View } from "react-native";
import { SvgXml } from "react-native-svg";

type TabRouteName = "home" | "explore" | "favorite" | "profile";

type IconSet = {
  active: string;
  inactive: string;
};

interface TabButtonProps {
  routeName: TabRouteName;
  isFocused: boolean;
  onPress: () => void;
  onLongPress: () => void;
  accessibilityLabel?: string;
  testID?: string;
}

const icons: Record<TabRouteName, IconSet> = {
  home: {
    active: tabIcon.home,
    inactive: tabIcon.home,
  },
  explore: {
    active: tabIcon.home,
    inactive: tabIcon.home,
  },
  favorite: {
    active: tabIcon.home,
    inactive: tabIcon.home,
  },
  profile: {
    active: tabIcon.home,
    inactive: tabIcon.home,
  },
};

/* ============================================================
   Tab Button Component
============================================================ */

const TabButton = memo(
  ({
    routeName,
    isFocused,
    onPress,
    onLongPress,
    accessibilityLabel,
    testID,
  }: TabButtonProps) => {
    const iconSet = icons[routeName];
    const iconXml = isFocused ? iconSet.active : iconSet.inactive;

    return (
      <TouchableOpacity
        accessibilityRole="button"
        accessibilityState={isFocused ? { selected: true } : {}}
        accessibilityLabel={accessibilityLabel}
        testID={testID}
        onPress={onPress}
        onLongPress={onLongPress}
        style={tw`flex-1 justify-center items-center`}
      >
        <View
          style={
            isFocused
              ? tw`bg-white/80 rounded-full p-3`
              : tw`rounded-full p-3 border border-slate-100/10`
          }
        >
          <SvgXml xml={iconXml} width={24} height={24} />
        </View>
      </TouchableOpacity>
    );
  },
);

TabButton.displayName = "TabButton";

/* ============================================================
   Custom Tab Bar
============================================================ */

const CustomTabBar = ({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) => {
  return (
    <View
      style={tw`flex-row mx-10 px-2 py-3 bg-input rounded-full absolute bottom-6 left-0 right-0 justify-around items-center`}
    >
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;

        const { options } = descriptors[route.key] as {
          options: BottomTabNavigationOptions;
        };

        const routeName = route.name as TabRouteName;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(routeName);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TabButton
            key={route.key}
            routeName={routeName}
            isFocused={isFocused}
            onPress={onPress}
            onLongPress={onLongPress}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
          />
        );
      })}
    </View>
  );
};

/* ============================================================
   Tabs Layout
============================================================ */

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tabs.Screen name="home" />
      <Tabs.Screen name="explore" />
      <Tabs.Screen name="favorite" />
      <Tabs.Screen name="profile" />
    </Tabs>
  );
};

export default TabLayout;
