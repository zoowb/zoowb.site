import { vars } from "@/styles/variables.css";
import { atom } from "recoil";

type Color = {
  background: string;
  header: string;
};

export const colorState = atom<Color>({
  key: "colorState",
  default: {
    background: vars.color.gray100,
    header: vars.color.blue500,
  },
});
