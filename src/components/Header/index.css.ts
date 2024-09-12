import { vars } from "@/styles/variables.css";
import { globalStyle, style } from "@vanilla-extract/css";

export const header = style({
  position: "fixed",
  width: "100%",
  top: 0,

  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "20px",
  background: vars.color.gray500,
});

export const title = style({
  fontWeight: "700",
  fontSize: "20px",
  color: "inherit",
});

export const menu = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "inherit",
});

globalStyle("a", {
  textDecoration: "none",
});
