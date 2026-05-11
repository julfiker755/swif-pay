import { Text, View } from "react-native";
import tw from "./tailwind";

interface dividerProps {
  children: string;
  lineStyle?: any;
  style?: any;
}

export const Divider = ({ children, lineStyle, style }: dividerProps) => (
  <View style={[tw`flex-row items-center my-4`, style]}>
    <View style={[tw`flex-1 h-px bg-[#4D4D4D]`, lineStyle]} />
    <Text style={tw`text-[#4D4D4D] mx-4`}>{children}</Text>
    <View style={[tw`flex-1 h-px bg-[#4D4D4D]`, lineStyle]} />
  </View>
);

export const Box = ({ style, children }: any) => (
  <View
    style={[tw`w-12 h-12 flex justify-center items-center rounded-md`, style]}
  >
    {children}
  </View>
);
