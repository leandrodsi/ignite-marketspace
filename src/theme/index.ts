import { extendTheme } from "native-base";

export const THEME = extendTheme({
  colors: {
    blue: {
      700: "#364D9D",
      500: "#647AC7",
      600: "#647AC7",
      510: "#647AC71A",
    },
    gray: {
      700: "#1A181B",
      600: "#3E3A40",
      500: "#5F5B62",
      400: "#9F9BA1",
      300: "#D9D8DA",
      200: "#EDECEE",
      100: "#F7F7F8",
    },
    white: "#FFFFFF",
    black30: "#0000004D",
    red: {
      500: "#EE7979",
    },
  },
  fonts: {
    heading: "Karla_700Bold",
    body: "Karla_400Regular",
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 20,
    xl: 24,
  },
  sizes: {
    "0.2": 0.5,
    11: 45,
    14: 56,
    17: 68,
    22: 90,
    33: 148,
    70: 280,
  },
});
