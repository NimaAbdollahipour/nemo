import { useColorScheme } from "react-native";

import { Colors } from "../constants/Colors";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export function useThemeColor() {
  const mode = useColorScheme();
  const { theme } = useContext(ThemeContext);
  return Colors[mode][theme];
}
