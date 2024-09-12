import { vars } from "@/styles/variables.css";
import { style } from "@vanilla-extract/css";

export const statusBar = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 10px",
});

export const clock = style({
  color: "white",
  fontSize: vars.fontSize.tiny,
  fontWeight: 700,
});
