import { vars } from "@/styles/variables.css";
import { style } from "@vanilla-extract/css";

export const header = style({
  display: "flex",
  justifyContent: "space-between",
  margin: "20px",
});

export const title = style({
  fontWeight: "700",
  fontSize: vars.fontSize.medium,
  color: vars.color.blue500,
});
