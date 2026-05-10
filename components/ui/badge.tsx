import React, { memo } from "react";
import { Text } from "react-native";
import tw from "./tailwind";

// Define variant styles
const variants = {
  default: tw`bg-gray-400 text-white`,
  success: tw`bg-green-600 text-white`,
  pending: tw`bg-yellow-500 text-white`,
  ongoing: tw`bg-blue-500 text-white`,
  completed: tw`bg-green-800 text-white`,
};
interface BadgeProps {
  variant?: keyof typeof variants;
  style?: any;
  label?: string;
}

const BadgeComponent: React.FC<BadgeProps> = ({
  variant = "default",
  style,
  label,
}) => {
  return (
    <Text style={[tw`rounded-full py-1 px-3 self-start`, variants[variant], style]}>
      {label}
    </Text>
  );
};

export const Badge = memo(BadgeComponent);
