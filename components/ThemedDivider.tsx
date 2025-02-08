import { useThemeColor } from "@/hooks/useThemeColor";
import { StyleSheet, View, type ViewProps } from "react-native";

export type ThemedDividerProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export function ThemedDivider({
  style,
  lightColor,
  darkColor,
  ...rest
}: ThemedDividerProps) {
  const borderColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "border"
  );
  return <View style={[styles.lineStyle, { borderColor }]} {...rest} />;
}

const styles = StyleSheet.create({
  lineStyle: {
    borderWidth: 0.5,
    margin: 10,
  },
});
