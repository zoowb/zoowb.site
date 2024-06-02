import { globalStyle, style } from "@vanilla-extract/css";

export const header = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  margin: "20px",
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
