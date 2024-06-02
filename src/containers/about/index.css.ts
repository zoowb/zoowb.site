import { vars } from "@/styles/variables.css";
import { globalStyle, style } from "@vanilla-extract/css";

globalStyle("body", {
  backgroundColor: vars.color.blue500,
});

globalStyle("header", {
  color: "white",
});

export const container = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  textAlign: "center",
  color: "white",
});

export const title = style({
  position: "relative",
  color: "transparent",
  fontSize: "5rem",
  fontWeight: "800",
  WebkitTextStroke: "1px rgba(255, 255, 255, 0.2)",
});

export const name = style({
  position: "absolute",
  bottom: 0,
  left: "50%",
  transform: "translateX(-50%)",
  margin: "auto",
  color: "white",
  fontSize: "4rem",
});

export const birth = style({});

export const bottom = style({
  marginTop: "10%",
  overflowY: "auto",
});

export const desc = style({
  fontWeight: "300",
  whiteSpace: "break-spaces",
  lineHeight: "2",
});

export const education = style({
  display: "flex",
  gap: "1rem",
  lineHeight: "2",
});

export const wordBreak = style({
  whiteSpace: "break-spaces",
  textAlign: "left",
});
