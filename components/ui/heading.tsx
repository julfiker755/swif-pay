import React, { memo } from "react";
import { Text } from "react-native";
import tw from "./tailwind";

const variants = {
  h1: tw`text-3xl font-bold`,
  h2: tw`text-2xl font-bold`,
  h3: tw`text-lg font-bold`,
  p: tw`text-base`,
} as const;

type Variant = keyof typeof variants;

interface HeadingProps {
  variant?: Variant;
  style?: any;
  children: any;
}

const HeadingComponent: React.FC<HeadingProps> = ({
  variant = "p",
  style,
  children,
}) => {
  return (
    <Text style={[tw`text-foreground`, variants[variant], style]}>
      {children}
    </Text>
  );
};

export const Heading = memo(HeadingComponent);
