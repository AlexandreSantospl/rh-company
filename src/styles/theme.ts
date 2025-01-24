// theme.ts
import { extendTheme } from "@chakra-ui/react";

const colors = {
  navy: {
    900: "#0A1D37",
    800: "#112F54",
    700: "#163D69",
    600: "#1B4B7E",
  },
  gray: {
    300: "#D1D5DB",
    400: "#9CA3AF",
    500: "#6B7280",
    600: "#4B5563",
  },
  blue: {
    500: "#2563EB",
  },
  red: {
    500: "#DC2626",
  },
  green: {
    500: "#16A34A",
  },
  background: "#0F172A",
  surface: "#1E293B",
  white: "#FFFFFF",
};

const theme = extendTheme({
  colors,
  styles: {
    global: {
      body: {
        bg: "background",
        color: "gray.300",
      },
    },
  },
});

export default theme;
