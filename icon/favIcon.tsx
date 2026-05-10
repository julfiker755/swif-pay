import React from "react";
import { SvgXml } from "react-native-svg";
import { favIcon } from "./list";

const icons = { ...favIcon } as const;

type IconName = keyof typeof icons;

interface FavIconProps {
  name: IconName;
  width?: number;
  height?: number;
  color?: string;
}

const FavIcon: React.FC<FavIconProps> = ({
  name,
  width = 20,
  height = 20,
  color,
}) => {
  const xml = icons[name];

  if (!xml) return null;

  return <SvgXml xml={xml} width={width} height={height} fill={color} />;
};

export default React.memo(FavIcon);
