import { Text, View } from "react-native";
import tw from "./tailwind";

interface dividerProps {
  children: string;
  lineStyle?: any;
  style?: any;
}

export const Divider = ({ children, lineStyle, style }: dividerProps) => (
  <View style={[tw`flex-row items-center my-4`, style]}>
    <View style={[tw`flex-1 h-px bg-gray-500`, lineStyle]} />
    <Text style={tw`text-white mx-4`}>{children}</Text>
    <View style={[tw`flex-1 h-px bg-gray-500`, lineStyle]} />
  </View>
);

export const Box = ({ style, children }: any) => (
  <View
    style={[tw`w-12 h-12 flex justify-center items-center rounded-md`, style]}
  >
    {children}
  </View>
);
