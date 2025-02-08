import { type ViewProps, View, StyleSheet } from "react-native";

import { useThemeColor } from "@/hooks/useThemeColor";

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
  type?: "newsbox" | "default";
};

export function ThemedContainer({
  style,
  lightColor,
  darkColor,
  type = "default",
  ...rest
}: ThemedViewProps) {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );
  return (
    <View
      style={[
        { backgroundColor },
        type == "newsbox" ? { alignContent: "flex-start" } : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({});
