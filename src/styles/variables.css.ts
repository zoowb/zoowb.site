import { createGlobalTheme } from "@vanilla-extract/css";

export const vars = createGlobalTheme(":root", {
  fontSize: {
    t1: "3rem",
    t2: "2.5rem",
    t3: "2rem",
    t4: "1.5rem",
    large: "1.5rem",
    xlarge: "3rem",
    medium: "1.1rem",
    small: "1rem",
    caption: "0.9rem",
    tiny: "0.7rem",
  },
  color: {
    gray100: "#F1F1F1",
    gray200: "#F4F4F4",
    gray500: "#D9D9D9",
    gray700: "#797979",
    green500: "#349B00",
    green300: "#4FEC00",
    orange200: "#f5d9a8",
    orange300: "#FF7E20",
    blue200: "#cbe2f9",
    blue300: "#1068bf",
    blue500: "#002979",
    yellow300: "#FFCF00",
    cream: "#FFF1C0",
    brown: "#564300",
    black: "#090707",
    white: "#ffffff",
  },
});
